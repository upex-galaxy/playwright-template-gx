import { Page, Locator } from '@playwright/test';

class LoginPageFranco {
	readonly page: Page;
	readonly url: string;
	readonly LoginTabTitle: Locator;
	readonly LoginPageTitle: Locator;
	readonly username: Locator;
	readonly password: Locator;
	readonly btnLogin: Locator;
	readonly errorMsgLogin: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.url = this.page.url();
		this.LoginTabTitle = this.page.getByText('LOGIN', { exact: true });
		this.LoginPageTitle = this.page.locator('h1');
		this.username = this.page.locator(':has-text("Username")+input');
		this.password = this.page.locator(':has-text("Password")+input');
		this.btnLogin = this.page.getByRole('button', { name: 'login' });
		this.errorMsgLogin = this.page.locator('.login-error', { hasText: 'The username or password were incorrect.' });
	}
	async goToLoginTab() {
		await this.LoginTabTitle.click();
	}
	async enterUsername(text: string) {
		await this.username.fill(text);
	}
	async enterPassword(text: string) {
		await this.password.fill(text);
	}
	async clickLoginButton() {
		await this.btnLogin.click();
	}
}
export { LoginPageFranco };
