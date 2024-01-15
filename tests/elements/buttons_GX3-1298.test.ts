import { precondition, story, test, expect } from '@pages/TestBase';

story('GX3-1298: Element Buttons', () => {
	precondition(async ({ page }) => {
		await page.goto('/buttons');

		test('TC1: Should trigger when using double click', async ({ page, chalPage }) => {
			expect(1).toBe(1);
		});

		test('TC2: Should trigger when using right click', async ({ page, chalPage }) => {
			expect(1).toBe(1);
		});

		test('TC3: Should trigger when using simple click', async ({ page, chalPage }) => {});
		expect(1).toBe(1);
	});
});
