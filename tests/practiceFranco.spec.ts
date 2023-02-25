import { test, expect } from '@playwright/test';

test.describe('Test Suite', () => {
	test.beforeEach(async({page})=>{
		await page.goto('https://www.google.com.ar/');
	});
	test('prueba', async({ page }) => {
		await expect(1).toBe(1);
		await page.pause();
	});
});



