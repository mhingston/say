const puppeteer = require('puppeteer');

const main = async (text) =>
{
    const browser = await puppeteer.launch(
    {
        executablePath: '/opt/google/chrome/chrome',
        headless: false
    });
    const page = await browser.newPage();
    await page.evaluate((text) =>
    {
        return new Promise((resolve, reject) =>
        {
            const msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            msg.onend = resolve; 
        });
    }, text);
    await browser.close();
}

main(process.argv.slice(2).join(' '));
