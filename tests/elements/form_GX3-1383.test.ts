import { story, precondition, test, expect } from '@pages/TestBase';
import data from '@data/elyUserDetails.json' assert { type: 'json' };
import type { simpleForm } from '@type/inputTypes';

story('GX3_1383: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
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

		await test.step('Submit the Form', async () => {
			await page.locator('button', { hasText: 'Submit' }).click();
			await expect(page.locator('#output')).toBeVisible();

			await test.step('Verify the Output', async () => {
				const outputName = await page.locator('#output #name').innerText();
				expect(outputName).toContain(data[0].fullName);
			});
		});
	});
	test('TC2: Fill valid form and Submit', async ({ page }) => {
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

		for (const credentials of data) {
			await fillForm(credentials);
			await page.waitForTimeout(1000);
			await page.locator('button', { hasText: 'Submit' }).click();
		}
	});
});
