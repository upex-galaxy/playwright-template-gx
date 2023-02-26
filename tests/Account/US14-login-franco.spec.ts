import { test, expect } from '@playwright/test';
import { LoginPageFranco } from '@pages/loginPageFranco';
import { Debugger } from '@helper/debugger';
const username = 'Playwright';
const password = 'coderplaywright2023';
//todo: Test Suite

test.describe('US14 | Login | Iniciar y cerrar sesión', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPageFranco(page);
		await page.goto('/sl');
		const url = await page.url();
		await expect(url).toContain('/sl'); // * Validación de endpoint Web
		//* move to login
		await login.goToLoginTab();
		await expect(login.LoginPageTitle).toHaveText('Login to Coderbyte');
	});

	//todo: Test Cases
	test('14 | TC1: Validar iniciar sesión exitosamente.', async ({ page }) => {
		const login = new LoginPageFranco(page);
		await login.enterUsername(username);
		await login.enterPassword(password);
		await login.clickLoginButton();
	});
	test('14 | TC2: Validar no poder iniciar sesion con Usuario correcto y password incorrecta ', async ({ page }) => {
		const login = new LoginPageFranco(page);
		await login.enterUsername(username);
		await login.enterPassword('');
		await login.clickLoginButton();
		await expect(login.errorMsgLogin).toBeVisible();
	});
	test('14 | TC3: Validar no poder iniciar sesion con Usuario incorrecto y password correcta ', async ({ page }) => {
		const login = new LoginPageFranco(page);
		await login.enterUsername('');
		await login.enterPassword('password');
		await login.clickLoginButton();
		await expect(login.errorMsgLogin).toBeVisible();
	});
	test(' 14 | TC4: Validar no poder iniciar sesion con campos vacios [Usuario y Password] ', async ({ page }) => {
		const login = new LoginPageFranco(page);
		await login.enterUsername('');
		await login.enterPassword('');
		await login.clickLoginButton();
		await expect(login.errorMsgLogin).toBeVisible();
	});
});
