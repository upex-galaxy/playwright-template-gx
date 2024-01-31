import { story, precondition, test, expect } from '@TestBase';
import { DownloadPage } from '@pages/JuliUploadPage';


story('GX3-1901: Download and Upload File', () => {
	let downloadPage: DownloadPage;

	precondition('Must be situated on download-upload file web page', async ({ page }) => {
		downloadPage = new DownloadPage(page);
		await page.goto('/upload-download', { waitUntil: 'domcontentloaded' });
	});


	test('TC1: Should download a file', async () => {
		const { downloadsFolder, downloadedFile } = await downloadPage.downloadFile();
		expect(downloadsFolder.includes(downloadedFile)).toBeTruthy;
	});
	test('TC2: Should upload a file', async () => {
		await downloadPage.uploadFile('cheatSheet.png');
		const displayedPath = await downloadPage.uploadFilePath();
		console.log('Uploaded File Path is:', displayedPath);
		expect(displayedPath).toContain('cheatSheet.png');
	});
});