import { story, precondition, test } from '@TestBase'
import { SpaceLoginPage } from '@pages/SpaceLoginPage';
import { SpaceProductPage } from '@pages/SpaceProductPage';

story('GX3-1740: Space Beyond - Book a destiny on Checkout', () => {
    
    precondition(async ({ page }) => {
        const loginPage = new SpaceLoginPage(page)
        await loginPage.login('Saitest', '12345abc')
    });

    test('GX3-1740 | TC1: Should book a destiny on Checkout', async ({ page }) => {
        const productPage = new SpaceProductPage(page)
        const { price } = await productPage.getProductDataByTitle('Madan')
        console.log('🎭️ ESTE ES EL PRECIO OBTENIDO DE MADAN:', price)

        // todo: Falta seleccionar el destino para ir al checkout y rellenar el formulario
     })

})