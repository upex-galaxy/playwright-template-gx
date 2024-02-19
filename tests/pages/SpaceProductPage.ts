import type { Locator, Page } from '@playwright/test';
import type { ProductCardData } from '@type/spaceBeyongTypes';
import { ReactPage } from './ReactPage';

export class SpaceProductPage extends ReactPage {
	page: Page;
	productCards: () => Locator;
	destinyTitle: () => Locator;
	destinyByTitle: (destinyTitle: string) => Locator;
	destinyPrice: () => Locator;
	destinyDesc: () => Locator;
	destinyBookBtn: () => Locator;

	constructor(driver: Page) {
		super(driver);
		this.page = driver;
		this.productCards = () => this.getByReactTool('card', this.page);
		//* Estas son las propiedades de cada Card (puedes combinarlo con productCards()
		this.destinyTitle = () => this.page.locator('h5'); //todo: combine with productCard
		this.destinyByTitle = (destinyTitle: string) => this.page.locator('h5', { hasText: destinyTitle });
		this.destinyPrice = () => this.page.locator('[class*=price-tag]');
		this.destinyDesc = () => this.page.locator('p');
		this.destinyBookBtn = () => this.page.locator('button', { hasText: 'Book' });
	}

	//* ESTRATEGIAS DE LOCALIZADOR por "GIVEN DATA" hay 2 opciones:

	//* Option 1: Estrategia "DATA GENERADA"
	// Cuando la data es generada por nuestras consecuencias (ejemplo: crear un producto con nombre 'Madan')
	getProductCardByTitle(destinyTitle: string) {
		return this.productCards().filter({ has: this.destinyByTitle(destinyTitle) });
	}

	// También puede ser por índice:
	getProductCardByIndex(destinyIndex: number) {
		return this.productCards().nth(destinyIndex);
	}

	//* Option 2: Estrategia "DATA MUESTRA" o (DATA RANDOM)
	// Cuando la data no es generada por nuestras consecuencias sino está ahí (y tiene propencia al cambio)
	// Seleccionando todas las opciones y eligiendo una al azar:

	async getRandomProductCard() {
		const displayedCount = await this.productCards().count();
		const randomIndex = Math.floor(Math.random() * displayedCount);
		return this.getProductCardByIndex(randomIndex);
	}

	async getProductData(givenCard: Locator) {
		const destinyCardObj = {} as ProductCardData;
		destinyCardObj.title = await givenCard.locator(this.destinyTitle()).innerText();
		const priceString = await givenCard.locator(this.destinyPrice()).innerText();
		destinyCardObj.price = parseFloat(priceString.replace('$', '').replace(',', ''));
		destinyCardObj.desc = await givenCard.locator(this.destinyDesc()).innerText();
		destinyCardObj.bookButton = givenCard.locator(this.destinyBookBtn());
		return destinyCardObj;
	}

	async bookDestination(givenCard: ProductCardData) {
		await givenCard.bookButton.click();
	}

	async bookRandomDestination() {
		const randomCard = await this.getRandomProductCard();
		const cardProps = await this.getProductData(randomCard);
		await this.bookDestination(cardProps);
		return cardProps;
	}
}
