import { story, precondition, test, expect } from '@TestBase';
import { UploadPage } from '@pages/UploadPage';

story('Example Story: Upload and Download', () => {
	let uploadPage: UploadPage;
	precondition(async ({ page }) => {
		uploadPage = new UploadPage(page);
		page.goto('/upload-download', { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Should download a file', async ({ page }) => {
		const { downloadedFiles, downloadedFile } = await uploadPage.downloadFile();
		console.log('🎭️downloadedFiles:', downloadedFiles);
		expect(downloadedFiles.includes(downloadedFile)).toBeTruthy();
	});

	test('TC2: Should upload a file', async ({ page }) => {
		await uploadPage.uploadFile('guapucho.jpg');
		const value = await uploadPage.uploadFileValue();
		console.log('🎭️uploadedFile Value:', value);
		expect(value).toContain('guapucho.jpg');
	});
});
