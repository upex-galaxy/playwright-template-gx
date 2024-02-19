import { story, test, expect } from '@TestBase';
import { Locator } from '@playwright/test';
import type { CardMapType } from '@type/spaceBeyongTypes';


story('Selecting a Card with Details', () => {
	
	test('Should select a Card with given Title', async ({ page }) => {

		await page.goto('https://demo.testim.io/');
		//* Option 1: Estrategia < GIVEN GENERATED DATA >
		// Cuando la data es generada por nuestras consecuencias (ejemplo: crear un producto con nombre 'Madan')
		const createdCard = page.locator('[data-react-toolbox=card]', { has: page.locator('h5', { hasText: 'Madan' }) });    
		// createdCard.locator('button', { hasText: 'Book' }).click()

		//* Option 2: Estrategia < DATA MUESTRA -> Given Random Data > 
		// Cuando la data no es generada por nuestras consecuencias sino está ahí(y varía aún así)

		async function getCardMapping(givenCard: Locator) {
			const cardMap = {} as CardMapType;
			cardMap.title = await givenCard.locator('h5').innerText();
			cardMap.desc = await givenCard.locator('p').innerText();
			cardMap.price = await givenCard.locator('[class*=price-tag]').innerText();
			cardMap.bookButton = givenCard.locator('button', { hasText: 'Book' });
			return cardMap;
		}

		async function getRandomCard() {
			const availableCards = await page.locator('[data-react-toolbox=card]').count();
			const chosenCardIndex = Math.floor(Math.random() * availableCards);
			const givenCard = page.locator('[data-react-toolbox=card]').nth(chosenCardIndex);
			const cardMap = await getCardMapping(givenCard);
			return cardMap;
		}
		
		// Test Utils:
		function getNumberFromPriceString(priceString: string) {
			return parseFloat(priceString.replace('$', '').replace(',', ''));
		}

		await test.step('Getting a Card by given title', async () => {
			const cardMap = await getCardMapping(createdCard);
			console.log('🎭️ Card Mapping by title <Madan>:', cardMap);
		});

		await test.step('Getting a Card by Randomness', async () => {
			const { title, price: expectedPrice, bookButton } = await getRandomCard();
			console.log('🎭️ Card Mapping by Randomness:', title);
			console.log('🎭️ Selected Destiny Price:', expectedPrice);

			console.log('🎭️ Performing Click...');
			await bookButton.click();
			expect(page.url()).toContain('checkout');

			const checkoutSummaryPrice = await page.locator('[class^=OrderSummary] strong').innerText();
			const checkoutPriceNum = getNumberFromPriceString(checkoutSummaryPrice);
			const expectedPriceNum = getNumberFromPriceString(expectedPrice);

			expect(checkoutPriceNum).toBe(expectedPriceNum);

		});
	});
});