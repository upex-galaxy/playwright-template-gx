import { story, precondition, test, expect } from '@TestBase';
import { DownloadPage } from '@pages/JuliUploadPage';


story('GX3-n: Download and Upload File', () => {
	let downloadPage: DownloadPage;

	precondition('Must be situated on download-upload file web page', async ({ page }) => {
		downloadPage = new DownloadPage(page);
		await page.goto('/upload-download', { waitUntil: 'domcontentloaded' });
	});


	test('TC1: Shold download a file', async () => {
		const { downloadsFolder, downloadedFile } = await downloadPage.downloadFile();
		expect(downloadsFolder.includes(downloadedFile)).toBeTruthy;
	});
});