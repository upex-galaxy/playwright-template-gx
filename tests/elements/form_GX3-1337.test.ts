import { story, precondition, test, expect } from '@TestBase';
import data from '@data/elyUserDetails.json' assert { type: 'json' };
import { getRealValues } from '@helper/testUtils';
import type { simpleForm } from '@type/inputTypes';

story('GX3-1337: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	precondition(async ({ page }) => {
		await page.goto('/text-box', { waitUntil: 'domcontentloaded' });
	});

	test('GX3-1338 | TC1: Should fill the form and submit', async ({ page }) => {
		const usernameInput = page.locator('#userName-wrapper input');
		const emailInput = page.locator('#userEmail-wrapper input');
		const currentAddressInput = page.locator('#currentAddress-wrapper textarea');
		const permanentAddressInput = page.locator('#permanentAddress-wrapper textarea');

		const expectedName = await test.step('Fill the username', async () => {
			const name = data[0].fullName;
			await usernameInput.fill(name);
			return name;
		});

		const expectedEmail = await test.step('Fill the email', async () => {
			const email = data[0].email;
			await emailInput.fill(email);
			return email;
		});

		const expectedCuAddress = await test.step('Fill the current address', async () => {
			const address = data[0].currentAddress;
			await currentAddressInput.fill(address);
			return address;
		});

		const expectedPerAddress = await test.step('Fill the permanent address', async () => {
			const address = data[0].permanentAddress;
			await permanentAddressInput.fill(address);
			return address;
		});

		await test.step('Submit the form', async () => {
			await page.locator('button', { hasText: 'Submit' }).click();
			await expect(page.locator('#output')).toBeVisible();
		});

		await test.step('Verify the output', async () => {
			const outputTexts = page.locator('#output p');
			const displayedValues = await getRealValues(outputTexts);
			const expectedValues = [expectedName, expectedEmail, expectedCuAddress, expectedPerAddress];
			expect(displayedValues).toEqual(expectedValues);
			console.log('🎭️ Displayed Values: ', displayedValues);
		});
	});

	test('GX3-1338 | TC2: Should re-fill forms with different data', async ({ page }) => {
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
