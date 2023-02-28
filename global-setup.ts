import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	process.env.example = 'some data';
	// Or a more complicated data structure as JSON:
	process.env.jsonData = JSON.stringify({ some: 'data' });
}

export default globalSetup;
