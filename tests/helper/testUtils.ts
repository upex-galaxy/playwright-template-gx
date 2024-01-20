
import type { Locator } from '@playwright/test';
import fs from 'fs';

export async function getRealValues(elementos: Locator) {
	const options = await elementos.allInnerTexts();
	const fixedValues = options.map((item) => item.split(':')[1]);
	return fixedValues;
}

export function getFiles(dirPath: string) {
	return fs.readdirSync(dirPath);
}

