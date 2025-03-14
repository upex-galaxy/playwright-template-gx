import { test } from '@playwright/test';
import { SwLoginPage } from '@pages/SwLoginPage';

test.describe('GX3-1223: Checkout Product', () => {
	test.beforeEach(async ({ page }) => {
		const loginPage = new SwLoginPage(page);
		// Login
		await loginPage.login('standard_user', 'secret_sauce');
	});

	test('Checkout Product', async ({ page }) => {
		// Realizar Checkout.

		await page.pause();
	});
});
