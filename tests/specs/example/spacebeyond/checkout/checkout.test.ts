import { story, precondition, test, expect } from '@pages/TestBase';

story('GX3-1740: Space Beyond - Book a destiny on Checkout', () => {
	
	precondition(async ({ loginPage, productPage }) => {
		await loginPage.loginSuccess();
		const cards = await productPage.productCards().count();
		expect(cards).toBeGreaterThan(5);
	});

	test('GX3-1740 | TC1: Should book a destiny on Checkout', async ({ checkoutPage, productPage }) => {
		const { price: expectedPrice } = await productPage.bookRandomDestination();
		const checkoutPrice = await checkoutPage.getCheckoutPrice();
		expect(checkoutPrice).toBe(expectedPrice);
	});

});