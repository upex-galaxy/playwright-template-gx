import { Page, Locator } from '@playwright/test';

class LoginPageEly {
	readonly page: Page;
	readonly url: string;
	readonly LoginTab: Locator;
	readonly LoginPageTitle: Locator;
	readonly usernameInput: Locator;
	readonly passwordInput: Locator;
	readonly loginBtn: Locator;
	readonly errorMsgByNulls: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.LoginTab = this.page.getByText('LOGIN', { exact: true });
		this.LoginPageTitle = this.page.locator('h1');
		// Selectors para PW:
		// Obtener un Element HERMANO de otro Element.
		this.usernameInput = this.page.locator(':has-text("Username")+input');
		this.passwordInput = this.page.locator(':has-text("Password")+input');
		this.loginBtn = this.page.getByRole('button', { name: 'login' });
		this.errorMsgByNulls = this.page.locator('login-error');
	}

	async gotoLoginTab() {
		await this.LoginTab.click();
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
}

export { LoginPageEly };
