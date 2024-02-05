import type { Locator, Page } from '@playwright/test';
import { getFiles } from '@helper/testUtils';

export class DownloadPage {
	page: Page;
	downloadBtn: () => Locator;
	uploadBtn: () => Locator;
	uploadFilePath: () => Promise<string>;

	constructor(driver: Page) {
		this.page = driver;
		this.downloadBtn = () => this.page.locator('#downloadButton');
		this.uploadBtn = () => this.page.locator('.form-control-file');
		this.uploadFilePath = async () => await this.uploadBtn().inputValue();
	}

	async downloadFile() {
		// la acción de 'descargar' :
		// antes de hacer el click, preparamos la promesa 'wait for event'
		//despues de hacer 'click' guardamos lo que se ha generado en una constante usando la promesa
		const promesaDownload = this.page.waitForEvent('download');
		await this.downloadBtn().click();
		const download = await promesaDownload;

		// guardar un nombre recomendado y luego guardar el archivo en una carpeta concreta (u) con el nombre sugerido
		const downloadedFile = download.suggestedFilename();
		await download.saveAs('tests/data/images' + downloadedFile);

		// crear un array de todos los archivos de la ubicación (u)
		const downloadsFolder = getFiles('tests/data/images');
		return { downloadsFolder, downloadedFile };
	}

	async uploadFile(fileName: string) {
		await this.uploadBtn().setInputFiles(`tests/data/images/${fileName}`);
	}
}
