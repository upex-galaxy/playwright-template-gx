import { type Locator, type Page, expect } from "@playwright/test";
import { getByReactTool } from "@helper/testUtils";

export class SpaceLoginPage {

    page: Page
    usernameInput: ()=> Locator
    passwordInput: () => Locator;
    loginButton: () => Locator;

    constructor(driver: Page) {

        this.page = driver
        this.usernameInput = () => getByReactTool('input', this.page, { hasText: 'Username' }).locator('[role=input]')
        this.passwordInput = () => getByReactTool('input', this.page, { hasText: 'Password' }).locator('[role=input]')
        this.loginButton = () => this.page.locator('[form="login"]')
    }

    async enterUsername(usernameValue: string) {
        await this.usernameInput().fill(usernameValue)
    }
    async enterPassword(passwordValue: string) {
        await this.passwordInput().fill(passwordValue)
    }
    async submitLogin() {
        await this.loginButton().click()
    }

    async login(usernameValue: string, passwordValue: string) {
        await this.page.goto('https://demo.testim.io/login')
        await this.enterUsername(usernameValue)
        await this.enterPassword(passwordValue)
        await this.submitLogin()
        expect(this.page.url()).toBe('https://demo.testim.io/')
    }
}