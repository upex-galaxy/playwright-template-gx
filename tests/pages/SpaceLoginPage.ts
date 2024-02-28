import { type Locator, type Page, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { ReactPage } from './ReactPage';
dotenv.config();

const actualUsername = 'Saitest'; //? habilita esto si usas CI: process.env.CI ? 'User in CI' : process.env.SPACE_LOGIN_USERNAME;
const actualPassword = 'Sai123'; //? habilita esto si usas CI: process.env.CI ? 'Password in CI' : process.env.SPACE_LOGIN_PASSWORD;

export class SpaceLoginPage extends ReactPage {
	usernameInput: () => Locator;
	passwordInput: () => Locator;
	loginButton: () => Locator;

	constructor(driver: Page) {
		super(driver);
		this.usernameInput = () => this.getByReactTool('input', { hasText: 'Username' }).locator('[role=input]');
		this.passwordInput = () => this.getByReactTool('input', { hasText: 'Password' }).locator('[role=input]');
		this.loginButton = () => this.page.locator('[form="login"]');
	}

	async enterUsername(usernameValue: string) {
		await this.usernameInput().fill(usernameValue);
	}
	async enterPassword(passwordValue: string) {
		await this.passwordInput().fill(passwordValue);
	}
	async submitLogin() {
		await this.loginButton().click();
	}

	//* Esto se conoce como un Shortcut o SharedSteps, como quieras decirle:
	//* Esto NO se usaría en el Caso de Prueba de un Login,
	//* sino como PRECONDICION para otras Pruebas que no son de Login, ej: Checkout

	async login(usernameValue: string, passwordValue: string) {
		await this.page.goto('https://demo.testim.io/login');
		await this.enterUsername(usernameValue);
		await this.enterPassword(passwordValue);
		await this.submitLogin();
	}

	async loginSuccess() {
		const username = actualUsername;
		const password = actualPassword;
		await this.login(username, password);
		expect(this.page.url()).toBe('https://demo.testim.io/');
	}
}
