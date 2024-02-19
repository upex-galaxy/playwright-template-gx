import type { Locator } from '@playwright/test';

// para buscar de un array los valores ademas con el split busca : y muestra la segunda fila
export async function getRealValues(elementos: Locator) {
	const options = await elementos.allInnerTexts();
	const fixedValues = options.map(item => item.split(':')[1]);
	return fixedValues;
}
