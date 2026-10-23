// 公式サイトのファーストビュー撮影（1280×800 dpr2）。ASP・解析リクエストはブロック。計測リンクは開かない（公式ドメインの素の URL のみ）。
// usage: node scripts/capture-official-202610.js OUTDIR [id,id,...]
// puppeteer-core はリポの依存に入れていない。PUPPETEER_CORE（node_modules/puppeteer-core のパス）→ 通常の require → 10/21 の scratchpad の順に探す。
// 無ければ: mkdir -p /tmp/pt && (cd /tmp/pt && npm i puppeteer-core) && PUPPETEER_CORE=/tmp/pt/node_modules/puppeteer-core node scripts/capture-official-202610.js OUTDIR id
const PT_CANDIDATES = [process.env.PUPPETEER_CORE, 'puppeteer-core', '/private/tmp/claude-501/-Users-takashi-hasegawa/714192b7-f8fb-4b39-a2ba-e6de5ad6f2a2/scratchpad/pt/node_modules/puppeteer-core'].filter(Boolean);
let p = null;
for (const c of PT_CANDIDATES) { try { p = require(c); break; } catch (e) {} }
if (!p) { console.error('puppeteer-core が見つかりません（PUPPETEER_CORE を指定）'); process.exit(1); }
const T = require('./capture-targets-202610.json'); // [id, url, 待機ms]
const BLOCK = /felmat|a8\.net|moshimo|rentracks|afi-b|google|accesstrade|valuecommerce|doubleclick|facebook|clarity|hotjar|criteo|tiktok|yahoo.*(ads|retarget)|bing\.com\/(bat|action)|line-scdn.*tag|karte|ptengine|smartnews-ads|twitter.*(ads|analytics)/i;
(async () => {
  const b = await p.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const only = process.argv[3] ? process.argv[3].split(',') : null;
  const run = async ([id, u, wait]) => {
    const pg = await b.newPage();
    await pg.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36');
    await pg.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
    await pg.setRequestInterception(true);
    pg.on('request', async r => {
      const u = r.url();
      // ajax.googleapis.com の jQuery 等は google へ出さず cdnjs の同じパスから取って返す（google 宛てのリクエストは 0 件のまま）
      const m = u.match(/^https?:\/\/ajax\.googleapis\.com(\/ajax\/libs\/.*)$/);
      if (m) { try { const res = await fetch('https://cdnjs.cloudflare.com' + m[1]); return r.respond({ status: 200, contentType: 'application/javascript', body: await res.text() }); } catch (e) { return r.abort(); } }
      return BLOCK.test(u) ? r.abort() : r.continue();
    });
    try { await pg.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 }); } catch (e) { console.log(id, 'nav', e.message.slice(0, 80)); }
    await new Promise(r => setTimeout(r, wait || 9000));
    // Cookie 同意バナー（「同意する」ボタン）だけは押して閉じる（クッキーウォールのまま撮らない）
    try { await pg.evaluate(() => { for (const b of document.querySelectorAll('button,a')) { if (/^\s*(同意する|同意して閉じる|OK)\s*$/.test(b.textContent || '')) { b.click(); } } }); } catch (e) {}
    await new Promise(r => setTimeout(r, 1500));
    try { await pg.evaluate(() => window.scrollTo(0, 0)); } catch (e) {}
    await pg.screenshot({ path: `${process.argv[2]}/${id}.png`, clip: { x: 0, y: 0, width: 1280, height: 800 } });
    console.log(id, pg.url());
    await pg.close();
  };
  const list = T.filter(t => !only || only.includes(t[0]));
  for (let i = 0; i < list.length; i += 3) await Promise.all(list.slice(i, i + 3).map(t => run(t).catch(e => console.log(t[0], 'ERR', e.message.slice(0, 80)))));
  await b.close();
})();
