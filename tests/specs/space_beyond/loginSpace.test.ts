import { feature, test, expect } from '@pages/TestBaseEly';

feature('GX3-1740: Space Beyond - Book a destiny on Checkout', () => {

	test('[33] | TC1: Should book a destiny on Checkout', async ({ loginPage, productPage }) => {
		await loginPage.loginSuccess();
		const cards = await productPage.productCards().count();
		expect(cards).toBeGreaterThan(5);
	});

});