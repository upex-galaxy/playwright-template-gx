import { test, expect } from '@playwright/test'
import { Debugger } from '@helper/debugger'
test.describe('UserStory:aquí se escribe el título de la User Story', () => {
	// Precondición: Aquí empiezas escribiendo una Precondición o más
	test.beforeEach(async ({ page }) => {
		await page.goto('https://demo.playwright.dev/todomvc')
	})

	test('<testSuiteID> | TC#1: <Aquí puedes escribir un Caso de Prueba>', async ({ page }) => {
		const todoInput = page.locator('.new-todo')
		await todoInput.fill('Playwright Testing')
		await todoInput.press('Enter')
	})
	test.only('testSuiteID | TC#2: otro Caso de Prueba', async ({ page }) => {
        const debug = new Debugger(page);
		const firstItem = 'Playwright Testing'
		const secondItem = 'Cypress Testing'
		const todoInput = page.locator('.new-todo')
		await todoInput.fill(firstItem)
		await todoInput.press('Enter')
		await todoInput.fill(secondItem)
		await todoInput.press('Enter')

		const TodoItem = page.locator('[data-testid="todo-item"] .view').getByText(firstItem)

        const itemCheckbox = TodoItem.locator('xpath=..').getByRole('checkbox')
        const debugCheckbox = itemCheckbox.evaluate($i => $i.outerHTML)
        console.log(debugCheckbox)
        await debug.eachElement(itemCheckbox)
        await itemCheckbox.check()
        expect(itemCheckbox.isChecked).toBeTruthy()
	})
})
