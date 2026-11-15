import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "DELIPICKS（デリピックス）の解約方法｜締切は日曜23:59、スキップ・退会との違いと注意点を公式で確認【2026年11月】";
const ARTICLE_DESCRIPTION =
  "DELIPICKS（デリピックス・旧CHEFBOX）の定期購入を解約する手順を、公式ヘルプセンターの記載で整理しました。締切は毎週日曜23:59（翌週月曜0時に注文確定）、初回分はキャンセル不可、解約・スキップ・退会の違い、解約で消えるクーポンとランク、再開の方法まで確認できます。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/delipicks-kaiyaku/";
const OFFICIAL_URL = "https://deli-picks.com/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords: "デリピックス 解約, DELIPICKS 解約, デリピックス 解約方法, デリピックス 退会, デリピックス スキップ, デリピックス 定期 解約, CHEFBOX 解約",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-11-15T00:00:00+09:00",
    modifiedTime: "2026-11-15T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  { question: "DELIPICKSの解約はどこからできますか？", answer: "マイページの「各種設定」→「アカウント情報変更」→画面右下の「定期購入をやめる」→「停止手続きへ進む」→解約理由を入力→「定期購入を解約」の順です。解約理由の入力は必須です。" },
  { question: "解約の締切はいつですか？", answer: "注文確定日の前までです。注文は毎週月曜0時に確定し、毎週日曜23:59に翌週月曜〜翌々週日曜に届く分の変更受付が締め切られます。たとえば11月23日〜29日に届く分の締切は11月15日（日）23:59です。" },
  { question: "締切を過ぎてから解約するとどうなりますか？", answer: "すでに確定している分は予定どおり届き、キャンセルできません。公式ヘルプも、定期購入をやめた時点で確定済みの料理は予定どおりお届けとしています。" },
  { question: "電話で解約できますか？", answer: "公式ヘルプは電話でのお問い合わせを原則受け付けていないとしています。マイページで手続きできない場合は、公式のお問い合わせフォームから連絡します。" },
  { question: "解約金や違約金はかかりますか？", answer: "公式ヘルプ・利用規約に、定期購入の解約金や違約金の記載はありませんでした（2026年11月15日確認）。ただし確定済みの注文は返品・返金の対象外です。" },
  { question: "お試しセットを頼んだら解約は必要ですか？", answer: "不要です。公式サイトは「お試しセットを注文しただけでは定期購入にはなりません」としています。なお、お試しセットは注文完了時に確定するため、申込み後のキャンセルはできません。" },
  { question: "解約と退会はどう違いますか？", answer: "解約は定期購入を止める手続きで、アカウントは残り、いつでも再開できます。退会はマイランクのデータを含めてアカウントを削除する手続きで、各種設定の「アカウント情報変更」から行います。" },
  { question: "解約すると新規クーポンはどうなりますか？", answer: "新規の定期購入登録で発行される合計1,000円OFFクーポン（直近2回に各500円）は、一度解約すると無効になります。スキップや休止の場合は次のお届けに引き継がれます。" },
];

const sections = [
  { id: "kinds", label: "スキップ・解約・退会の違い" },
  { id: "steps", label: "定期購入の解約手順（マイページ）" },
  { id: "deadline", label: "締切は「毎週日曜23:59」：お届け日ごとの早見表" },
  { id: "first", label: "初回分・お試しセットはキャンセルできない" },
  { id: "lose", label: "解約・退会で失うもの（クーポン・マイランク）" },
  { id: "resume", label: "解約後に再開する方法" },
  { id: "alt", label: "解約の前に検討できること" },
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
          <Link href="/articles/#guide" className="text-foreground/70 hover:text-accent transition-colors">選び方・使い方・サービス紹介</Link>
        </li>
        <li className="breadcrumb-sep" />
        <li>
          <span className="text-foreground">DELIPICKSの解約方法</span>
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

function OfficialButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 text-center">
      <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-colors shadow-md">{children}</a>
      <p className="text-[10px] text-gray-400 mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
    </div>
  );
}


export default function DelipicksKaiyakuPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    datePublished: "2026-11-15T00:00:00+09:00",
    dateModified: "2026-11-15T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "選び方・使い方・サービス紹介" },
      { "@type": "ListItem", position: 3, name: "DELIPICKSの解約方法" },
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
            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">選び方・使い方・サービス紹介</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-11-15">公開: 2026年11月15日（公式サイトで確認）</time>
            <span>
              編集: <Link href="/editorial/" className="text-accent hover:underline">宅食びより編集部</Link>
            </span>
          </div>
          <p className="mt-3 text-xs text-warm-gray">※本記事で紹介するサービスとは提携しておらず、記事内のリンクは広告ではありません。</p>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">
            DELIPICKS（デリピックス）は、シェフが開発した冷凍弁当を定期便で届けるサービスです（旧名称 CHEFBOX）。定期購入の解約は<strong>マイページの「各種設定」→「アカウント情報変更」→「定期購入をやめる」</strong>から本人が手続きします。
          </p>
          <p className="mb-3">
            この記事では、解約の手順と締切、スキップ・退会との違い、解約で失われる特典を、2026年11月15日に公式ヘルプセンター・公式サイト・利用規約で確認した内容で整理しました。締切は「毎週日曜23:59」という曜日固定のルールのため、お届け日ごとの締切を当サイトで早見表にしています。
          </p>
          <p>本記事は公式情報にもとづいて作成しており、試食・試用によるものではありません。</p>
        </div>

        <div className="border-2 border-accent/30 rounded-xl p-5 mb-8 bg-white">
          <p className="font-bold text-base mb-3">DELIPICKSの解約の要点</p>
          <p className="text-sm leading-relaxed mb-4">定期購入の解約はマイページの「定期購入をやめる」から行い、解約理由の入力が必須です。締切は「注文確定日」で、毎週日曜23:59を過ぎると翌週月曜〜翌々週日曜に届く分が確定し、解約しても届きます。初回分とお試しセットは申込み時点で確定するためキャンセルできません。解約しても定期購入はいつでも再開できますが、未使用の新規クーポンは無効になります。</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-accent mb-2">◎ 解約しやすい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>マイページで本人が手続きできる</li><li>解約金・違約金の記載はない</li><li>解約後も「定期購入へ変更」で再開できる</li></ul>
            </div>
            <div className="bg-cream rounded-lg p-3">
              <p className="font-bold text-warm-gray mb-2">△ 注意したい点</p>
              <ul className="space-y-1 list-disc list-inside"><li>締切は毎週日曜23:59（確定分は届く）</li><li>初回分・お試しセットはキャンセル不可</li><li>電話窓口は原則なし（フォームのみ）</li></ul>
            </div>
          </div>
          <p className="text-xs text-warm-gray">※料金・送料・商品は時期により変わります。最新の情報は公式サイトでご確認ください。</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition">DELIPICKS 公式サイトを見る →</a>
          <p className="text-[10px] text-gray-400 text-center mt-2">※リンク先は公式サイトです（本リンクはアフィリエイト広告ではありません）</p>
        </div>

        <TableOfContents />

        <SectionHeading id="kinds">スキップ・解約・退会の違い</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">DELIPICKSでは「スキップ」「解約」「退会」の3つを区別しています。食べきれない・しばらく不要など、目的に合うものを選ぶ必要があります。</p>
        <ComparisonTable
          headers={["手続き", "内容（公式の説明）", "向いている場合"]}
          rows={[
            ["スキップ", "「お得な定期購入プラン」で、次回注文のキャンセルを行う", "冷凍庫がいっぱい・1回だけ休みたい"],
            ["解約", "「お得な定期購入プラン」を停止する。定期購入の再開はいつでも可能", "しばらく利用しない・再開の可能性がある"],
            ["退会", "マイランクのデータを含め、完全にアカウントを削除する", "今後利用する予定がない"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11616739946905" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS ヘルプ「スキップ、解約、退会の違いは何ですか？」</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">「解約」はアカウントを残したまま定期便だけを止める手続きで、会員情報やマイランクは残ります。アカウントごと消す場合は「退会」です。利用規約でも、アカウントを削除すると利用する権利は消滅し、誤って削除しても復旧できないとされています。</p>
        <SectionHeading id="steps">定期購入の解約手順（マイページ）</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">解約は<a href="https://deli-picks.com/user/account/" target="_blank" rel="noopener noreferrer" className="text-accent underline">アカウント情報変更ページ</a>の右下にある「定期購入をやめる」から行います。公式ヘルプに記載された手順は次のとおりです。</p>
        <ComparisonTable
          headers={["手順", "操作"]}
          rows={[
            ["1", "登録情報でログイン"],
            ["2", "右上の三本線（メニュー）を選択"],
            ["3", "メニューバーから「各種設定」を選択"],
            ["4", "「アカウント情報変更」を選択"],
            ["5", "画面右下の「定期購入をやめる」を選択"],
            ["6", "画面最下部の「停止手続きへ進む」を選択"],
            ["7", "解約理由にチェックし、自由記述欄を入力（回答必須）"],
            ["8", "画面下の「定期購入を解約」を選択して完了"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11591038098073" target="_blank" rel="noopener noreferrer" className="text-accent underline">DELIPICKS ヘルプ「定期購入の解約がしたい」</a>（2026年11月15日確認）。公式ヘルプでは手順の番号が一部重複しているため、当サイトで通し番号に振り直しています。</p>
        <p className="text-sm mb-6 leading-relaxed">マイページで解決できない場合は、公式のお問い合わせフォームから連絡します。公式ヘルプは<strong>「現在お電話でのお問い合わせは原則受け付けておりません」</strong>としており、電話での解約はできない前提で準備しておく必要があります（<a href="https://delipicks.zendesk.com/hc/ja/articles/11615474007065" target="_blank" rel="noopener noreferrer" className="text-accent underline">電話でのお問い合わせは可能ですか？</a>）。</p>
        <SectionHeading id="deadline">締切は「毎週日曜23:59」：お届け日ごとの早見表</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">DELIPICKSの定期購入は月曜日を週の起点に管理されています。公式ヘルプの説明は次のとおりです。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>「毎週月曜日0時」に注文が確定する</li><li>毎週日曜日の23:59に、その1週間後以降に届く料理の注文内容や配送日時の変更受付が締め切られる</li><li>お届け前週の日曜日23:59までに変更できるのは、翌週の月曜から翌々週の日曜までの1週間分</li><li>2回目以降の注文は、お届け前週の月曜日0時に決済の確認が行われる</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11617987450265" target="_blank" rel="noopener noreferrer" className="text-accent underline">次回の注文をキャンセルしたいです。</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11619265490585" target="_blank" rel="noopener noreferrer" className="text-accent underline">お届日時の変更はいつまで可能ですか？</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11615740850841" target="_blank" rel="noopener noreferrer" className="text-accent underline">決済はどのタイミングで行われますか？</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">この規則を、これから届く週に当てはめると次のようになります（当サイトで日付を計算）。解約もスキップも、この締切までに手続きしないと、その週の分は確定して届きます。</p>
        <ComparisonTable
          headers={["お届け予定日（月〜日の週）", "解約・スキップの締切", "決済の確認"]}
          rows={[
            ["11月23日（月）〜11月29日（日）", "11月15日（日）23:59", "11月16日（月）0時"],
            ["11月30日（月）〜12月6日（日）", "11月22日（日）23:59", "11月23日（月）0時"],
            ["12月7日（月）〜12月13日（日）", "11月29日（日）23:59", "11月30日（月）0時"],
            ["12月14日（月）〜12月20日（日）", "12月6日（日）23:59", "12月7日（月）0時"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※公式ヘルプの「お届け前週の月曜日0時に確定・決済」の規則から当サイトで算出した目安です。年末年始・お盆などはお届け予定日の変更が告知されることがあるため、実際の締切はマイページの表示でご確認ください。</p>
        <p className="text-sm mb-6 leading-relaxed">お届けの<strong>8〜14日前</strong>が締切になる計算です。届く直前の週末では間に合わないため、解約を決めたら早めに手続きするのが確実です。</p>
        <SectionHeading id="first">初回分・お試しセットはキャンセルできない</SectionHeading>
        <ComparisonTable
          headers={["注文の種類", "キャンセル・解約の扱い"]}
          rows={[
            ["定期購入の初回分", "定期購入の登録時に決済され確定。申込み後の初回分のキャンセルは不可"],
            ["定期購入の2回目以降", "注文確定日（お届け前週の月曜0時）より前ならマイページの「スキップはこちら」からキャンセル可能"],
            ["お試しセット", "注文手続きの完了時に決済・確定。申込み後のキャンセルは不可。お試しセットだけでは定期購入にはならない"],
            ["確定後の注文", "解約しても確定済みの分は予定どおり届き、キャンセル・返品・返金は不可"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11591155706649" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご注文のキャンセル・スキップがしたい</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11591038098073" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期購入の解約がしたい</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11617695728153" target="_blank" rel="noopener noreferrer" className="text-accent underline">返品・返金について</a>・<a href="https://deli-picks.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">公式トップのよくあるご質問</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">お試しセットは定期購入ではないため、解約の手続きは不要です。お試しのあとに定期購入を始めたい場合は、マイページから定期購入の手続きを行います。お試しセットの内容は<Link href="/articles/delipicks-otameshi/" className="text-accent underline">DELIPICKSのお試し・特徴まとめ</Link>で整理しています。</p>
        <SectionHeading id="lose">解約・退会で失うもの（クーポン・マイランク）</SectionHeading>
        <ComparisonTable
          headers={["項目", "解約した場合", "退会した場合"]}
          rows={[
            ["新規の合計1,000円OFFクーポン（直近2回に各500円）", "一度解約すると無効", "無効"],
            ["マイランク（レギュラー〜ダイヤモンド・最大13%OFF）", "解約後1年が経過するとリセットされる可能性あり。ランク特典は定期購入の利用者のみ対象", "マイランクのデータを含めて削除"],
            ["アカウント・注文履歴", "残る（再開できる）", "削除され、復旧できない"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/41586458445593" target="_blank" rel="noopener noreferrer" className="text-accent underline">（定期購入新規登録者向け）合計1000円OFFクーポンについて</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/42876099177369" target="_blank" rel="noopener noreferrer" className="text-accent underline">マイランク機能について</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11616739946905" target="_blank" rel="noopener noreferrer" className="text-accent underline">スキップ、解約、退会の違い</a>・<a href="https://deli-picks.com/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline">利用規約（2026年7月1日改訂）</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">新規クーポンは、スキップした場合は次回のお届けに繰り越され、休止した場合も再開時の直近のお届けに適用されます。<strong>無効になるのは解約したとき</strong>です。クーポンを使い切る前に止めたい場合は、解約ではなくスキップを選ぶほうが特典を残せます。</p>
        <SectionHeading id="resume">解約後に再開する方法</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">解約した定期購入は、マイページから再開できます。</p>
        <ul className="text-sm mb-6 leading-relaxed list-disc list-inside space-y-1"><li>deli-picks.com/user/menu/ にアクセスし、登録のメールアドレスでログイン</li><li>右上のメニュータブから「各種設定」を選択</li><li>「プラン設定」で「定期購入へ変更」を選択</li><li>お届け頻度・日時を選び、「この内容で注文する」で再開</li></ul>
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/16056799000601" target="_blank" rel="noopener noreferrer" className="text-accent underline">定期購入の再開方法について</a>（2026年11月15日確認）。退会（アカウント削除）した場合はこの方法では再開できません。</p>
        <SectionHeading id="alt">解約の前に検討できること</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">食べきれない・量が合わないといった理由であれば、解約せずに調整できる設定があります。</p>
        <ComparisonTable
          headers={["したいこと", "方法", "締切"]}
          rows={[
            ["1回だけ休む", "マイページの「スキップはこちら」。誤操作は「スキップを解除する」で取り消し可能", "注文確定前（日曜23:59）"],
            ["届く間隔を空ける", "「お届け周期の変更」で毎週／2週間に1回／3週間に1回から選択", "次回確定分から反映"],
            ["量・金額を減らす", "メニューの入れ替え・数量の変更（最低注文金額はオリジナル商品で税抜5,000円）", "注文確定前"],
            ["届く曜日・時間を変える", "「お届け曜日・時間の変更」", "次回確定分から反映"],
          ]}
        />
        <p className="text-xs text-warm-gray mb-6">※出典: <a href="https://delipicks.zendesk.com/hc/ja/articles/11591155706649" target="_blank" rel="noopener noreferrer" className="text-accent underline">ご注文のキャンセル・スキップがしたい</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/31600301205913" target="_blank" rel="noopener noreferrer" className="text-accent underline">スキップを取り消したいです。</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11591214548121" target="_blank" rel="noopener noreferrer" className="text-accent underline">お届け周期の変更がしたい</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11615378990617" target="_blank" rel="noopener noreferrer" className="text-accent underline">どんなプランがありますか？</a>・<a href="https://delipicks.zendesk.com/hc/ja/articles/11615965165337" target="_blank" rel="noopener noreferrer" className="text-accent underline">費用を教えて下さい</a>（2026年11月15日確認）</p>
        <p className="text-sm mb-6 leading-relaxed">公式サイトでは、まとめ買い割引（税抜7,000円以上で10%OFF・10,000円以上で15%OFF・15,000円以上で20%OFF）が案内されています。数量を減らすと割引率が下がる場合があるため、1食あたりの金額もあわせて確認すると判断しやすくなります。メニューの全品と栄養成分は<Link href="/articles/delipicks-menu/" className="text-accent underline">DELIPICKSのメニュー一覧</Link>にまとめています。</p>
        <OfficialButton>DELIPICKS 公式サイトを見る</OfficialButton>



        <SectionHeading id="faq">よくある質問（FAQ）</SectionHeading>
        <div className="mb-6">
          {faqData.map((faq, i) => (
            <FAQ key={i} question={`Q${i + 1}. ${faq.question}`} answer={faq.answer} />
          ))}
        </div>

        <SectionHeading id="summary">まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">DELIPICKSの解約は、マイページの「定期購入をやめる」から本人が行います。締切は毎週日曜23:59で、お届けの8〜14日前にあたります。初回分とお試しセットはキャンセルできず、確定済みの分は解約後も届きます。再開の可能性があるなら退会ではなく解約、1回だけ休むならスキップを選ぶと、クーポンやランクを残せます。</p>
        <p className="text-sm mb-6 leading-relaxed">手続きの画面や締切は変わることがあります。ご利用前に、公式サイトで最新の情報をご確認ください。</p>

        <OfficialButton>DELIPICKS 公式サイトを見る</OfficialButton>

        <div className="border-t border-warm-border pt-6 mt-8">
          <p className="font-bold text-sm mb-3">関連記事</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/articles/delipicks-otameshi/" className="text-accent hover:text-accent-dark transition-colors">DELIPICKS（デリピックス）のお試し・特徴まとめ</Link></li>
            <li><Link href="/articles/delipicks-menu/" className="text-accent hover:text-accent-dark transition-colors">デリピックス（DELIPICKS）のメニュー一覧</Link></li>
            <li><Link href="/articles/otameshi-set-osusume/" className="text-accent hover:text-accent-dark transition-colors">宅配弁当のお試しセットの比較</Link></li>
            <li><Link href="/articles/reitouko-chiisai-takuhai-bento/" className="text-accent hover:text-accent-dark transition-colors">冷凍庫が小さい家庭向けの宅配弁当</Link></li>
            <li><Link href="/articles/takushoku-ryokin-hakusho/" className="text-accent hover:text-accent-dark transition-colors">宅食料金白書｜各社の料金・送料・1食単価</Link></li>
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
