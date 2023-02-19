import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const variable = 'Hola, mundo!';
  console.log(variable);

  await browser.close();
})();