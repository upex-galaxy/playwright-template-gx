import { story, precondition, test, expect } from '@TestBase';
import  data from '@data/iveUserDetails.json' assert { type: 'json' };
import {getRealValues} from '@helper/IvetestUtils';
import type { simpleForm } from '@type/inputTypes'; // tipado la importanción con type 

story('GX3-1921: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	precondition(async ({ page }) => {
		await page.goto('/text-box', { waitUntil: 'domcontentloaded' });
	});

    test('GX3-1921 |TC1: Should fill the form and submit', async ({ page }) => {
        
        const usernameInput = page.locator('#userName-wrapper input');
        const emailInput = page.locator('#userEmail-wrapper input');
        const currentAddressInput = page.locator('#currentAddress-wrapper textarea');
        const permanentAddressInput = page.locator('#permanentAddress-wrapper textarea');
    
        // Se crea interfaces 
 
        const expectedName = await test.step('Fill the username', async () => {
            const name=data[ 0 ].fullName
            await usernameInput.fill(name); // permite ingresaar info,  escibre y luego limpia 
            return name;
        });
        const expectedEmail=await test.step('Fill the email', async () => {
            const email=data[0].email
            await emailInput.fill(email);
            return email;
        });
        const expectedCuAddress= await test.step('Fill the current Address', async () => {
            const address =data[ 0 ].currentAddress
            await currentAddressInput.fill(address);
            return address
        });
        const expectedPerAddress= await test.step('Fill the permanent Permanent Address', async () => {
            const permanent=data[ 0 ].permanentAddress
            await permanentAddressInput.fill(permanent);
            return permanent;
        });
        // seleccionar por texto
       
        await test.step('Submit the form', async () => {
            await page.locator('button', { hasText: 'Submit' }).click();
             await expect(page.locator('#output')).toBeVisible();
           
        });

        await test.step('Verify the output', async () => { 
            const displayValues = page.locator('#output p')
            const values = await getRealValues(displayValues)
            const expectValues = [expectedName, expectedEmail, expectedCuAddress, expectedPerAddress]
            //   console.log(values);
            expect(values).toEqual(expectValues)
          
         })
        
       
   
    });

        test('GX3-1921 | TC2: Should re-fill forms whith diferent data', async ({ page }) => {
        
        const usernameInput = page.locator('#userName-wrapper input');
        const emailInput = page.locator('#userEmail-wrapper input');
        const currentAddressInput = page.locator('#currentAddress-wrapper textarea');
        const permanentAdressInput = page.locator('#permanentAddress-wrapper textarea');
    
           async  function fillForm(datos:simpleForm)         
            { 
            await usernameInput.fill(datos.fullName);
            await emailInput.fill(datos.email);
            await currentAddressInput.fill(datos.currentAddress);
            await permanentAdressInput.fill(datos.permanentAddress);
                
             }
             for (const credencials of data) { 
                 await fillForm(credencials);
                await page.waitForTimeout(1000)
                await page.locator('button', { hasText: 'Submit' }).click();
            } 
        
      
    });

});
