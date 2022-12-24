const { test, expect } = require('@playwright/test')

test.describe('feature code',()=>{
    const {url} = process.env.coderbyte

    test('test',async ({page})=>{
        await page.goto(url)

        
    })
})