import { test, story, precondition, expect } from '@TestBase';

story('Challenge List', () => {
	precondition(async ({ login }) => {
		await login.LoginSession();
	});
	test('TC1: select free challenge', async ({ page, chalPage }) => {
		await chalPage.selectFreeChallenge(0);
		expect(page.url()).toContain('/information');
	});
});
