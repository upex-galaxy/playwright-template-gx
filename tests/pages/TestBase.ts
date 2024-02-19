import { test as driver } from '@playwright/test';
import { SpaceLoginPage } from './SpaceLoginPage';
import { SpaceProductPage } from './SpaceProductPage';
import { SpaceCheckoutPage } from './SpaceCheckoutPage';
import { OrangeLoginPage } from './OrangeLoginPage';

const test = driver.extend<{
	orangeLoginPage: OrangeLoginPage; //? Esto Page es para un ejemplo usando el superPrecondition.
	loginPage: SpaceLoginPage;
	productPage: SpaceProductPage;
	checkoutPage: SpaceCheckoutPage;
}>({
	orangeLoginPage: async ({ page }, use) => await use(new OrangeLoginPage(page)),
	loginPage: async ({ page }, use) => await use(new SpaceLoginPage(page)),
	productPage: async ({ page }, use) => await use(new SpaceProductPage(page)),
	checkoutPage: async ({ page }, use) => await use(new SpaceCheckoutPage(page)),
});

export { test };
// Main utilities:
export const story = test.describe;
export const expect = test.expect;
// Hooks:
export const beforeAll = test.beforeAll;
export const precondition = test.beforeEach;
export const afterEach = test.afterEach;
export const afterAll = test.afterAll;
