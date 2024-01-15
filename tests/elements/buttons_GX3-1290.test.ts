import { story, test, precondition, expect } from '@pages/TestBase';

// Test Suite:
story('GX3-1290: Element Buttons', () => {
	// Precondiciones antes de cada test:
	precondition(async ({ page }) => {
		await page.goto('/buttons', { waitUntil: 'domcontentloaded' });
	});
	test('TC1: Should trigger when using Double Click', async ({ page }) => {
		const expectedMessage = await test.step('Perform Double Click on Button', async () => {
			const expectedMessage = 'You have done a double click';
			await page.locator('#doubleClickBtn').dblclick();
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#doubleClickMessage');
			await expect(messageElement).toHaveText(expectedMessage);
		});
	});
	test('TC2: Should trigger when using Right Click', async ({ page }) => {
		const expectedMessage = await test.step('Perform Right Click on Button', async () => {
			const expectedMessage = 'You have done a right click';
			await page.locator('#rightClickBtn').click({ button: 'right' });
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#rightClickMessage');
			await expect(messageElement).toHaveText(expectedMessage);
		});
	});
	test('TC3: Should trigger when using Simple Click', async ({ page }) => {
		const expectedMessage = await test.step('Perform simple Click on Button', async () => {
			const expectedMessage = 'You have done a dynamic click';
			await page.getByText('Click Me', { exact: true }).click({ button: 'left' });
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#dynamicClickMessage');
			await expect(messageElement).toHaveText(expectedMessage);
		});
	});

	test('TC4: Should trigger all corresponent messages by each button', async ({ page }) => {
		const expectedDblClickMessage = await test.step('Perform Double Click on Button', async () => {
			const expectedMessage = 'You have done a double click';
			await page.locator('#doubleClickBtn').dblclick();
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#doubleClickMessage');
			await expect(messageElement).toHaveText(expectedDblClickMessage);
		});
		const expectedRightClickMessage = await test.step('Perform Right Click on Button', async () => {
			const expectedMessage = 'You have done a right click';
			await page.locator('#rightClickBtn').click({ button: 'right' });
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#rightClickMessage');
			await expect(messageElement).toHaveText(expectedRightClickMessage);
		});
		const expectedClickMessage = await test.step('Perform simple Click on Button', async () => {
			const expectedMessage = 'You have done a dynamic click';
			await page.getByText('Click Me', { exact: true }).click({ button: 'left' });
			return expectedMessage;
		});
		await test.step('Verify the message', async () => {
			const messageElement = page.locator('#dynamicClickMessage');
			await expect(messageElement).toHaveText(expectedClickMessage);
		});
	});
});
