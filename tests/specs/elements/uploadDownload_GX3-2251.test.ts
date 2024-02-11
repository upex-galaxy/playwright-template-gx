import { story, precondition, test, expect } from '@pages/TestBase';
import { UploadPageJhoa } from '@pages/JhoaUploadPage';

story('GX3-2250 | Tools QA | Element Upload and Download File', () => {
	let uploadPageJhoa : UploadPageJhoa;
	precondition (async ({ page }) => {
		uploadPageJhoa = new UploadPageJhoa(page); 
		await page.goto('/upload-download' , { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Should download a file successfully', async ({ page }) => {
		const { downloadedFiles, filename } = await uploadPageJhoa.pressDownloadFile();
		console.log(filename);
		expect(downloadedFiles.includes(filename)).toBeTruthy();
	});
	test('TC2: should upload a file successfully', async ({ page }) => {
		await uploadPageJhoa.pressUploadFile('guapucho.jpg');
		const value = await uploadPageJhoa.uploadFileValue();
		console.log(value);
		expect(value).toContain('guapucho.jpg');
	});
});