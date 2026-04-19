import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { CheckoutPage } from './checkoutPage';

export class MyCartPage extends BasePage {
    private readonly checkoutbutton: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutbutton = page.getByTestId('navigation-checkout-desktop');
    }

    async clickCheckOut(): Promise<CheckoutPage> {
        await Promise.all([
            this.page.waitForURL('/checkout'),
            this.checkoutbutton.click()
        ])
        return new CheckoutPage(this.page);
    }
}