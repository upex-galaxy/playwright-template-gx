import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {

	// environment variables which are set in globalSetup are only available inside test().
	const { example, jsonData } = process.env

	// FOO and BAR properties are populated.
	expect(example).toEqual('some data')

	const complexData = JSON.parse(jsonData)
	expect(complexData).toEqual({ some: 'data' })
})
