const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../pages/Login.Page')

test.describe('Test Suite', () => {

    test.beforeEach(async ({page})=>{
        await page.goto('https://demo.testim.io/')
		await page.locator('text="Log in"').click()
		expect(page.url()).toContain('login')
    })
	test('TC1', async ({ page }) => {
        const login = new LoginPage(page)

		await login.enterUsername('UPEX')
		await login.enterPassword('123456')
		await login.submitLogin()
	})
})
