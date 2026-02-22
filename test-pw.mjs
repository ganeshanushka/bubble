import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:8080/profiles.html');
  await page.waitForTimeout(1000);
  
  console.log('Type into search...');
  await page.fill('#locationSearch', 'The Quad');
  await page.click('#searchBtn');
  
  console.log('Wait a second...');
  await page.waitForTimeout(1000);
  
  const display = await page.evaluate(() => document.getElementById('placeBubbleContainer').style.display);
  console.log('Bubble display:', display);

  await browser.close();
})();
