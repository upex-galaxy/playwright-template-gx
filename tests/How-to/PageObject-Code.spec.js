const { test, expect } = require('@playwright/test')
const {SignUp} = require('../../pages')

test.describe('feature code',()=>{
    const {url} = process.env.coderbyte

    test('test',async ({page})=>{
        await page.goto(url)

        
    })
});