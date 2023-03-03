import { test, expect } from '@playwright/test';

test.describe('test suite', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://google.com');
	});
	test('Holi', async () => {
		expect(1).toBe(1);
	});
});
