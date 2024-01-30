import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';
// eslint-disable-next-line @typescript-eslint/naming-convention
import _ from 'lodash';

const overrides: PlaywrightTestConfig = {
	workers: 4,
	retries: 2,
	reporter: [
		['./tests/custom-reporter.ts'],
		['html', { outputFolder: 'test-html-report/edge', open: 'never' }],
		['junit', { outputFolder: 'test-junit-report', outputFile: 'test-junit-report/edge-importer-report.xml' }],
		['allure-playwright'],
	],
};

const merged = _.merge(config, overrides);
export default merged;