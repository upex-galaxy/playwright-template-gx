import type { Page } from '@playwright/test';

//* Este es un ejemplo de una clase SuperPage, que tiene elementos comunes y luego se hereda en cada POM.
export class ReactPage {
	page: Page;

	constructor(driver: Page) {
		this.page = driver;
	}

	getByReactTool(dataId: string, options?: { hasText: string }) {
		if (options) {
			return this.page.locator(`[data-react-toolbox=${dataId}]`, { hasText: options.hasText });
		} else {
			return this.page.locator(`[data-react-toolbox=${dataId}]`);
		}
	}
}
