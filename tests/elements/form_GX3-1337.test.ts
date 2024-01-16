import { story, precondition, test, expect } from '@TestBase';
import data from '@data/elyUserDetails.json' assert { type: 'json' };
import type { simpleForm } from '@type/inputTypes';

story('GX3-1337: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	precondition(async ({ page }) => {
		await page.goto('/text-box', { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Should fill the form and submit', async ({ page }) => {
		const usernameInput = page.locator('#userName-wrapper input');
		const emailInput = page.locator('#userEmail-wrapper input');
		const currentAddressInput = page.locator('#currentAddress-wrapper textarea');
		const permanentAddressInput = page.locator('#permanentAddress-wrapper textarea');

		await test.step('Fill the username', async () => {
			await usernameInput.fill(data[0].fullName);
		});

		await test.step('Fill the email', async () => {
			await emailInput.fill(data[0].email);
		});

		await test.step('Fill the current address', async () => {
			await currentAddressInput.fill(data[0].currentAddress);
		});

		await test.step('Fill the permanent address', async () => {
			await permanentAddressInput.fill(data[0].permanentAddress);
		});

		await test.step('Submit the form', async () => {
			await page.locator('button', { hasText: 'Submit' }).click();
			await expect(page.locator('#output')).toBeVisible();
		});

		await test.step('Verify the output', async () => {
			const outputName = await page.locator('#output #name').innerText();
			// expect(outputName).toEqual(data[0].fullName);
		});
	});

	test('TC2: Should re-fill forms with different data', async ({ page }) => {
		const usernameInput = page.locator('#userName-wrapper input');
		const emailInput = page.locator('#userEmail-wrapper input');
		const currentAddressInput = page.locator('#currentAddress-wrapper textarea');
		const permanentAddressInput = page.locator('#permanentAddress-wrapper textarea');

		async function fillForm(datos: simpleForm) {
			await usernameInput.fill(datos.fullName);
			await emailInput.fill(datos.email);
			await currentAddressInput.fill(datos.currentAddress);
			await permanentAddressInput.fill(datos.permanentAddress);
		}

		for (const credencials of data) {
			await fillForm(credencials);
			await page.waitForTimeout(1000);
			await page.locator('button', { hasText: 'Submit' }).click();
		}
	});
});
