"""kwexp 記事データ用の小さな部品（gen-kwexp-202611.py と kwexp-202611/*.py が使う）"""
import json


def js(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def table(headers, rows, indent=8):
    pad = " " * indent
    out = [f"{pad}<ComparisonTable", f"{pad}  headers={{[{', '.join(js(h) for h in headers)}]}}", f"{pad}  rows={{["]
    for r in rows:
        out.append(f"{pad}    [{', '.join(js(str(c)) for c in r)}],")
    out.append(f"{pad}  ]}}")
    out.append(f"{pad}/>")
    return "\n".join(out)


def yen(n) -> str:
    return f"{round(n):,}円"


def src(text: str) -> str:
    return f'        <p className="text-xs text-warm-gray mb-6">{text}</p>'


def p(text: str, mb=6) -> str:
    return f'        <p className="text-sm mb-{mb} leading-relaxed">{text}</p>'


def h2(i: str, label: str) -> str:
    return f'        <SectionHeading id="{i}">{label}</SectionHeading>'


def h3(label: str) -> str:
    return f"        <SubHeading>{label}</SubHeading>"


def a(href: str, text: str) -> str:
    if href.startswith("/"):
        return f'<Link href="{href}" className="text-accent underline">{text}</Link>'
    return f'<a href="{href}" target="_blank" rel="noopener noreferrer" className="text-accent underline">{text}</a>'


def ul(items) -> str:
    li = "".join(f"<li>{x}</li>" for x in items)
    return f'        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1">{li}</ul>'
