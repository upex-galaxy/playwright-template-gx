import { expect, type Page, type Locator } from '@playwright/test';

export class SwLoginPage {
	page: Page;
	usernameInput: Locator;
	passwordInput: Locator;
	loginButton: Locator;

	constructor(driver: Page) {
		//? Aquí van los ELEMENTOS DEL "OBJETO DE PAGINA"
		this.page = driver;
		this.usernameInput = this.page.locator('[data-test=username]');
		this.passwordInput = this.page.locator('[data-test=password]');
		this.loginButton = this.page.locator('[data-test=login-button]');
	}

	async login(username: string, password: string) {
		await this.page.goto('https://www.saucedemo.com/');
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
		expect(this.page.url()).toContain('/inventory.html');
	}
}
