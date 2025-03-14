import type { Page, Locator } from '@playwright/test';
import { SuperPage } from './SuperPage';

export class PanelPage extends SuperPage {
	burgerMenuButton: Locator;
	menuPanel: Locator;
	allItemsOption: Locator;
	aboutOption: Locator;
	logoutOption: Locator;
	resetAppOption: Locator;
	cartButton: Locator;
	panelPopup: Locator;

	constructor(driver: Page) {
		super(driver);
		this.burgerMenuButton = this.page.locator('');
		this.menuPanel = this.page.locator('#menu_button_container');
		this.allItemsOption = this.menuPanel.getByText('All Items');
		this.aboutOption = this.menuPanel.getByText('About');
		this.logoutOption = this.menuPanel.getByText('Logout');
		this.resetAppOption = this.menuPanel.getByText('Reset App State');
		this.cartButton = this.page.locator('');
		this.panelPopup = this.popup.filter({ hasText: 'panel' });
	}

	async selectMenuOption(option: 'allItems' | 'about') {
		const menuOptions = {
			allItems: this.allItemsOption,
			about: this.aboutOption
		};
		await menuOptions[option].click();
	}

	async gotoCart() {
		await this.cartButton.click();
	}
}
