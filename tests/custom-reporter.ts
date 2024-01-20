/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult, TestStep } from '@playwright/test/reporter';

class MyReporter implements Reporter {
	private startTime: number;
	private endTime: number;
	private testResults: testAttr[];
	private retryCount: number;
	private totalRetries: number;
	private runningTests: TestCase[];
	private parallelTests: boolean;
	private totalTests: number;
	private runningTestCase: TestCase;
	private testNumber: number;

	constructor() {
		this.startTime = 0;
		this.endTime = 0;
		this.testResults = [];
		this.retryCount = 0;
		this.totalTests = 0;
		this.totalRetries = 0;
		this.runningTests = [];
		this.parallelTests = false;
	}

	onBegin(config: FullConfig, suite: Suite) {
		this.startTime = Date.now();
		this.totalTests = suite.allTests().length;
		this.parallelTests = config.workers > 1 ? true : false;
		const allTests = suite.allTests();
		this.runningTests = allTests;
		const usedWorkers = config.workers === 1 ? '1 worker' : `${config.workers} workers`;
		console.log('\n', `🎬 Total Tests to Run: ${allTests.length} TC using ${usedWorkers}`);
		if (suite.suites.length === 1) {
			const usedProject = suite.suites[0].title;
			console.log('\x1b[32m%s\x1b[0m', `🚀 Starting Test Execution in ${usedProject.toUpperCase()}...`);
		} else {
			const projectNames = suite.suites.map(({ title }) => title);
			console.log('\x1b[32m%s\x1b[0m', `🚀 Starting Test Execution in ${projectNames.join(', ').toUpperCase()}...`);
		}
	}

	onTestBegin(test: TestCase) {
		this.totalRetries = test.retries; // 2
		this.runningTestCase = this.runningTests.find(({ id }) => id === test.id);
		const testNumber = this.runningTests.indexOf(this.runningTestCase) + 1;
		let testWorker = '';
		if (this.parallelTests) testWorker = ` (worker: ${test.results[0].workerIndex + 1})`;
		if (test.expectedStatus === 'skipped') {
			console.log('\n\x1b[90m%s\x1b[0m', `🔧${testWorker} Skipped Test [${testNumber}/${this.totalTests}] => ${this.runningTestCase.title}`);
		} else {
			const testRetry = this.runningTestCase.results[0].retry;
			if (testRetry === 0)
				console.log(
					'\n\x1b[34m%s\x1b[0m',
					`🧪${testWorker} Running Test [${testNumber}/${this.totalTests}] => ${this.runningTestCase.title}`
				);
			if (testRetry >= 1) {
				console.log(
					'\n\x1b[34m%s\x1b[0m',
					`🧪${testWorker} Running Test [${testNumber}/${this.totalTests}] => ${this.runningTestCase.title}`,
					`💫 Retry #${testRetry}`
				);
			}
		}
		const testData = {
			testID: test.id,
			testNumber: testNumber,
			testName: test.title,
			testWorker: testWorker,
		};
		this.testResults.push(testData);
	}

	onStepBegin(test: TestCase, result: TestResult, step: TestStep) {
		const testName = this.parallelTests ? ` -- ${test.title}` : '';
		test.expectedStatus;
		result.status;
		if (step.category === 'test.step') {
			console.group();
			console.log('\x1b[37m%s\x1b[0m', `---- ✓ ${step.title}${testName}`);
		}
	}

	onStepEnd(test: TestCase, result: TestResult, step: TestStep) {
		const testRun = this.testResults.find(({ testID }) => testID === test.id);
		const testRunNumber = `[${testRun.testNumber}/${this.totalTests}]`;
		const testName = this.parallelTests ? ` -- ${testRunNumber}${test.title}` : '';
		test.expectedStatus;
		if (step.category === 'test.step') {
			console.group();
			if (step.error) {
				console.log('\x1b[31m%s\x1b[0m', `---- step failed 🔴 [${step.duration}ms]${testName}`);
				if (step.error?.location) console.log('\x1b[31m%s\x1b[0m', '---- 🔎 Located in:', step.error?.location);
				if (step.error?.snippet) {
					console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Snippet:');
					console.log(step.error?.snippet);
				}
				if (step.error?.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error:', step.error?.message);
				console.log('\x1b[31m%s\x1b[0m', '---- ✔️ File:', step.titlePath()[2]);
			} else {
				console.log('\x1b[32m%s\x1b[0m', `---- step passed ✅ [${step.duration}ms]${testName}`);
			}
			console.groupEnd();
			console.groupEnd();
		}
	}

	onTestEnd(test: TestCase, result: TestResult) {
		const testRun = this.testResults.find(({ testID }) => testID === test.id);
		const testRunNumber = `[${testRun.testNumber}/${this.totalTests}]`;
		const testName = this.parallelTests ? ` -- ${testRunNumber}${test.title}` : '';
		console.group();
		if (result.status === 'passed') {
			console.log('\x1b[32m%s\x1b[0m', `---- 🔎 Test Output: ✅ PASSED${testName}`);
			this.retryCount = 0;
		}
		if (result.status === 'failed') {
			console.log('\x1b[31m%s\x1b[0m', `---- 🔎 Test Output: ❌ FAILED${testName}`);
			if (result.error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error:', result.error?.message);
			if (result.error?.value) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Value:', result.error?.value);
			if (result.error?.snippet) {
				console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Snippet:');
				console.group();
				console.log(result.error?.snippet);
				console.groupEnd();
			}
			if (result.error?.location) console.log('\x1b[31m%s\x1b[0m', '---- 🔎 Located in:', result.error?.location);
			if (test.titlePath()[2]) console.log('\x1b[31m%s\x1b[0m', '---- ✔️ File:', test.titlePath()[2]);
			this.retryCount = result.retry + 1;
			if (this.retryCount > this.totalRetries) this.retryCount = 0; // maximum retries reached, reset retry count
		}
		if (result.status === 'timedOut') {
			console.log('\x1b[31m%s\x1b[0m', `---- 🔎 Test Output: ⏱️ TimedOut${testName}`);
			if (result.error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error:', result.error?.message);
			if (result.error?.value) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Value:', result.error?.value);
			if (result.error?.snippet) {
				console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Snippet:');
				console.group();
				console.log(result.error?.snippet);
				console.groupEnd();
			}
			if (result.error?.location) console.log('\x1b[31m%s\x1b[0m', '---- 🔎 Located in:', result.error?.location);
			if (test.titlePath()[2]) console.log('\x1b[31m%s\x1b[0m', '---- ✔️ File:', test.titlePath()[2]);
			this.retryCount = result.retry + 1;
			if (this.retryCount > this.totalRetries) this.retryCount = 0; // maximum retries reached, reset retry count
		}
		if (result.status === 'interrupted') {
			console.log('\x1b[31m%s\x1b[0m', `---- 🔎 Test Output: ⏱⚠️ INTERRUPTED${testName}`);
			if (result.error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error:', result.error?.message);
			if (result.error?.value) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Value:', result.error?.value);
			if (result.error?.snippet) {
				console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Snippet:');
				console.group();
				console.log(result.error?.snippet);
				console.groupEnd();
			}
			if (result.error?.location) console.log('\x1b[31m%s\x1b[0m', '---- 🔎 Located in:', result.error?.location);
			if (test.titlePath()[2]) console.log('\x1b[31m%s\x1b[0m', '---- ✔️ File:', test.titlePath()[2]);
			this.retryCount = result.retry + 1;
			if (this.retryCount > this.totalRetries) this.retryCount = 0; // maximum retries reached, reset retry count
		}
		console.groupEnd();
		//* Update testData:
		const index = this.testResults.indexOf(testRun);
		this.testResults[index].testStatus = result.status;
		this.testResults[index].testDuration = result.duration;
	}

	onStdOut(chunk: string | Buffer, test: void | TestCase, result: void | TestResult) {
		console.group();
		if (this.runningTests.length === 1) console.log(chunk);
		if (result && result.errors?.length > 0) console.log(result.errors);
		console.groupEnd();
	}

	onStdErr(chunk: string | Buffer, test: void | TestCase, result: void | TestResult): void {
		console.group();
		console.log(chunk);
		if (result && result.errors?.length > 0) console.log(result.errors);
		console.groupEnd();
	}

	onError(error: TestError): void {
		console.group();
		if (error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 For Test:', error.message);
		if (error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error Exception:', error.message);
		if (error.location) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error Location:', error.location);
		if (error.value) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error Value:', error.value);
		if (error.message) console.log('\x1b[31m%s\x1b[0m', '---- 🔴 Error Snippet:', error.snippet);
		console.groupEnd();
	}

	onEnd(result: FullResult) {
		this.endTime = Date.now();
		const duration = (this.endTime - this.startTime) / 1000;
		const allTestsPassed = ' ALL TESTS PASSED ';
		const executionFailed = ' EXECUTION FAILED - there is one or more failed tests ';
		const timedOut = ' TIMEDOUT - execution run out of time ';
		const interrupted = ' INTERRUPTED - execution was interrupted ';
		const results = {
			passed: allTestsPassed,
			failed: executionFailed,
			timedOut: timedOut,
			interrupted: interrupted,
		};
		console.log('\n\x1b[43m\x1b[30m%s\x1b[0m', '📊 TEST REPORT SUMMARY:', '\n');
		console.group();
		this.testResults.forEach((test) => {
			const durationDecimal = (test.testDuration = test.testDuration / 1000);
			if (test.testStatus === 'passed')
				console.log('\x1b[32m%s\x1b[0m', test.testStatus, '✅', test.testNumber, '🧪', test.testName, durationDecimal, 's');
			if (test.testStatus === 'failed')
				console.log('\x1b[31m%s\x1b[0m', test.testStatus, '❌', test.testNumber, '🧪', test.testName, durationDecimal, 's');
			if (test.testStatus === 'timedOut')
				console.log('\x1b[31m%s\x1b[0m', test.testStatus, '⌛', test.testNumber, '🧪', test.testName, durationDecimal, 's');
			if (test.testStatus === 'interrupted')
				console.log('\x1b[31m%s\x1b[0m', test.testStatus, '⚠️', test.testNumber, '🧪', test.testName, durationDecimal, 's');
		});
		console.groupEnd();
		console.log('\n\x1b[1m\x1b[0m', '⏰ Test Execution Ended in', parseFloat(duration.toFixed(2)), 'seconds.');
		const allTestOutput = results[result.status];
		if (allTestOutput === allTestsPassed) {
			console.log('\x1b[1m\x1b[37m%s\x1b[0m\x1b[30m\x1b[102m%s\x1b[0m', '🚀 Overall Output: ✅ ', allTestOutput);
		}
		if (allTestOutput === executionFailed) {
			console.log('\x1b[1m\x1b[37m%s\x1b[0m\x1b[1m\x1b[37m\x1b[41m%s\x1b[0m', '🚀 Overall Output: 🔴 ', allTestOutput);
		}
		if (allTestOutput === timedOut) {
			console.log('\x1b[1m\x1b[37m%s\x1b[0m\x1b[1m\x1b[37m\x1b[41m%s\x1b[0m', '🚀 Overall Output: ⏱️ ', allTestOutput);
		}
		if (allTestOutput === interrupted) {
			console.log('\x1b[1m\x1b[37m%s\x1b[0m\x1b[1m\x1b[37m\x1b[41m%s\x1b[0m', '🚀 Overall Output: ⚠️ ', allTestOutput);
		}
		console.log('\x1b[0m');
	}
	// onExit(): Promise<void> {
	// }
}

export default MyReporter;

type testAttr = {
	testID: string;
	testNumber: number;
	testName: string;
	testStatus?: string;
	testDuration?: number;
};
