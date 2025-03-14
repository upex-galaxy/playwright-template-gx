import type { Page, Locator } from '@playwright/test';

export class SuperPage {
	page: Page;
	popup: Locator;
	dropdown: Locator;
	dropdownOptions: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.popup = this.page.getByRole('dialog');
		this.dropdown = this.page.locator('');
		this.dropdownOptions = this.dropdown.getByRole('option');
	}
}
