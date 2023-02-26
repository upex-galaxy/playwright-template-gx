import { test, expect } from '@playwright/test';
import { LoginPageEly } from '@pages/LoginPageEly';
const username = 'Playwright';
const password = 'coderplaywright2023';
//todo: Test Suite
test.describe('US11: Coderbyte | LOGIN | Iniciar y Cerrar sesión', () => {
	//todo: beforeEach
	test.beforeEach(async ({ page }) => {
		const login = new LoginPageEly(page);
		await page.goto('/sl');
		const url = await page.url();
		await expect(url).toContain('/sl');

		//* Move to Login Page.
		await login.gotoLoginTab();
		await expect(login.LoginPageTitle).toHaveText('Login to Coderbyte');
	});

	//	todo: Test Cases
	test('11 | TC1: Validar iniciar sesión exitosamente.', async ({ page }) => {
		const login = new LoginPageEly(page);

		//*1: Ingresar texto en Username:
		await login.enterUsername(username);
		//*2: Ingresar texto en Password:
		await login.enterPassword(password);
		//*3: Hacer click en botón LOGIN:
		await login.clickOnLoginBtn();
	});
	test('11 | TC2: Validar no poder iniciar sesión con campos vacíos.', async ({ page }) => {
		const login = new LoginPageEly(page);

		//*1: Ingresar texto en Username:
		await login.enterUsername('');
		await expect(login.usernameInput).toBeEmpty();
		//*2: Ingresar texto en Password:
		await login.enterPassword('');
		await expect(login.passwordInput).toBeEmpty();
		//*3: Hacer click en botón LOGIN:
		await login.clickOnLoginBtn();
		//*4: Should display error message:
		await expect(login.errorMsgByNulls).toBeVisible();
	});
	test('14 | TC3: Validar no poder iniciar sesión con Usuario incorrecto', async ({ page }) => {
		const login = new LoginPageEly(page);

		//*1: Ingresar texto en Username:
		await login.enterUsername('IncorrectUsername');
		await expect(login.usernameInput).not.toBeEmpty();
		//*2: Ingresar texto en Password:
		await login.enterPassword(password);
		await expect(login.passwordInput).not.toBeEmpty();
		//*3: Hacer click en botón LOGIN:
		await login.clickOnLoginBtn();
		//*4: Should display error message:
		await expect(login.errorMsgByNulls).toBeVisible();
	});
});
