// Rendert tools/icon.svg in die Android-Mipmap-Größen (nutzt Playwright + Chromium)
const { chromium } = require(process.env.PW_PATH || 'playwright');
const fs = require('fs'), path = require('path');
const sizes = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
(async () => {
  const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'), 'utf8');
  const b = await chromium.launch();
  const p = await b.newPage();
  for (const [d, s] of Object.entries(sizes)) {
    await p.setViewportSize({ width: s, height: s });
    await p.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg ', `<svg width="${s}" height="${s}" `)}</body></html>`);
    const out = path.join(__dirname, '..', 'android', 'res', 'mipmap-' + d, 'ic_launcher.png');
    await p.screenshot({ path: out, omitBackground: true, clip: { x: 0, y: 0, width: s, height: s } });
  }
  await p.setViewportSize({ width: 256, height: 256 });
  await p.setContent(`<html><body style="margin:0">${svg.replace('<svg ', '<svg width="256" height="256" ')}</body></html>`);
  await p.screenshot({ path: path.join(__dirname, '..', 'game', 'www', 'icon.png'), omitBackground: true });
  await b.close();
})();
