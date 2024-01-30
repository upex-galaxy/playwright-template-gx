import { story, test, expect } from '@pages/TestBase';
import * as dotenv from 'dotenv';
dotenv.config();

story('Create a Card by Trello API', () => {

	test('Should create a Card', async ({ apiBoards }) => {
		const givenBoardID = '65b84d7b847b7e3641a458ad';
		const response = await apiBoards.getBoard(givenBoardID);
		console.log('Created Board', response);
		expect(response.name).toEqual('Example');
	});
});