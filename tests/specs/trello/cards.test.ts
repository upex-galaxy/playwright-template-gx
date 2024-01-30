import { story, precondition, test, expect } from "@pages/TestBase";
import * as dotenv from 'dotenv';
dotenv.config();

story('Create a Card', () => {

    test('Should create a Card', async ({ apiBoards }) => {
        const response = await apiBoards.getBoard('65b84d7b847b7e3641a458ad')
        console.log('Created Board', response)
        expect(response.name).toEqual('Example')
     })
})