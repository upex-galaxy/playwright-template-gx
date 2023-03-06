import { test, suite, prc, expect } from '@TestBase';

suite('Challenge List', () => {
	prc(async ({ login }) => {
		await login.LoginSession();
	});
	test('TC1: select free challenge', async ({ page, chalPage }) => {
		await chalPage.selectFreeChallenge(0);

		await expect(page.url()).toContain('/information');
	});
});
