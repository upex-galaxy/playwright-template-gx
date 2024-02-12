import type { Locator } from '@playwright/test';
export { getRealValues };

async function getRealValues(elementos: Locator) {
	const options = await elementos.allInnerTexts();
	const fixedValues = options.map(item => item.split(':')[1]);
	return fixedValues;
}
