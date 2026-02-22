import { chromium } from 'playwright';

(async () => {
   const browser = await chromium.launch();
   const page = await browser.newPage();

   await page.goto('http://localhost:8080/profiles.html');
   await page.waitForTimeout(500);

   const ptr = await page.evaluate(() => {
      let el = document.getElementById('searchBtn');
      return window.getComputedStyle(el).pointerEvents;
   });
   console.log('searchBtn pointer-events:', ptr);

   const coveringEl = await page.evaluate(() => {
      let el = document.getElementById('searchBtn');
      let rect = el.getBoundingClientRect();
      let top = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      return top ? top.className || top.tagName : null;
   });
   console.log('Element covering searchBtn:', coveringEl);

   await browser.close();
})();
