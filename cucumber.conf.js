import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";

import { chromium } from "@playwright/test";

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    });
 
 });

 Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
 });

 // Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
 });

 // close the browser
AfterAll(async function () {

    await global.browser.close();
 });