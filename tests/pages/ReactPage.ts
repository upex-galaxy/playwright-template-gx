import type { Page } from '@playwright/test';

export class ReactPage {
	page: Page;

	constructor(driver: Page) {
		this.page = driver;
	}

	getByReactTool(dataId: string, page: Page, options?: { hasText: string }) {
		if (options) {
			return this.page.locator(`[data-react-toolbox=${dataId}]`, { hasText: options.hasText });
		} else {
			return this.page.locator(`[data-react-toolbox=${dataId}]`);
		}
	}
}
