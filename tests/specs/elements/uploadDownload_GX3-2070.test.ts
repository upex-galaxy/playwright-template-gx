import {story, precondition, test, expect} from "@TestBase"
import { UploadPage } from "@pages/IveUploadPage";

story ('Example Story: Upload a Download',()=>{
let uploadPage: UploadPage
precondition (async({page}) =>{
	uploadPage = new UploadPage(page);
 page.goto('/upload-download', { waitUntil: 'domcontentloaded' });

})
	test('GX3-2070 | TC1 : Should download a file', async ({ page }) => {
		const { downloadedFiles, downloadedFile } = await uploadPage.downLoadFile();
		console.log()
		expect(downloadedFiles.includes(downloadedFile)).toBeTruthy();
		
	

		});
	
	test('GX3-2070 | TC1 : Should upload a file', async ({ page }) => {
		await uploadPage.uploadFile('iveImage.jpg');
		const value = await uploadPage.uploadFileValue();
		console.log()
		expect(value).toContain('iveImage.jpg');
	});
})