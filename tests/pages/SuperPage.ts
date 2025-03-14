import type { Page, Locator } from '@playwright/test';

//* El SuperPage es una clase que se encarga de tener los elementos comunes y luego se hereda en cada POM.
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
