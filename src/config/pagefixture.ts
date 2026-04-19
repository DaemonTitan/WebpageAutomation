import {test as baseTest} from '@playwright/test'
import { CheckoutPage } from "../pages/checkoutPage";
import { HomePage } from "../pages/homePage";
import { MenuPage } from "../pages/menuPage";
import { MyCartPage } from "../pages/myCartPage";
import { OrderConfirmationPage } from "../pages/orderConfirmationPage";
import { ProductPage } from "../pages/productPage";

type PageFixture = {
    homePage: HomePage,
    menuPage: MenuPage,
    productPage: ProductPage,
    mycartPage: MyCartPage,
    checkoutPage: CheckoutPage,
    orderConfirmationPage: OrderConfirmationPage
}

export const test = baseTest.extend<PageFixture>({
    homePage: async({page}, use)=> {
        await use(new HomePage(page));
    },
    menuPage: async({page}, use)=> {
        await use(new MenuPage(page));
    },
    productPage: async({page}, use)=> {
        await use(new ProductPage(page));
    },
    mycartPage: async({page}, use)=> {
        await use(new MyCartPage(page));
    },
    checkoutPage: async({page}, use)=> {
        await use(new CheckoutPage(page));
    },
    orderConfirmationPage: async({page}, use)=> {
        await use(new OrderConfirmationPage(page));
    }
})

export const expect = test.expect;