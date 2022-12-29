const { Given, When, Then } = require('@cucumber/cucumber')
const { test, expect } = require('@playwright/test')

Given('tester has access to upex workspace', async () => {
	// Write code here that turns the phrase above into concrete actions
	await expect(1).toEqual(1)
})
When('tester run a {string} plus the project url on the terminal', async (gitClone)=> {
	// Write code here that turns the phrase above into concrete actions
	await expect(gitClone).toEqual("git clone")
})
Then('the project repo should be pulled to the tester directory as expected.',async ()=> {
	// Write code here that turns the phrase above into concrete actions
	await expect(1).toEqual(1)
})
