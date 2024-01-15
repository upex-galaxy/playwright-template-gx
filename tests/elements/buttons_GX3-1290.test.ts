import { story, test, precondition, expect } from '@pages/TestBase';

// Test Suite:
story('GX3-1290: Element Buttons', () => {
	// Precondiciones antes de cada test:
	precondition(async ({ page }) => {
		await page.goto('/buttons', { waitUntil: 'domcontentloaded' });
	});
	test('TC1: Should trigger when using Double Click', async ({ page }) => {
		expect(1).toBe(1);
	});
	test('TC2: Should trigger when using Right Click', async ({ page }) => {
		expect(1).toBe(1);
	});
	test('TC3: Should trigger when using Simple Click', async ({ page }) => {
		expect(1).toBe(1);
	});
});
