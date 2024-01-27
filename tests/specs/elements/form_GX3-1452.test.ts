import { story, precondition, test, expect } from '@TestBase';
import data from '@data/juliaUserDetails.json' assert { type: 'json' };
import type { simpleForm } from '@type/inputTypes';

story('GX3-1452: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	precondition(async ({ page }) => {
		await page.goto('/text-box', { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Should fill all fields of the form and submit correctly', async ({ page }) => {
		const nameField = page.locator('#userName-wrapper input');
		const emailField = page.locator('#userEmail-wrapper input');
		const currAddressField = page.locator('#currentAddress-wrapper textarea');
		const permAddressField = page.locator('#permanentAddress-wrapper textarea');
		let n = 1;
		await test.step('Fill the fullname', async () => {
			await nameField.fill(data[n].fullName);
		});

		await test.step('Fill the email', async () => {
			await emailField.fill(data[n].email);
		});

		await test.step('Fill the current Address', async () => {
			await currAddressField.fill(data[n].currentAddress);
		});

		await test.step('Fill the permanent Address', async () => {
			await permAddressField.fill(data[n].permanentAddress);
		});

		await test.step('Click on submit button', async () => {
			await page.getByText('Submit', { exact: true }).click();
		});

		await test.step('Display all entry data', async () => {
			const outputLines = await page.locator('#output p').allInnerTexts();
			const reducedOutput = outputLines.map((item) => item.split(':')[1]);
			//console.log(outputLines);
			//console.log(reducedOutput);
			const expectedOutput = [data[n].fullName, data[n].email, data[n].currentAddress, data[n].permanentAddress];
			expect(reducedOutput).toEqual(expectedOutput);
		});
	});
	test('TC2: Should refill all fields with new data', async ({ page }) => {
		const nameField = page.locator('#userName-wrapper input');
		const emailField = page.locator('#userEmail-wrapper input');
		const currAddressField = page.locator('#currentAddress-wrapper textarea');
		const permAddressField = page.locator('#permanentAddress-wrapper textarea');

		async function fillForm(datos: simpleForm) {
			await nameField.fill(datos.fullName);
			await emailField.fill(datos.email);
			await currAddressField.fill(datos.currentAddress);
			await permAddressField.fill(datos.permanentAddress);
		}

		for (const oneUser of data) {
			fillForm(oneUser);
			await page.waitForTimeout(1000);
			await page.getByText('Submit', { exact: true }).click();
			const outputLines = await page.locator('#output p').allInnerTexts();
			const reducedOutput = outputLines.map((item) => item.split(':')[1]);
			const expectedOutput = [oneUser.fullName, oneUser.email, oneUser.currentAddress, oneUser.permanentAddress];
			expect(reducedOutput).toEqual(expectedOutput);
		}
	});
});
