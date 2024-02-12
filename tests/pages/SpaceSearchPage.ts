import { expect, type Page, type Locator } from '@playwright/test';

export class SpaceSearchPage {
	page: Page;
	searchPanel: () => Locator;
	datePicker: (option?: 'Departing' | 'Returning' | undefined) => Locator;
	departingPickerInput: () => Locator;
	returningPickerInput: () => Locator;
	dropdownOptions: (option?: 'Adults' | 'Children' | undefined) => Locator;
	adultsPickerInput: () => Locator;
	childrenPickerInput: () => Locator;
	adultsPickerOptions: () => Locator;
	childrenPickerOptions: () => Locator;
	datePickerPopup: () => Locator;
	dateCalendar: () => Locator;
	monthLeftSelector: () => Locator;
	monthRightSelector: () => Locator;
	monthTitle: () => Locator;
	daySelector: () => Locator;
	yearButton: () => Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.searchPanel = () => this.page.locator('section[class*=Hero]');
		this.datePicker = (option?: 'Departing' | 'Returning' | undefined) =>
			this.page.locator('[data-react-toolbox=date-picker]', { hasText: option });
		this.departingPickerInput = () => this.datePicker('Departing').locator('input');
		this.returningPickerInput = () => this.datePicker('Returning').locator('input');
		this.dropdownOptions = (option?: 'Adults' | 'Children' | undefined) =>
			this.page.locator('[data-react-toolbox=dropdown]', { hasText: option });
		this.adultsPickerInput = () => this.dropdownOptions('Adults').locator('input');
		this.adultsPickerOptions = () => this.dropdownOptions('Adults').locator('ul');
		this.childrenPickerInput = () => this.dropdownOptions('Children').locator('input');
		this.childrenPickerOptions = () => this.dropdownOptions('Children').locator('ul');
		this.datePickerPopup = () => this.page.locator('[data-react-toolbox=dialog]');
		this.dateCalendar = () => this.datePickerPopup().locator('[data-react-toolbox=calendar]');
		this.monthTitle = () => this.dateCalendar().locator('[class*=title]');
		this.monthLeftSelector = () => this.dateCalendar().locator('button#left');
		this.monthRightSelector = () => this.dateCalendar().locator('button#right');
		this.daySelector = () => this.dateCalendar().locator('[data-react-toolbox="day"]:not([class*=disabled])'); // Only available Days
		this.yearButton = () => this.datePickerPopup().locator('button#years');
	}

	async openDatePicker(option?: 'Departing' | 'Returning') {
		await this.datePicker(option).click();
		await this.page.waitForTimeout(1000);
		await expect(this.datePickerPopup()).toBeVisible();
	}

	async selectMonth(
		monthToSelect?:
			| 'January'
			| 'February'
			| 'March'
			| 'April'
			| 'May'
			| 'June'
			| 'July'
			| 'August'
			| 'September'
			| 'October'
			| 'November'
			| 'December'
	) {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		if (monthToSelect) {
			const actualMonth = await this.monthTitle().innerText();
			if (actualMonth.includes(monthToSelect)) {
				return;
			} else {
				const selectedMonth = months.indexOf(actualMonth.split(' ')[0]);
				const leftMonths = months.slice(0, selectedMonth);
				const rightMonths = months.slice(selectedMonth + 1);
				if (leftMonths.includes(monthToSelect)) {
					const wantedMonthIndex = leftMonths.indexOf(monthToSelect);
					const nextMonths = leftMonths.slice(wantedMonthIndex).length;
					await this.monthLeftSelector().click({ clickCount: nextMonths, delay: 500 });
					await this.page.waitForTimeout(1000);
					const newMonth = await this.monthTitle().innerText();
					expect(newMonth).toContain(monthToSelect);
					return newMonth;
				}
				if (rightMonths.includes(monthToSelect)) {
					const wantedMonthIndex = rightMonths.indexOf(monthToSelect);
					const nextMonths = rightMonths.slice(0, wantedMonthIndex + 1).length;
					await this.monthRightSelector().click({ clickCount: nextMonths, delay: 500 });
					await this.page.waitForTimeout(1000);
					const newMonth = await this.monthTitle().innerText();
					expect(newMonth).toContain(monthToSelect);
					return newMonth;
				}
			}
		} else {
			await this.monthRightSelector().click();
			const actualMonth = await this.monthTitle().innerText();
			return actualMonth;
		}
	}

	async selectDay(day?: string) {
		if (day) {
		} else {
		}
	}

	async selectDepartingDate(arg?: { day: string; month: string }) {
		await this.openDatePicker('Departing');
		if (arg) {
		} else {
		}
	}
}
