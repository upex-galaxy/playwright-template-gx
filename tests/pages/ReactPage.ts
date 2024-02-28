import type { Page } from '@playwright/test';

export class ReactPage {
	page: Page;

	constructor(driver: Page) {
		this.page = driver;
	}

	getByReactTool(dataId: string, options?: { hasText: string }) {
		if (options) return this.page.locator(`[data-react-toolbox=${dataId}]`, options);
		else return this.page.locator(`[data-react-toolbox=${dataId}]`);
	}
}
