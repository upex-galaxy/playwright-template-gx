import { story, precondition, test } from '@pages/TestBase';
import { UploadPage } from '@pages/UploadPage';

story('GX3-2250 | Tools QA | Element Upload and Download File', () => {
	let uploadPage : UploadPage;
	precondition (async ({ page }) => {
		uploadPage = new UploadPage(page); 
		await page.goto('/upload-download' , { waitUntil: 'domcontentloaded' });
	});

	test('TC1: Should download a file successfully', async ({ page }) => {

	});
	test('should upload a file successfully', async ({ page }) => {

	});
});