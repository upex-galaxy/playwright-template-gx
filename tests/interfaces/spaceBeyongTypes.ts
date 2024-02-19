import type { Locator } from '@playwright/test';

export type CardMapType = {
	title: string;
	desc: string;
	price: string;
	bookButton: Locator;
};

export type ProductCardData = {
	title: string;
	price: number;
	desc: string;
	bookButton: Locator;
};
