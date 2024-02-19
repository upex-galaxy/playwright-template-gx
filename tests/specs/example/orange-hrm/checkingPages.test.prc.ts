import { story, test, precondition, expect } from '@pages/TestBase';

story('GX3-999: OrangeHRM - Checking Pages', async () => {

	precondition( async ({ page }) => {
		await page.goto('https://opensource-demo.orangehrmlive.com/');
		expect(page.url()).toContain('dashboard/index');	
	});

	test('Going to admin/viewSystemUsers', async ({ page }) => {
		await page.locator('.oxd-main-menu-item').getByText('Admin', { exact: true }).click();
		expect(page.url()).toContain('admin/viewSystemUsers');
	});

	test('Going to pim/viewEmployeeList', async ({ page }) => {
		await page.locator('.oxd-main-menu-item').getByText('PIM', { exact: true }).click();
		expect(page.url()).toContain('pim/viewEmployeeList');
	});

	test('Going to buzz/viewBuzz', async ({ page }) => {
		await page.locator('.oxd-main-menu-item').getByText('Buzz', { exact: true }).click();
		expect(page.url()).toContain('buzz/viewBuzz');
	});
});