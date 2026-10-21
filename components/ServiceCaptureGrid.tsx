import ServiceCapture, { type ServiceCaptureId } from "@/components/ServiceCapture";

/**
 * 複数サービスを扱う記事（比較記事・目的別ガイド）に置く、公式サイトのキャプチャの並び（2026-10-21）。
 * ids: 並べるサービス（記事で取り上げている順）。label: 何の画像かを示す一文（見出しの直下でない場所に置くとき）。
 * リンクは付けない。挿入は scripts/add-service-captures-202610.py。
 */
export default function ServiceCaptureGrid({ ids, label }: { ids: ServiceCaptureId[]; label?: string }) {
  const grid = (
    <div className={`not-prose grid grid-cols-2 ${ids.length === 3 ? "md:grid-cols-3" : ""} gap-x-3 gap-y-4 md:gap-x-5 my-5`}>
      {ids.map((id) => (
        <ServiceCapture key={id} id={id} className="m-0" />
      ))}
    </div>
  );
  if (!label) return grid;
  return (
    <section className="not-prose my-10 border-t border-rule pt-6">
      <p className="text-sm text-foreground tracking-[0.04em]">{label}</p>
      {grid}
    </section>
  );
}
