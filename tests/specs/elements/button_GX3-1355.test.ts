import { story, precondition, test } from '@TestBase'
import { expect } from "@playwright/test";

story('GX3-1355:TollsQA | Elements | Buttons', () => {
    precondition(async ({ page }) => {
        await page.goto('/buttons');
    });
    test('TC1:validar boton doble click', async ({ page }) => {

        const expectedmessage = 'You have done a double click';



        
        await page.locator('#doubleClickBtn').dblclick();

    const messageElemt = page.locator('#doubleClickMessage');
    await expect(messageElemt).toHaveText(expectedmessage);


});

    test('TC2:validar boton right click', async ({ page }) => {


        const Rightlickbutton = page.locator('#rightClickBtn');
        const expectedmessage = 'You have done a right click';

            await Rightlickbutton.click({ button: 'right' });
            const messageElemt = page.locator('#rightClickMessage');
            await expect(messageElemt).toHaveText(expectedmessage);
});


    test('TC3:validar boton simple', async ({ page }) => {
       await page.getByText('Click Me', { exact: true }).click();
        const expectedmessage = 'You have done a dynamic click';

 
            const messageElemt = page.locator('#dynamicClickMessage');
            await expect(messageElemt).toHaveText(expectedmessage);
       
    });

});
