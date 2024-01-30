import type { Locator, Page } from '@playwright/test';

export class SpaceCheckoutPage {
	page: Page;
	checkoutPrice: () => Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.checkoutPrice = () => this.page.getByText('Total').getByText('$');
	}

	async getCheckoutPrice() {
		const priceText = await this.checkoutPrice().innerText();
		const priceNumber = parseFloat(priceText.replace('$', '').replace(',', ''));
		return priceNumber;
	}
}
