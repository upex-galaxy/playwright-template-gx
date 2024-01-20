import { getFiles } from '@helper/testUtils';
import type { Page, Locator } from '@playwright/test';

export class UploadPage {
	page: Page;
	downloadButton: () => Locator;
	uploadFileButton: () => Locator;
	uploadFileValue: () => Promise<string>;

	constructor(driver: Page) {
		this.page = driver;
		this.downloadButton = () => this.page.locator('#downloadButton');
		this.uploadFileButton = () => this.page.locator('#uploadFile');
		this.uploadFileValue = async () => await this.uploadFileButton().inputValue();
	}

	async downloadFile() {
		const downloadPromise = this.page.waitForEvent('download');
		await this.downloadButton().click();
		const download = await downloadPromise;

		const downloadedFile = download.suggestedFilename();
		await download.saveAs('tests/data/' + downloadedFile);

		const downloadedFiles = getFiles('tests/data');

		return { downloadedFiles, downloadedFile };
	}

	async uploadFile(dataFileName: string) {
		// Metodo #1:
		await this.uploadFileButton().setInputFiles(`tests/data/images/${dataFileName}`);
		// Metodo #2:
		// const promise = this.page.waitForEvent('filechooser');
		// await this.downloadButton().click();
		// const fileChooser = await promise;
		// fileChooser.setFiles(`tests/data/images/${dataFileName}`);
	}
}
