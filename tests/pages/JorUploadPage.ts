import { getFiles } from '@helper/testUtils';
import type { Page, Locator } from '@playwright/test';

export class JorUploadPage {
	page: Page;
	downloadBtn: () => Locator;
	uploadFileBtn: () => Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.downloadBtn = () => this.page.locator('#downloadButton');
		this.uploadFileBtn = () => this.page.locator('#uploadFile');
	}

	// Methods

	async getUploadFileValue() {
		const value = await this.uploadFileBtn().inputValue();
		return value;
	}

	async downLoadFile() {
		const downloadPromise = this.page.waitForEvent('download');
		await this.downloadBtn().click();
		const download = await downloadPromise;

		const downloadedFile = download.suggestedFilename();
		await download.saveAs('tests/data/' + downloadedFile);

		const downloadedFiles = getFiles('tests/data');

		return { downloadedFiles, downloadedFile };
	}

	async uploadFile(dataFileName: string) {
		await this.uploadFileBtn().setInputFiles(`tests/data/images/${dataFileName}`);
	}
}
