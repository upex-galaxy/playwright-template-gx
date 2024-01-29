
import { test as driver, request } from '@playwright/test';
import { SpaceLoginPage } from './SpaceLoginPage';
import { SpaceProductPage } from './SpaceProductPage';
import { SpaceCheckoutPage } from './SpaceCheckoutPage';

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
export const story = test.describe;
export const expect = test.expect;
export const api = request;
// Hooks:
export const beforeAll = test.beforeAll;
export const precondition = test.beforeEach;
export const afterEach = test.afterEach;
export const afterAll = test.afterAll;
