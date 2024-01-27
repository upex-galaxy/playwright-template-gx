import { test as driver } from '@playwright/test';
import { SpaceLoginPage } from '@pages/SpaceLoginPage';
import { SpaceProductPage } from '@pages/SpaceProductPage';
import { SpaceCheckoutPage } from '@pages/SpaceCheckoutPage';

const test = driver.extend<{
    loginPage: SpaceLoginPage;
    productPage: SpaceProductPage;
    checkoutPage: SpaceCheckoutPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new SpaceLoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new SpaceProductPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new SpaceCheckoutPage(page));
    },
});

export { test };
// Main utilities:
export const feature = test.describe;
export const expect = test.expect;
// Hooks:
export const beforeAll = test.beforeAll;
export const precondition = test.beforeEach;
export const postcondition = test.afterEach;
export const afterAll = test.afterAll;
