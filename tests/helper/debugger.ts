import { Page, Locator } from '@playwright/test'
class Debugger {
	readonly page: Page

	constructor(driver: Page) {
		this.page = driver
	}

	async allElements(pageLocator: Locator) {
		await this.page.evaluate(() => console.log('Start Debugging in DevTool!'))
		// Imprimir TODOS los WebElement HTML en Array, por la Consola de la DevTool:
		await pageLocator.evaluateAll((elements) => {
      console.log(elements)
		})
	}
	async eachElement(pageLocator: Locator) {
		await this.page.evaluate(() => console.log('Start Debugging in DevTool!'))
		// Imprimir CADA WebElement HTML en Objeto, por la Consola de la DevTool:
		if ((await pageLocator.count()) > 1) {
			for (let item of await pageLocator.all()) {
				await item.evaluate((element) => {
					console.log(element)
				})
			}
		} else {
			// en caso de ser solo un WebElement:
			await pageLocator.evaluate((element) => {
				console.log(element)
			})
		}
	}
}

export { Debugger }
