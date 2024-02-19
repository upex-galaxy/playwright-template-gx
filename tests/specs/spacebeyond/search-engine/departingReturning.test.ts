import { story, precondition, test, expect } from '@pages/TestBase';

story('[GX3-2194] Datepicker | Buscar destino por fecha y grupo de pasajeros', () => {

	precondition(async ({ loginPage } ) => {
		await loginPage.loginSuccess();
	});

	test('TC1: Buscar destino por fecha de Salida y Retorno', async ({ searchPage }) => {
		await expect(searchPage.searchPanel()).toBeVisible();
		await searchPage.openDatePicker('Departing');

		const selectedMonth = await searchPage.selectMonth('October');
		console.log('Selected Month:', selectedMonth);
	});
});

