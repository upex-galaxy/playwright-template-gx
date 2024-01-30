/* eslint-disable @typescript-eslint/no-unused-vars */
import { story, precondition, test, expect } from '@TestBase';
import { JorUploadPage } from '@pages/JorUploadPage';

story('GX3-1561 | ToolsQA | Elements | Upload and Download', () => {
	let uploadPage: JorUploadPage;
	precondition('User should be situated in the website', async ({ page }) => {
		
		uploadPage = new JorUploadPage(page);  
		await page.goto('/upload-download', { waitUntil: 'domcontentloaded' });
	});
	
	test('GX3-1561 | TC1 : Should download a file', async ({ page }) => {
		const { downloadedFiles, downloadedFile } = await uploadPage.downLoadFile();
		expect(downloadedFiles.includes(downloadedFile)).toBeTruthy();
	});
	test('GX3-1561 | TC1 : Should upload a file', async ({ page }) => {
		await uploadPage.uploadFile('jorImage.png');
		const value = await uploadPage.getUploadFileValue();
		expect(value).toContain('jorImage.png');
	});
});