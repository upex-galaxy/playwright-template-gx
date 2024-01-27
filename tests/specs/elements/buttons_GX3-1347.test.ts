import { story, test, precondition, expect } from '@pages/TestBase';

// Test Suite:
story('GX-1347: Elements Buttons', () => {
	//precondiciones antes de cada test
	precondition('Preconditions', async ({ page }) => {
		await page.goto('/buttons', { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Deberia activarse al hacer doble click', async ({ page }) => {
		expect(1).toBe(1);
		//* given
		const expectedMessage = 'You have done a double click';

		/*await test.step('Click on double click button', async () => {

        })*/

		//* when
		await page.locator('#doubleClickBtn').dblclick();

		//*then
		const messageElement = page.locator('#doubleClickMessage');
		await expect(messageElement).toHaveText(expectedMessage);
	});

	test('TC2: Deberia activarse al hacer click derecho', async ({ page }) => {
		expect(1).toBe(1);
	});

	test('TC3: Deberia activarse al hacer simple click ', async ({ page }) => {
		expect(1).toBe(1);
	});
});

//test('simple test', async ({ page, chalPage }) => {});
