import { LoginPage } from '@pages/LoginPage';
import { ChallengesLPage } from '@pages/ChallengesLPage';
import { Debugger } from '@helper/debugger';

import { test as driver, request } from '@playwright/test';

const test = driver.extend<{
	chalPage: ChallengesLPage;
	login: LoginPage;
	debug: Debugger;
}>({
	//todo: Le digo a PW que use los PageObjects con una nueva instancia (new):
	//* Cada vez que llame el nombre de la variable,
	//* se activa la función asíncrona que usa una nueva instancia del PageObject Importado.
	chalPage: async ({ page }, use) => {
		await use(new ChallengesLPage(page));
	},
	login: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	debug: async ({ page }, use) => {
		await use(new Debugger(page));
	},
});

export { test };
// Main utilities:
export const suite = test.describe;
export const expect = test.expect;
export const api = request;
// Hooks:
export const background = test.beforeAll;
export const prc = test.beforeEach;
export const post = test.afterEach;
export const close = test.afterAll;
