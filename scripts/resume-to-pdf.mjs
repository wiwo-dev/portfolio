import puppeteer from "puppeteer";

async function main() {
  try {
    const pdfURL = `http://localhost:3000/cv`;
    const pdfFilePath = "public/Resume-Wojciech-Wieclawski.pdf";

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
    );

    await page.setViewport({
      width: 1920,
      height: 971,
      deviceScaleFactor: 1.5,
    });

    await page.goto(pdfURL, { waitUntil: "networkidle2" });
    const height = await page.evaluate(() => parseInt(getComputedStyle(document.body).height));

    await page.pdf({
      printBackground: true,
      pageRanges: "1",
      width: "1230px",
      height: height - 90,
      path: pdfFilePath,
      //margin: { top: "85px", right: "85px", bottom: "85px", left: "85px" },
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });

    console.log("📄 Done generating the resume PDF.");
    await browser.close();
  } catch (e) {
    console.log(e);
  }
}

main();
