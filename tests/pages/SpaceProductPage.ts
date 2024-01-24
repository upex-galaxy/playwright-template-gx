import { Locator, Page } from "@playwright/test";
import { getByReactTool } from "@helper/testUtils";

export class SpaceProductPage {
    page: Page;
    productCard: ()=> Locator;
    destinyTitle: ()=> Locator;
    destinyByTitle: (destinyTitle: string) => Locator;
    destinyPrice: () => Locator;
    destinyDesc: () => Locator;

    constructor(driver: Page) {
        this.page = driver
        this.productCard = () => getByReactTool('card', this.page)
        this.destinyTitle = () => this.page.locator('h5') //todo: combine with productCard
        this.destinyByTitle = (destinyTitle: string) => this.page.locator('h5', { hasText: destinyTitle })
        this.destinyPrice = ()=> this.page.locator('[class*=price-tag]')
        this.destinyDesc = ()=> this.page.locator('p')
    }


    getProductCardByTitle(destinyTitle: string) {
        return this.productCard().filter({ has: this.destinyByTitle(destinyTitle) })
    }

    async getRandomProductCard() {
        const displayedCount = await this.productCard().count()
        const randomIndex = Math.floor(Math.random() * displayedCount)
        return this.productCard().nth(randomIndex)
    }

    async getProductDataByTitle(destinyTitle: string) {
        const productCard = this.getProductCardByTitle(destinyTitle)
        const givenPrice = await productCard.locator(this.destinyPrice()).innerText()
        const givenDesc = await productCard.locator(this.destinyDesc()).innerText()

        const destinyCardObj: ProductCardData = {
            price: givenPrice,
            desc: givenDesc
        }
        return destinyCardObj
    }
}

type ProductCardData = {
    title?: string
    price: string,
    desc: string
}