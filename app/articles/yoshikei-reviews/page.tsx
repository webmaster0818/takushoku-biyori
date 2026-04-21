import type { Metadata } from "next";
import Link from "next/link";

const ARTICLE_TITLE =
  "【2026年最新】ヨシケイの口コミ・評判を徹底調査！ミールキットと冷凍弁当の料金・メニュー・送料を解説";
const ARTICLE_DESCRIPTION =
  "ヨシケイの口コミ・評判を徹底調査。カットミール・プチママなどのミール���ットと冷凍弁当シンプルミールの違い、料金・送料無料の仕組み・メニューを詳しく解説。良い口コミ・悪い口コミの両方を紹介��ます。";
const ARTICLE_URL = "https://takushoku-biyori.com/articles/yoshikei-reviews/";

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  keywords:
    "ヨ���ケイ 口コミ, ヨシケイ 評判, ヨシケ��� カットミール, ヨシケイ プチママ, ヨシケイ シ���プルミール, ヨシケイ 料金, ヨシケイ 送料無料",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: ARTICLE_URL,
    publishedTime: "2026-04-21T00:00:00+09:00",
    modifiedTime: "2026-04-21T00:00:00+09:00",
    authors: ["宅食・栄養食編集部"],
  },
};

const faqData = [
  {
    question: "ヨシケイはお試しできる？",
    answer:
      "はい、初めての方限定でお試しキャンペーンがあります。ミールキット（カットミール・プチママ等）は5日間お試しで1食あたり約300円（通常の約半額）。冷凍弁当のシンプルミールも初回半額で1食約170円から試せます。お試し後に自動で定期購入にはならないため、気軽に試すことができます���",
  },
  {
    question: "ヨシケイの配送エリアは？",
    answer:
      "ヨシケイは全国展開ですが、地域によって運営する法人が異なります。ミールキット（毎日配送）はほぼ全国で利用可能。冷凍弁当のシンプルミール（夕食.net）は、埼玉・千葉・東京・福井・静岡・京都・大阪・奈良・兵庫・岡山・徳島などが対応エリアです。公式サイトで郵便番号を入力して確認できます。",
  },
  {
    question: "ヨシケイは毎日注文しないとダメ？",
    answer:
      "いいえ、好きな日だけ注文できます。週単位でメニューを選べるため、月曜・水曜・金曜だけなど、必要な日だけ利用可能です。注文しない日は料金がかからず、ペナルティもありません。ただし、カット野菜の消費期限は短い（配達日当日〜翌日）ため、届いたらすぐに調理する必要��あります。",
  },
  {
    question: "ヨシケイとnoshはどう違う？",
    answer:
      "最大の違いは「ミールキット vs 冷凍弁当」です。ヨシケイのメインはミールキット（食材とレシピが届き自分で調理）で、送料無料・1食300〜500円と安いのが特徴。noshは調理済みの冷凍弁当が届くため調理不要ですが、送料が地域により1,000〜2,000円かかります。「自分で少し料理したい＋安く抑えたい」ならヨシケイ、「完全に調理不要がいい」ならnoshがおすすめです。",
  },
  {
    question: "ヨシケイの冷凍弁当（シンプルミール）と他社の冷���弁当の違い��？",
    answer:
      "ヨシケイの���ンプルミールは1食約350円（初回半額で約170円）＋送料無料と、業界最安クラスのコスパが魅力です。ただし、メニューが日替わり3食セットで自分で選べない点、配送エリアが限定されている点が他社との違いです。noshのように自分でメニューを選びたい方や、対象エリア外の方には不向き��す。",
  },
];

function Breadcrumbs() {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground/70">口コミ・評判</span></li>
        <li className="breadcrumb-sep" />
        <li><span className="text-foreground">ヨシケイの口コミ・評判</span></li>
      </ol>
    </nav>
  );
}

function TableOfContents() {
  const sections = [
    { id: "about", label: "ヨシケイとは？基本情報まとめ" },
    { id: "courses", label: "主要コースの違い（カットミール/プチママ/シンプルミール）" },
    { id: "good-reviews", label: "良い口コミ・評判" },
    { id: "bad-reviews", label: "���い口コミ・評判" },
    { id: "price", label: "料金・送料を徹底解説" },
    { id: "merits", label: "メリット5つ" },
    { id: "demerits", label: "デメリット3つ" },
    { id: "recommend", label: "おすすめな人・おすすめしない人" },
    { id: "faq", label: "よくある質問（FAQ）" },
    { id: "summary", label: "まとめ" },
  ];
  return (
    <nav aria-label="目次" className="bg-cream border border-warm-border rounded-xl p-5 mb-10">
      <p className="font-bold text-sm mb-3">この記事の目次</p>
      <ol className="space-y-1.5 text-sm">
        {sections.map((s, i) => (<li key={s.id}><a href={`#${s.id}`} className="text-accent hover:text-accent-dark transition-colors">{i + 1}. {s.label}</a></li>))}
      </ol>
    </nav>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="table-wrapper mb-6">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="bg-accent/10">{headers.map((h) => (<th key={h} className="border border-warm-border px-3 py-2 text-left font-bold text-foreground whitespace-nowrap">{h}</th>))}</tr></thead>
        <tbody>{rows.map((row, i) => (<tr key={i} className={i % 2 === 1 ? "bg-cream/50" : ""}>{row.map((cell, j) => (<td key={j} className={`border border-warm-border px-3 py-2 ${j === 0 ? "font-medium whitespace-nowrap" : ""}`}>{cell}</td>))}</tr>))}</tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-warm-border rounded-lg mb-3 group">
      <summary className="flex items-center justify-between p-4 font-medium text-sm hover:bg-cream/50 transition-colors"><span>{question}</span><span className="faq-arrow text-warm-gray ml-2">&#9660;</span></summary>
      <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{answer}</div>
    </details>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-xl md:text-2xl font-bold mt-12 mb-6 pb-2 border-b-2 border-accent/30 scroll-mt-20">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-8 mb-4 pl-3 border-l-4 border-accent">{children}</h3>;
}

export default function YoshikeiReviewsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: ARTICLE_TITLE, description: ARTICLE_DESCRIPTION, url: ARTICLE_URL,
    datePublished: "2026-04-21T00:00:00+09:00", dateModified: "2026-04-21T00:00:00+09:00",
    author: { "@type": "Organization", name: "宅食・栄養食編集部" },
    publisher: { "@type": "Organization", name: "宅食びより", url: "https://takushoku-biyori.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs />
        <header className="mb-8">
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">口コミ・評判</span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{ARTICLE_TITLE}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-gray">
            <time dateTime="2026-04-21">公開: 2026年4月21日</time><span>著者：宅食・栄養食編集部</span>
          </div>
        </header>

        <div className="bg-cream rounded-xl p-5 mb-8 text-sm leading-relaxed">
          <p className="mb-3">「ヨシケイって実際どうなの？」「送料無料って本当？」——創業50年以上の歴史を持つ食材宅配の老舗・ヨシケイ。ミールキットから冷凍弁当まで幅広いラインナップで、全国約50万世帯に利用されています。</p>
          <p className="mb-3">この記事では、<strong>ヨシケイの口コミ・評判を徹底リサーチ</strong>。人気のカットミール・プチママなどのミールキットと、冷凍���当「シンプルミール」の料金・特徴を詳しく比較します��</p>
          <p><strong>送料無料の仕��み</strong>や初回半額のお試しキャンペーン情報もお伝えします。</p>
        </div>

        <TableOfContents />

        <SectionHeading id="about">ヨシケイとは？基本情報まとめ</SectionHeading>
        <p className="text-sm mb-6 leading-relaxed">ヨシケイは、1975年創業の食材宅配サービスです。全国の地域法人が連携して運営する独自のフランチャイズ方式を採用しており、<strong>自社スタッフ（スマイルスタッフ）が毎日自宅まで届ける</strong>のが最大の特徴。送料は全国無料で、約50万世帯が利用する日本最大級の食材宅配サービスです。</p>

        <ComparisonTable
          headers={["項目", "内容"]}
          rows={[
            ["運営", "ヨシケイ開発株式会社（全国各地に法人展開）"],
            ["創業", "1975年"],
            ["サービス内容", "ミールキット（食材＋レシピ）＋冷凍弁当"],
            ["配送方法", "自社スタッフが毎日配送（保冷ボックス）"],
            ["送料", "全国無料"],
            ["対応エリア", "全国（ミールキット）/ 一部エリア（冷凍弁当）"],
            ["注文方法", "Web・アプリ・電話"],
            ["支払い方法", "口座引落・クレジットカード・現金"],
          ]}
        />

        <SectionHeading id="courses">主要コースの違い</SectionHeading>
        <ComparisonTable
          headers={["コース名", "タイプ", "調理時間", "1食あたり（2人分注文時）", "特徴"]}
          rows={[
            ["カットミール", "ミールキット", "約10〜15分", "約550〜650円", "カット済み野菜で包丁の使用最小限"],
            ["プチママ", "ミールキット", "約20分", "約480〜550円", "20年以上のロングセラー・離乳食レシピ付き"],
            ["定番", "ミールキット", "約30〜35分", "約500〜600円", "本格的な家庭料理が作れる"],
            ["Lovyu（ラビュ）", "ミールキット", "約15〜40分", "約600〜750円", "おしゃれなカフェ風メニュー"],
            ["シンプル��ール", "��凍弁当", "レンジ約4分", "約350円", "1食3品・送料無料・初回半額"],
          ]}
        />

        <SubHeading>カットミール vs プチママ</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">人気の2コースを比較すると、<strong>カットミール</strong>は野菜がカット済みで包丁の使用が最大3回以内。10〜15分で2品が完成する最速コースです。一方<strong>プチママ</strong>は野菜を自分でカットする必要がありますが、その分価格が安く、大人の取り分けで作れる離乳食レシピが付いているため、小さな子どものいる家庭に特に人気です。時短最優先ならカットミール、コスパ・離乳食対応ならプチママがおすすめです。</p>

        <SubHeading>冷凍弁当「シンプルミール」</SubHeading>
        <p className="text-sm mb-6 leading-relaxed">シンプルミールは3食1セットで販売される冷凍弁当です。1食あたり約350円（税込）で、<strong>初回は半額の約170円</strong>で試せます。電子レンジ約4分で完成し、送料も無料。ただし対応エリアが限定されており、メニューは日替わりで自分で選ぶことはできません。noshのように自由にメニューを選びたい方には不向きですが、コスパの良さは業界トップクラスです。</p>

        <SectionHeading id="good-reviews">良い口コミ・評判</SectionHeading>
        {[
          { title: "献立を考えなくて済む", reviews: ["「毎日の献立を考えるストレスから解放された。これだけでもヨシケイを使う価値がある」（30代女性）", "「レシピ通りに作れば20分で完成。料理の腕も上がった気がする」（40代女性）", "「夫に『最近ご飯美味しいね』と言われた。ヨシケイのレシピのおかげ」（30代女性）"] },
          { title: "送料無料で経済的", reviews: ["「毎日届くのに送料無料は本当にありがたい。他のサービスだと送料だけで月2,000〜3,000���かかる」（40代男性）", "「スーパーに行く回数が減り、無駄な買い物が減った。結果的に食費が下がった」（30代女性）"] },
          { title: "食材の無駄が出ない", reviews: ["「必要な分だけ届くから、野菜を腐らせることがなくなった」（20代女性）", "「一人暮らしでも2人分を注文して翌日のお弁当にできるのが良い」（30代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-green-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="bad-reviews">悪い口コミ・評判</SectionHeading>
        {[
          { title: "カット野菜の消費期限が短い", reviews: ["「カットミールの野菜は届いた当日に使わないとダメ。急な予定変更に対応しにくい」（30代女性）", "「配達日＋2日程度の消費期限。冷凍弁当の長期保存には敵わない」（40代男性）"] },
          { title: "調理の手間はゼロではない", reviews: ["「カットミールでも10分はかかる。完全に調理不要がいいならnoshのほうが楽」（20代男性）", "「プチママは野菜を切る必要があるので、疲れた日はそれすら面倒に感じる」（30代女性）"] },
          { title: "配送時間帯が選べない", reviews: ["「日中にしか届かないので、共働きだと受け取りが難しい。保冷ボックスで留め置きできるけど、夏場は少し不安」（30代男性）"] },
        ].map((cat) => (
          <div key={cat.title} className="mb-6">
            <SubHeading>{cat.title}</SubHeading>
            <div className="space-y-2">{cat.reviews.map((r) => (<div key={r} className="bg-red-50 rounded-lg p-3"><p className="text-sm text-foreground/80 leading-relaxed">{r}</p></div>))}</div>
          </div>
        ))}

        <SectionHeading id="price">料金・送料を徹底解説</SectionHeading>
        <SubHeading>ミールキットの1ヶ月コスト目安（2人分・週5日）</SubHeading>
        <ComparisonTable
          headers={["コース", "1週間の目安", "月額（4週間）"]}
          rows={[
            ["プチママ", "約5,000〜5,500円", "約20,000〜22,000円"],
            ["カットミール", "約5,500〜6,500円", "約22,000〜26,000円"],
            ["定番", "約5,000〜6,000円", "約20,000〜24,000円"],
          ]}
        />
        <p className="text-sm mb-6 leading-relaxed">上記は2人分の目安です。3人分、4人分はそれぞれ1.5倍、2倍程度になりま��。ヨシケイは<strong>送料が完全無料</strong>のため、上記の金額がそのまま実質コストになります。スーパーで食材を買って自炊する場合と比較しても、食材の無駄が出ない分、大きな差にはなりにくいです。</p>

        <SectionHeading id="merits">メ���ット5つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "送料完全無料", text: "自社配送のため送料がかかりません。他社の冷凍弁当は送料だけで月2,000〜4,000円かかることを考えると、大きなメリッ���です。" },
            { title: "献立を考える手間がゼロ", text: "毎週届くメニューブックから選ぶだけ。管理栄養士が栄養バランスを計算済みなので、自分で栄養を気にする必要がありません。" },
            { title: "食材の無駄がゼロ", text: "その日使う分だけ届くため、野菜を腐らせることがありません。一人暮らしの方にとっても嬉しいポイントです。" },
            { title: "初回お試しが半額", text: "ミールキットは5日間お試しで1食約300円、シンプルミールは初回半額で1食約170円。リスクなしで味を確認できます。" },
            { title: "冷凍弁当は業界最安クラス", text: "シンプルミールは1食約350円＋送料無料。コンビニ弁当より安く、栄養バランスも優れています。" },
          ].map((item) => (
            <div key={item.title} className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="demerits">デメリット3つ</SectionHeading>
        <div className="space-y-3 mb-6">
          {[
            { title: "ミールキットは調理が必要", text: "10〜35分の調理時間が必要です。完全に調理不要な冷凍弁当を求めるなら、noshや三ツ星ファームのほうが向いています。" },
            { title: "消費期限が短い（ミールキット）", text: "カット野菜は配達日当日〜翌日が消費期限。急な予定変更で使えないこともあります。冷凍弁当（シンプルミール）なら長期保存可能です。" },
            { title: "冷凍弁当の対応エリアが限定的", text: "シンプルミールは一部エリアのみ対応。全国で利用できるのはミールキットのみです。" },
          ].map((item) => (
            <div key={item.title} className="bg-red-50 rounded-lg p-4">
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <SectionHeading id="recommend">おすすめな人��おすすめしない人</SectionHeading>
        <SubHeading>おすすめな���</SubHeading>
        <div className="space-y-2 mb-6">
          {["毎日の献立を考えるのが面倒な方", "送料を一切払い���くない方", "食材の無駄をなくしたい方", "料理の時短はしたいが、全く料理しないのは嫌な方", "初回半額でお試ししたい方"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-accent mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>
        <SubHeading>おすすめし���い人</SubHeading>
        <div className="space-y-2 mb-6">
          {["完全に調理不要な冷凍弁当だけを求める方", "配送時間帯を自由に選びたい方", "冷凍弁当（シンプルミール）の対象エリア外の���"].map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-0.5">●</span><span>{t}</span></div>
          ))}
        </div>

        <SubHeading>関連記事</SubHeading>
        <div className="space-y-2 mb-6">
          {[
            { href: "/articles/nosh-reviews/", label: "nosh(ナッシュ)の口コミ・評判" },
            { href: "/articles/watami-reviews/", label: "ワタミの宅食の口コミ・評判" },
            { href: "/articles/souryou-yasui-ranking/", label: "送料が安い宅配弁当ランキング" },
            { href: "/articles/hitorigurashi-osusume/", label: "一人暮らしにおすすめの宅食TOP5" },
          ].map((link) => (
            <div key={link.href}><Link href={link.href} className="text-accent hover:text-accent-dark text-sm transition-colors">→ {link.label}</Link></div>
          ))}
        </div>

        <SectionHeading id="faq">よくある��問（FAQ）</SectionHeading>
        {faqData.map((faq) => (<FAQ key={faq.question} question={faq.question} answer={faq.answer} />))}

        <SectionHeading id="summary">ま���め</SectionHeading>
        <div className="bg-cream rounded-xl p-5 mb-6">
          <p className="font-bold text-sm mb-3">ヨシケイ まとめ</p>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>ヨシケイは<strong>送料無料・自社配送</strong>のミールキット＆��凍弁当サービスです。創業50年以上の実績と全国約50万世帯の利用者数が信頼の証。</p>
            <p>カットミール（10分調理）やプチママ（離乳食レシピ付き）など、ライフスタイルに合わせたコースが充実。冷凍弁当のシンプルミールは1食約350円（初回約170円）で業界最安クラスです。</p>
            <p>「献立を考えるのが面倒」「送料無料がいい」「食材の無駄を減らしたい」方にぴったり。初回お試しは半額で利用できるため、まずは5日間のお試しから始めてみることをおすすめします。</p>
          </div>
        </div>
      </article>
    </>
  );
}
