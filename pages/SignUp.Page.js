class SignUp {
	constructor(page) {
		this.page = page
	}
	usernameInput = () => this.page.locator('.login-form input[type="text"]').nth(0)
	emailInput = () => this.page.locator('.login-form input[type="text"]').nth(1)
	passwordInput = () => this.page.locator('.login-form input[type="password"]')
	actionBtn = () => this.page.locator('button:has-text("create account")')
	errorMessage = ()=> this.page.locator('.login-error')

	async enterUsername(text) {
		await this.usernameInput().type(text)
	}
	async enterEmail(text) {
		await this.emailInput().type(text)
	}
	async enterPassword(text) {
		await this.passwordInput().type(text)
	}
	async clickCreateAccount() {
		await this.actionBtn().click()
	}
}

export { SignUp }
