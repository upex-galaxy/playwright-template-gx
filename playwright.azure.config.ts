import { type PlaywrightTestConfig } from '@playwright/test';
import config from './playwright.config';
import type { AzureReporterOptions } from '@alex_neo/playwright-azure-reporter/dist/playwright-azure-reporter';
import type { TestPoint } from 'azure-devops-node-api/interfaces/TestInterfaces';
import type { TestCase } from '@playwright/test/reporter';
// eslint-disable-next-line @typescript-eslint/naming-convention
import _ from 'lodash';

const overrides: PlaywrightTestConfig = {
	workers: 1,
	retries: 1,
	reporter: [
		['./tests/custom-reporter.ts'],
		['@alex_neo/playwright-azure-reporter',
			{
				orgUrl: 'https://dev.azure.com/upexblackhole',
				token: process.env.AZURE_TOKEN,
				planId: 6,
				projectName: 'AutomationBlackhole',
				environment: 'QA',
				logging: true,
				testRunTitle: 'Playwright Test Run',
				publishTestResultsMode: 'testRun',
				uploadAttachments: true,
				attachmentsType: ['screenshot', 'video', 'trace'],
				testRunConfig: {
					comment: 'Playwright Test Run',
					// the configuration ids of this test run, use
					// https://dev.azure.com/{organization}/{project}/_apis/test/configurations to get the ids of  your project.
					// if multiple configuration ids are used in one run a testPointMapper should be used to pick the correct one,
					// otherwise the results are pushed to all.
					configurationIds: [1,3,4,5],
				},
				testPointMapper: async (testCase: TestCase, testPoints: TestPoint[]) => {
					switch(testCase.parent.project()?.name) {
						case 'chromium':
							return testPoints.filter((testPoint) => testPoint.configuration.id === '1');
						case 'firefox':
							return testPoints.filter((testPoint) => testPoint.configuration.id === '3');
						case 'edge':
							return testPoints.filter((testPoint) => testPoint.configuration.id === '4');
						case 'iphone':
							return testPoints.filter((testPoint) => testPoint.configuration.id === '5');
						default:
							throw new Error('invalid test configuration!');
					}
				}
			} as AzureReporterOptions,
		],
		['junit', { outputFolder: 'test-junit-report', outputFile: 'test-junit-report/chrome-importer-report.xml' }],
	],
};

const merged = _.merge(config, overrides);
export default merged;