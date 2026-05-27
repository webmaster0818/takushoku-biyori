#!/usr/bin/env python3
"""
takushoku-biyori 19記事に BreadcrumbList JSON-LD を追加。
Article + FAQ schema は既設置済み。Breadcrumb schema のみ追加。
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
SITE_URL = "https://takushoku-biyori.com"

# Breadcrumb 抽出パターン: <Breadcrumbs /> 関数定義内の HTML
BREADCRUMBS_FN_PATTERN = re.compile(
    r'function Breadcrumbs\(\) \{[\s\S]*?\}',
    re.MULTILINE
)
BC_ITEM_LINK = re.compile(
    r'<Link href="([^"]+)"[^>]*>\s*([^<]+?)\s*</Link>',
)
BC_ITEM_SPAN = re.compile(
    r'<span[^>]*>\s*([^<]+?)\s*</span>',
)

# Insertion point pattern - after <script ... faqJsonLd .../>
INSERT_AFTER = re.compile(
    r'(<script\s+type="application/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(faqJsonLd\)\s*\}\}\s*/>)',
)


def build_breadcrumb_schema(items: list) -> dict:
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items,
    }


def extract_breadcrumbs(content: str) -> list:
    """Extract breadcrumb items from <Breadcrumbs /> function."""
    fn_match = BREADCRUMBS_FN_PATTERN.search(content)
    if not fn_match:
        return []
    fn_text = fn_match.group(0)
    items = []
    position = 1

    # Iterate through the function looking for <li> with Link or span
    # We'll find all Link and span in order
    combined = []
    for m in BC_ITEM_LINK.finditer(fn_text):
        combined.append(("link", m.start(), m.group(1), m.group(2).strip()))
    for m in BC_ITEM_SPAN.finditer(fn_text):
        combined.append(("span", m.start(), None, m.group(1).strip()))
    combined.sort(key=lambda x: x[1])

    for kind, _, href, name in combined:
        if kind == "link" and href:
            items.append({
                "@type": "ListItem",
                "position": position,
                "name": name,
                "item": f"{SITE_URL}{href}",
            })
        else:
            items.append({
                "@type": "ListItem",
                "position": position,
                "name": name,
            })
        position += 1
    return items


def process_article(article_path: Path) -> tuple[bool, str]:
    slug = article_path.parent.name
    content = article_path.read_text(encoding="utf-8")

    if 'BreadcrumbList' in content:
        return False, "already has BreadcrumbList"

    items = extract_breadcrumbs(content)
    if not items:
        return False, "no breadcrumbs found"

    schema = build_breadcrumb_schema(items)
    schema_json = json.dumps(schema, ensure_ascii=False)
    snippet = (
        '<script\n'
        '        type="application/ld+json"\n'
        f'        dangerouslySetInnerHTML={{{{ __html: {json.dumps(schema_json)} }}}}\n'
        '      />\n      '
    )

    m = INSERT_AFTER.search(content)
    if not m:
        return False, "no insertion point"

    new_content = content[:m.end()] + "\n      " + snippet + content[m.end():]
    article_path.write_text(new_content, encoding="utf-8")
    return True, f"added breadcrumb with {len(items)} items"


def main():
    articles = sorted([d for d in ARTICLES_DIR.iterdir() if d.is_dir()])
    print(f"Processing {len(articles)} articles...")
    stats = {"updated": 0, "skipped": 0, "errors": 0}
    for d in articles:
        page = d / "page.tsx"
        if not page.exists():
            stats["errors"] += 1
            continue
        try:
            success, msg = process_article(page)
            if success:
                stats["updated"] += 1
                print(f"  ✓ {d.name}: {msg}")
            else:
                stats["skipped"] += 1
                print(f"  ⏭ {d.name}: {msg}")
        except Exception as e:
            stats["errors"] += 1
            print(f"  ✗ {d.name}: {e}")
    print(f"\n✅ Updated: {stats['updated']}, ⏭ Skipped: {stats['skipped']}, ❌ Errors: {stats['errors']}")


if __name__ == "__main__":
    main()
