class LoginPage {
	constructor(driver) {
		this.page = driver
	}
    // Elements:
    usernameInput = () => this.page.locator('form input[type="text"]')
    passwordInput = () => this.page.locator('form input[type="password"]')
    submitButton = () => this.page.locator('button[type="submit"]')

	async enterUsername(text) {
		await this.usernameInput().type(text)
	}
	async enterPassword(text) {
		await this.passwordInput().type(text)
	}
	async submitLogin() {
		await this.submitButton().click()
	}
}

export { LoginPage }
