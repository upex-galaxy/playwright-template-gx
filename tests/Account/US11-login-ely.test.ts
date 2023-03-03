import { test, expect } from '@playwright/test';
import { LoginPageEly } from '@pages/LoginPageEly';

const get_completed = process.env.example_request;
const epChallenges = process.env.example_endpoint_challenges;
let login: LoginPageEly = <LoginPageEly>{};
//todo: Test Suite
test.describe('US11: Coderbyte | LOGIN | Iniciar y Cerrar sesión', () => {
	//todo: beforeEach
	test.beforeEach(async ({ page }) => {
		login = new LoginPageEly(page);
		await page.goto('/sl');
		const url = await page.url();
		await expect(url).toContain('/sl');

		//* Move to Login Page.
		await login.gotoLoginTab();
		await expect(login.LoginPageTitle).toHaveText('Login to Coderbyte');
	});

	//	todo: Test Cases
	test.only('11 | TC1: Validar iniciar sesión exitosamente.', async ({ page, baseURL }) => {
		//*1: Ingresar texto en Username:
		await login.enterUsername(process.env.example_username);
		//*2: Ingresar texto en Password:
		await login.enterPassword(process.env.example_password);
		//*3: Hacer click en botón LOGIN:
		await login.clickOnLoginBtn();
		//*4: Should NOT display error messages:
		await expect(login.errorMsgByNulls).not.toBeVisible();
		//*5: Should be logged in.
		await page.waitForRequest(baseURL + get_completed + '?**');
		await expect(page.url()).toContain(epChallenges);
	});
	test('11 | TC2: Validar no poder iniciar sesión con campos vacíos.', async () => {
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
	test('14 | TC3: Validar no poder iniciar sesión con Usuario incorrecto', async () => {
		//*1: Ingresar texto en Username:
		await login.enterUsername('IncorrectUsername');
		await expect(login.usernameInput).not.toBeEmpty();
		//*2: Ingresar texto en Password:
		await login.enterPassword(process.env.example_password);
		await expect(login.passwordInput).not.toBeEmpty();
		//*3: Hacer click en botón LOGIN:
		await login.clickOnLoginBtn();
		//*4: Should display error message:
		await expect(login.errorMsgByNulls).toBeVisible();
	});
});
