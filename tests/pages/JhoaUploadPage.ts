import { getFiles } from '@helper/testUtils';
import type { Page, Locator } from '@playwright/test';

export class UploadPageJhoa {
	page: Page;
	downloadButton: () => Locator;
	uploadButton: () => Locator;
	uploadFileValue: () => Promise<string>;

	constructor(driver: Page) {
		this.page = driver;
		this.downloadButton = () => this.page.locator('#downloadButton');
		this.uploadButton = () => this.page.locator('#uploadFile');
		this.uploadFileValue = async () => await this.uploadButton().inputValue();
	}

	async pressDownloadFile() {
		const downloadPromise = this.page.waitForEvent('download');
		await this.downloadButton().click();
		const download = await downloadPromise;

		const filename = download.suggestedFilename();
		await download.saveAs('tests/data/' + filename);
		const downloadedFiles = getFiles('tests/data');
		return { downloadedFiles, filename };
	}

	async pressUploadFile(dataFileName: string) {
		await this.uploadButton().setInputFiles(`tests/data/images/${dataFileName}`);

		//const promise = this.page.waitForEvent('filechooser');
		//await this.downloadButton().click();
		//onst filechooser = await promise;
		//filechooser.setFiles(`tests/data/images/${dataFileName}`);
	}
}