import { Page, Locator } from '@playwright/test';

export class ChallengesLPage {
	page: Page;
	freeChallengeItem: Locator;
	premiumChallengeItem: Locator;
	freeChallengeTitle: Locator;
	premiumChallengeTitle: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.premiumChallengeItem = this.page.locator('[class*=challenge-wrap-free]');
		this.freeChallengeItem = this.page.locator('[class*=challenge-wrap]:not([class*=free])');
		// Challenge Properties:
		this.premiumChallengeTitle = this.premiumChallengeItem.locator('[class*=title] a');
		this.freeChallengeTitle = this.freeChallengeItem.locator('[class*=title] a');
	}

	async selectFreeChallenge(option: number) {
		await this.freeChallengeTitle.nth(option).click();
	}
	async selectPremiumChallenge(option: number) {
		await this.premiumChallengeTitle.nth(option).click();
	}
}
