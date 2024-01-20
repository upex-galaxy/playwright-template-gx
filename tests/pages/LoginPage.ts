import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
	page: Page;
	url: string;
	LoginTab: () => Locator;
	LoginPageTitle: Locator;
	usernameInput: Locator;
	passwordInput: Locator;
	loginBtn: Locator;
	errorMsgByNulls: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.LoginTab = () => this.page.getByText('LOGIN', { exact: true });
		this.LoginPageTitle = this.page.locator('h1');
		// Selectors para PW:
		// Obtener un Element HERMANO de otro Element.
		this.usernameInput = this.page.locator(':has-text("Username")+input');
		this.passwordInput = this.page.locator(':has-text("Password")+input');
		this.loginBtn = this.page.getByRole('button', { name: 'login' });
		this.errorMsgByNulls = this.page.locator('.login-error');
	}

	async gotoLoginTab() {
		await this.LoginTab().click();
	}

	async enterUsername(text: string) {
		await this.usernameInput.fill(text);
	}

	async enterPassword(text: string) {
		await this.passwordInput.fill(text);
	}

	async clickOnLoginBtn() {
		await this.loginBtn.click();
	}

	//todo: Login Workflow Actions:
	async LoginSession() {
		//*Open Browser baseUrl
		await this.page.goto('/sl');
		const url = this.page.url();
		expect(url).toContain('/sl');
		//* Move to Login Page.
		await this.gotoLoginTab();
		await expect(this.LoginPageTitle).toHaveText('Login to Coderbyte');

		//*1: Ingresar texto en Username:
		await this.enterUsername(process.env.example_username);
		//*2: Ingresar texto en Password:
		await this.enterPassword(process.env.example_password);
		//*3: Hacer click en botón LOGIN:
		await this.clickOnLoginBtn();
		//*4: Should NOT display error messages:
		await expect(this.errorMsgByNulls).not.toBeVisible();
		//*5: Should be logged in.
		await this.page.waitForRequest('**' + process.env.example_request + '?**');
	}
}
