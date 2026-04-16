import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事制作ポリシー",
  description: "宅食びよりの記事制作ポリシーです。記事の制作方針や品質管理についてご案内します。",
};

export default function ContentPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">ホーム</Link>
          </li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">記事制作ポリシー</span></li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">記事制作ポリシー</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <p>
          宅食びよりは、宅配弁当・栄養食サービスに関する正確で有益な情報をお届けするために、以下の記事制作ポリシーに基づいてコンテンツを制作しています。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">ユーザーファーストであり続けます</h2>
          <p className="mb-3">
            宅食びよりは、宅配弁当・栄養食サービスを探しているユーザーにとって、最適なサービスが見つかることを第一に考えています。
          </p>
          <p className="mb-3">
            一人暮らし、産後、ダイエット中、高齢者の食事サポートなど、宅食サービスの利用目的は人によってさまざまです。それぞれのニーズに合った最適なサービスが見つかるよう、多角的な視点から情報を整理・比較してお届けします。
          </p>
          <p>
            広告主の意向に左右されることなく、常にユーザーにとって有益な情報を優先します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">正確且つ最新な情報発信に努めます</h2>
          <p className="mb-3">
            宅食サービスの料金プラン・メニュー内容・配送エリア・キャンペーン情報などは頻繁に変更されます。宅食びよりでは、掲載情報の正確性を維持するため、定期的に各サービスの公式サイトを確認し、情報を更新しています。
          </p>
          <p className="mb-3">
            情報源として、各サービスの公式サイト・公式SNS・プレスリリースなどの一次情報を重視しています。
          </p>
          <p>
            万が一、掲載情報に誤りがあった場合は、速やかに訂正いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">操作のない口コミ情報を発信いたします</h2>
          <p className="mb-3">
            宅食びよりでは、実際に宅食サービスを利用したユーザーの口コミ・評判を紹介しています。口コミ情報は、以下のソースから収集しています。
          </p>
          <ul className="list-disc list-inside space-y-2 mb-3">
            <li>各サービスの公式サイトに掲載されたレビュー</li>
            <li>SNS（X、Instagram等）上の投稿</li>
            <li>口コミサイトの投稿</li>
            <li>編集部独自のアンケート調査</li>
          </ul>
          <p className="mb-3">
            口コミの選定においては、良い口コミだけでなく、悪い口コミも含めて中立的に紹介することを方針としています。口コミの操作・捏造は一切行いません。
          </p>
          <p>
            口コミの引用元は可能な限り明記し、情報の透明性を確保します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">分かりやすさを追求し続けます</h2>
          <p className="mb-3">
            宅食サービスの選び方は、料金・味・栄養バランス・配送頻度・対応エリアなど比較ポイントが多く、初めての方には分かりにくいことがあります。
          </p>
          <p className="mb-3">
            宅食びよりでは、比較表・ランキング・チャート・図解などを活用し、ひと目で違いが分かるコンテンツづくりを心がけています。
          </p>
          <p>
            専門用語はできる限り避け、誰にでも理解しやすい表現を使用します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">記事制作フロー</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">1. 記事の企画設計</h3>
              <p>
                ユーザーが何を知りたいのか、どのような悩みを抱えているのかを徹底的に調査し、記事のテーマと構成を設計します。検索キーワードの分析や競合記事の調査を行い、ユーザーにとって最も価値のある情報を整理します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. 記事のライティング</h3>
              <p>
                専門用語を避け、分かりやすい言葉で記事を執筆します。各サービスの公式情報を元に正確な内容を記載し、比較表や図解を用いて視覚的にも理解しやすいコンテンツを作成します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. 記事の公開</h3>
              <p>
                執筆した記事は、編集部によるレビューを経てWEB上にアップロードされます。事実確認・誤字脱字チェック・リンク確認などの品質管理を行った上で公開します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. 記事の更新</h3>
              <p>
                公開後も定期的に情報を見直し、料金変更・新メニュー追加・キャンペーン情報などを反映して記事を更新します。古い情報のまま放置しないことを徹底しています。
              </p>
            </div>
          </div>
        </section>

        <p className="text-warm-gray text-xs pt-4 border-t border-warm-border">
          制定日：2026年4月13日
        </p>
      </div>
    </div>
  );
}
