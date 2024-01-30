import { Locator } from "@playwright/test"


export type cardMapType = {
    title: string,
    desc: string,
    price: string,
    bookButton: Locator
}

export type ProductCardData = {
    title: string
    price: number,
    desc: string,
    bookButton: Locator
}
