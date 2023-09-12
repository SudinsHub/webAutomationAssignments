import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
   headless: false,
   defaultViewport: { width: 1920, height: 1000 },
   userDataDir: "temporary",
   slowMo: 200
});

const page = await browser.newPage();
await page.goto("https://duckduckgo.com", {
    waitUntil: "networkidle2"
});
await page.waitForSelector('#searchbox_input');
await page.type('#searchbox_input', 'searchWhatYouWant');
await page.keyboard.press("Enter");
await page.waitForSelector('.zcm__link');
await page.screenshot({path: 'searchDuckduckgo.png'});
await browser.close();
