import { story, test } from '@pages/TestBase';
import { STORAGE_STATE } from '@playwrightConfig';

story('GX3-999: OrangeHRM - Login Session', async () => {

	test('Login Session', async ({ page, orangeLoginPage }) => {
		console.log('🎭️ ---- Starting Setup: Login Session');
		await orangeLoginPage.loginSuccess();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		await page.context().storageState({ path: STORAGE_STATE });
		console.log('🎭️ ---- Setup Done!');
	});
});