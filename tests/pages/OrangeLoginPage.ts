import { type Page, type Locator, expect } from '@playwright/test';
import * as env from 'dotenv';
env.config();

const actualUsername = process.env.ORANGE_USERNAME;
const actualPassword = process.env.ORANGE_PASSWORD;

export class OrangeLoginPage {
	page: Page;
	usernameInput: () => Locator;
	passwordInput: () => Locator;
	loginSubmitButton: () => Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.usernameInput = () => this.page.locator('[name=username]');
		this.passwordInput = () => this.page.locator('[name=password]');
		this.loginSubmitButton = () => this.page.locator('button[type=submit]');
	}

	async loginSuccess() {
		await this.page.goto('https://opensource-demo.orangehrmlive.com/');
		expect.soft(this.page.url()).toContain('auth/login');
		await this.usernameInput().fill(actualUsername);
		await this.passwordInput().fill(actualPassword);
		await this.loginSubmitButton().click();
		expect.soft(this.page.url()).toContain('dashboard/index');
	}
}
