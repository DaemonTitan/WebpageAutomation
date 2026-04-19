import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { MyCartPage } from './myCartPage';

export class ProductPage extends BasePage {
    private readonly addToOrderButton: Locator;
    private readonly cartButton: Locator;
    

    constructor(page: Page) {
        super(page);
        this.addToOrderButton = page.getByTestId('add-to-cart-handler');
        this.cartButton = page.locator(".basket");
    }

    async clickAddToOrderButton(): Promise<void> {
        await this.addToOrderButton.click();
        await expect(this.cartButton).toHaveText('1', { timeout: 25000 });
    }

    async clickCartButton(): Promise<MyCartPage> {
        await Promise.all([
            this.page.waitForURL('/cart'),
            this.cartButton.click()
        ])
        return new MyCartPage(this.page)
    }
}