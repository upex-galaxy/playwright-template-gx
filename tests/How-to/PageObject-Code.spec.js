import { test, expect } from '@playwright/test'
import { SignUp } from '@pages/SignUp.Page.js'

test.describe('Feature Sign-UP (multiple test cases)', () => {
	const {url} = process.env;
	console.log(url)

	test.beforeEach(async ({ page }) => {
		await page.goto(url)
	})

	test('Validate Sign-Up Email Error-Message is triggered when email is invalid', async ({ page }) => {
		const then = new SignUp(page)

        await then.enterUsername("testExample")

        await then.enterEmail(".com")

        await then.enterPassword("12345")

        await then.clickCreateAccount()

		const error = then.errorMessage()

		// Expected Result:
		await expect(error).toBeVisible()
		await expect(error).toContainText("Please enter in a valid email address.")
	})
	test('Validate Sign-Up Existing Username Message is triggered when username exists', async ({ page }) => {
		const then = new SignUp(page)

        await then.enterUsername("Saitest")

        await then.enterEmail("upex@gmail.com")

        await then.enterPassword("12345")

        await then.clickCreateAccount()

		const error = then.errorMessage()

		// Expected Result:
		await expect(error).toBeVisible()
		await expect(error).toContainText("Please change your username.")
	})
	test('Validate Sign-Up Password Range Rule is triggered when Password is less than 5 characters in length', async ({ page }) => {
		const then = new SignUp(page)

        await then.enterUsername("errorPassword99")

        await then.enterEmail("errorpassword@gmail.com")

        await then.enterPassword("1234") 
		// Password should have at least 5 characters or more. -- This Should Trigger the rule
        await then.clickCreateAccount()

		const error = then.errorMessage()

		// Expected Result:
		await expect(error).toBeVisible()
		await expect(error).toContainText("Password must be at least 5 characters.")
	})
})
