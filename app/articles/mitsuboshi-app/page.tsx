import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "三ツ星ファームのアプリでできること｜iPhone・Android版の対応と、Web・LINEとの使い分け【2026年11月】";
const ARTICLE_DESCRIPTION =
  "三ツ星ファームの公式アプリ（iPhone・Android）でできることを、App Store・Google Playの掲載内容で確認しました。メニュー選択・自動セット・代替商品の設定・お届け日の変更、対応端末（タブレットは動作保証外）、停止・解約の窓口も整理しています（2026年11月25日確認）。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/mitsuboshi-app/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "三ツ星ファーム アプリ, 三ツ星ファーム アプリ 解約, 三ツ星ファーム アプリ android, 三ツ星ファーム メニュー変更, 三ツ星ファーム ログイン",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-25T00:00:00+09:00",
    modifiedTime: "2026-11-25T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "三ツ星ファームのアプリはAndroidでも使えますか？", answer: "使えます。Google Playに「三ツ星ファーム - 冷凍 お弁当 宅配サービス」（inglewood Co., Ltd.）が掲載されています（2026年11月25日確認）。タブレット端末は動作保証外です。" },
  { question: "アプリがないと注文できませんか？", answer: "Webからも注文できます。公式サイトは「WEB・アプリから、ご注文も簡単」と案内しています。" },
  { question: "アプリで解約できますか？", answer: "定期便の停止・解約は、次回出荷予定日の4日前までにアプリ・公式LINE・電話のいずれかで手続きできます。長期継続応援プラン・冷凍庫プレゼントプランの契約中は電話のみです。" },
  { question: "毎回メニューを選ぶのが面倒です。", answer: "アプリの「自動セット」をONにすると、人気商品を中心にメニューが自動でセットされます。毎回必ず入れたいメニューは「固定メニュー登録」で設定できます（App Storeのバージョン履歴）。" },
  { question: "iPadで使えますか？", answer: "App StoreのiPhone版は「iPhoneのみ対応」で、両ストアともタブレット端末は動作保証外としています。iPadの場合はWebのマイページをご利用ください。" },
];

const sections = [
  { id: "answer", label: "三ツ星ファームのアプリの概要" },
  { id: "features", label: "アプリでできること" },
  { id: "stores", label: "App Store・Google Playの掲載情報" },
  { id: "cancel", label: "停止・解約はアプリでできるか" },
  { id: "notes", label: "使う前に知っておきたいこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <Link href="/articles/#kuchikomi" className="text-foreground/70 hover:text-accent transition-colors">口コミ・評判</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">三ツ星ファームのアプリ</span>
        </li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">
              {i + 1}. {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent/10">
            {headers.map((h) => (
              <th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors">
        <span>{question}</span>
        <span className="faq-arrow text-warm-gray ml-2">&#9660;</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}



export default function MitsuboshiAppPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-25T00:00:00+09:00",
    dateModified: "2026-11-25T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://takushoku-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "口コミ・評判" },
      { "@type": "ListItem", position: 3, name: "三ツ星ファームのアプリ" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">口コミ・評判</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-25">公開: 2026年11月25日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事のリンクはすべて各社の公式サイト・アプリストアで、アフィリエイト広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            三ツ星ファームには、iPhone版とAndroid版の<strong>公式アプリ</strong>があります（提供元 inglewood Co., Ltd.・無料）。定期便のメニュー選択、お届け日の変更、1食からの追加、停止の手続きまでアプリで行えます。
          </p>
          <p className="mb-3">
            この記事では、App StoreとGoogle Playの掲載内容と公式サイトの案内を2026年11月25日に確認し、アプリでできること、対応端末、Web・公式LINEとの使い分けをまとめました。
          </p>
          <p>アプリの機能や表記は更新されることがあります。最新の内容は各ストアの掲載ページでご確認ください。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">三ツ星ファームのアプリ（要点）</p>
          <p className="text-sm leading-relaxed mb-4">公式アプリはiPhone（iOS 15.1以降）とAndroidで提供されています。メニュー選択・おまかせの自動セット・苦手食材の登録・欠品時の代替商品の設定・お届け日の変更・1食からの追加・クーポン登録ができます。タブレット端末は動作保証外です。定期便の停止・解約は、次回出荷予定日の4日前までにアプリ・公式LINE・電話のいずれかで行います。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ アプリでできること</p>
              <ul className="space-y-1 list-disc list-inside"><li>メニュー選択と自動セット（おまかせ）</li><li>欠品時の代替商品を事前に設定</li><li>停止の手続きもアプリから可能</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>タブレット端末は動作保証外</li><li>iPhone版はiPadに非対応（iPhoneのみ）</li><li>一部のプランは停止の窓口が電話のみ</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="answer">三ツ星ファームのアプリの概要</SectionHeading>
        <ComparisonTable
          headers={["項目", "内容（2026年11月25日確認）"]}
          rows={[
            ["提供元", "inglewood Co., Ltd.（三ツ星ファームの運営会社）"],
            ["料金", "無料（App Store）"],
            ["iPhone版", "App Store「三ツ星ファーム - 宅配で届く栄養バランス◎の冷凍弁当」・iPhoneのみ対応・iOS 15.1以降"],
            ["Android版", "Google Play「三ツ星ファーム - 冷凍 お弁当 宅配サービス」・5万回以上ダウンロード・最終更新日 2026/11/09"],
            ["タブレット", "動作保証外（両ストアの説明文）"],
            ["Webとの関係", "公式サイトは「WEB・アプリから、ご注文も簡単」と案内。Webからも注文・変更ができる"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://apps.apple.com/jp/app/id6468603197" target="_blank" rel="noopener noreferrer" className="text-accent underline">App Store</a>・<a href="https://play.google.com/store/apps/details?id=jp.mitsuboshifarm" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Play</a>の掲載ページ、<a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式サイト</a>（2026年11月25日確認）。</p>
        <p className="text-sm mb-6 leading-relaxed">アプリは注文の受け付け窓口のひとつで、料金やメニューはWebと同じです。料金・味の評判は<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">三ツ星ファームの口コミ・評判</Link>、クーポンは<Link href="/articles/mitsuboshi-coupon/" className="text-accent underline">三ツ星ファームのクーポン</Link>をご覧ください。</p>
        <SectionHeading id="features">アプリでできること</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">両ストアの説明文の「アプリでできること」は同じ内容です。次のとおりです。</p>
        <ComparisonTable
          headers={["機能", "ストアの説明（要約）", "向いている人"]}
          rows={[
            ["メニュー選択", "125種類以上から毎回自由に入れ替え。お気に入り登録でまとめて閲覧", "毎回自分で選びたい"],
            ["おまかせ（自動セット）", "人気メニューを自動でセット。メニュー診断でおすすめリストも作成", "選ぶ時間を減らしたい"],
            ["苦手・アレルギー食材の登録", "該当メニューにアイコンを表示し、うっかり選択を防止", "苦手な食材がある"],
            ["代替商品の設定", "欠品時は、あらかじめ設定した代替商品をお届け", "欠品で入れ替わるのを避けたい"],
            ["お届け日の変更", "曜日・時間帯を事前に設定", "受け取りの予定が変わりやすい"],
            ["1食から追加", "定期便に好きな商品を1食分から追加", "次回分を少し増やしたい"],
            ["注文確定で商品を確保", "人気商品も次回お届け分を先に確保", "人気メニューを確実に受け取りたい"],
            ["クーポン登録・ランク特典の確認", "マイページからいつでも", "三ツ星ランクの特典を使いたい"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://apps.apple.com/jp/app/id6468603197" target="_blank" rel="noopener noreferrer" className="text-accent underline">App Store</a>・<a href="https://play.google.com/store/apps/details?id=jp.mitsuboshifarm" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Play</a>の説明文（2026年11月25日確認）を当サイトで要約。</p>
        <SubHeading>最近追加された機能（App Storeのバージョン履歴）</SubHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>6.15.0: ホームの「注文済み」タブから直近2回の注文メニューを確認・カートへ追加。マイページ「お友だち紹介」から紹介用URLを取得</li><li>6.16.0: お届けメニューの「自動セット」機能（ONにすると人気商品を中心に自動でセット）</li><li>6.20.0: 自動入れ替えに「固定メニュー登録」（毎回必ず届けたいメニューを設定）・適用タイミングの選択</li><li>6.21.0: カート確認画面でのおすすめ商品表示</li><li>7.0.0〜7.8.0（8月25日〜11月11日）: 不具合の修正・安定性の向上</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://apps.apple.com/jp/app/id6468603197" target="_blank" rel="noopener noreferrer" className="text-accent underline">App Store バージョン履歴</a>（2026年11月25日確認）。各バージョンの日付は掲載ページに年の表記がないため、バージョン番号で記載しています。</p>
        <SectionHeading id="stores">App Store・Google Playの掲載情報</SectionHeading>
        <ComparisonTable
          headers={["項目", "App Store（iPhone）", "Google Play（Android）"]}
          rows={[
            ["アプリ名", "三ツ星ファーム - 宅配で届く栄養バランス◎の冷凍弁当", "三ツ星ファーム - 冷凍 お弁当 宅配サービス"],
            ["対応", "iPhoneのみ・iOS 15.1以降", "Android（タブレットは動作保証外）"],
            ["評価", "4.2（9,378件の評価）", "4.0（1,550件のレビュー）"],
            ["ダウンロード数", "掲載なし", "5万回以上"],
            ["サイズ", "37.7MB", "掲載なし"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※各ストアの掲載ページの表示（2026年11月25日確認）。評価は各ストアの利用者による評価で、当サイトの評価ではありません。件数は日々変わります。</p>
        <p className="text-sm mb-6 leading-relaxed">App Storeのレビュー欄には、欠品の多さや、欠品時の代替商品の選択画面で決定に進めなかったという2024〜2025年の投稿も見られます。代替商品の設定や固定メニュー登録は、その後のバージョンで追加・改善が続いています。</p>
        <SectionHeading id="cancel">停止・解約はアプリでできるか</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">公式サイトの定期購入の注意事項には、「定期購入の停止・解約の際は、次回出荷予定日の4日前までに公式アプリ・公式LINEのいずれかでお手続き、またはお電話でご連絡ください」とあります（2026年11月25日確認）。</p>
        <ComparisonTable
          headers={["窓口", "受付", "締切"]}
          rows={[
            ["公式アプリ", "24時間", "次回出荷予定日の4日前まで"],
            ["公式LINE", "24時間（ID連携が必要）", "次回出荷予定日の4日前まで"],
            ["電話（0120-39-3244）", "9:00〜18:00（年末年始を除く）", "次回出荷予定日の4日前まで"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://mitsuboshifarm.jp/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式サイト</a>の定期購入の注意事項（2026年11月25日確認）。受付時間・ID連携は公式FAQ「定期プランの停止について」（2026年10月28日確認・<Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent underline">口コミ・評判の記事</Link>に記載）。</p>
        <p className="text-sm mb-6 leading-relaxed">長期継続応援プラン・冷凍庫プレゼントプランを契約中の場合は、アプリ・LINEでは停止できず電話での手続きになります（公式FAQ・2026年10月28日確認）。</p>
        <SectionHeading id="notes">使う前に知っておきたいこと</SectionHeading>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>タブレット端末は動作保証外です（両ストアの説明文）。iPadではApp Storeの表示上も「iPhoneのみ対応」です</li><li>アプリで困ったときは、アプリ内の「お問い合わせ」から連絡するよう案内されています</li><li>苦手・アレルギー食材の登録はメニューにアイコンを表示する機能です。重いアレルギーがある方は、原材料表示を必ず確認してください（原材料の集計は <Link href="/articles/mitsuboshi-tenkabutsu/" className="text-accent underline">三ツ星ファームの添加物</Link>）</li><li>アプリがなくても、Webのマイページから注文・変更ができます</li></ul>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">三ツ星ファームの公式アプリはiPhone・Androidの両方で提供されており、メニュー選択・自動セット・代替商品の設定・お届け日の変更・1食からの追加・クーポン登録、定期便の停止まで行えます。タブレットは動作保証外で、Webのマイページでも同じ手続きができます。</p>
        <p className="text-sm mb-6 leading-relaxed">停止・解約の締切は次回出荷予定日の4日前です。アプリの機能や表記は更新されるため、最新の内容は各ストアと公式サイトでご確認ください。</p>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/mitsuboshi-farm-reviews/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの口コミ・評判</Link></li>
            <li><Link href="/articles/mitsuboshi-osusume-menu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのおすすめメニュー</Link></li>
            <li><Link href="/articles/mitsuboshi-coupon/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのクーポン</Link></li>
            <li><Link href="/articles/mitsuboshi-tenkabutsu/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームの添加物</Link></li>
            <li><Link href="/articles/mitsuboshi-tapioca/" className="text-accent hover:text-accent-dark transition-colors">三ツ星ファームのタピオカ</Link></li>
            <li><Link href="/articles/nosh-vs-mitsuboshi-vs-wellness/" className="text-accent hover:text-accent-dark transition-colors">nosh・三ツ星ファーム・ウェルネスダイニングを比較</Link></li>
          </ul>
        </div>

        {/* eeat-links-202607 */}
        <div className="mt-10 rounded-lg border p-4 text-xs leading-relaxed" style={{ borderColor: "#dde3eb", color: "#6b7785" }}>
          この記事は宅食びより編集部が「<Link href="/methodology/" className="underline">評価方法・データ源</Link>」に基づき、各社公式サイトの一次確認と出典付きの口コミ集約のみで作成しています（試食にもとづくレビューは現在行っておらず、導入を準備しています）。編集体制は「<Link href="/author/" className="underline">編集部の体制と役割</Link>」をご覧ください。内容の誤りにお気づきの場合は<Link href="/editorial/" className="underline">編集部</Link>までご指摘ください。
        </div>

      </article>
    </>
  );
}
