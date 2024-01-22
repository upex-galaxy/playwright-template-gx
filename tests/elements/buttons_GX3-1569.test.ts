import { precondition, story, test  } from "@pages/TestBase";
import { expect } from "@playwright/test";


story('GX3-1569: ToolsQA | Elements | Buttons', () => {
    precondition(async ({ page }) => {
        await page.goto('/buttons', {waitUntil: "domcontentloaded"});
    })

    test('TC01: Should trigger when using Double click', async ({ page}) => { 
        const expectedDblClickMessage = await test.step('Perform bouble click on button', async () => {
            const expectedMessage = 'You have done a double click';
            await page.locator('#doubleClickBtn').dblclick();
            return expectedMessage;
        });

        await test.step('Verify the message', async () => {
            const messageElement = page.locator('#doubleClickMessage');
            await expect(messageElement).toHaveText(expectedDblClickMessage);
        });
    })

    test('TC02: Should trigger when using Rigth click', async ({ page}) => { 
        const expectedRigthClickMessage = await test.step('Perform right click on button', async () => {
            const expectedMessage = 'You have done a right click';
            await page.locator('#rightClickBtn').click({ button: 'right' });
            return expectedMessage
        });

        await test.step('Verify the message', async () => {
            const messageElement = page.locator('#rightClickMessage');
            await expect(messageElement).toHaveText(expectedRigthClickMessage);
        });
    })

    test('TC03: Should trigger when using Simple click', async ({ page}) => { 
        const expectedClickMessage = await test.step('Perform simple click on button', async () => {
            const expectedMessage = 'You have done a dynamic click';
            await page.getByText('Click Me', { exact: true }).click({button: 'left'});
            return expectedMessage
        });

        await test.step('Verify the message', async () => {
            const messageElement = page.locator('#dynamicClickMessage');
            await expect(messageElement).toHaveText(expectedClickMessage);
        });
    })

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