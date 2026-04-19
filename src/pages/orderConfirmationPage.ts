import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class OrderConfirmationPage extends BasePage{
    private readonly confirmationMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.confirmationMessage = page.locator('.col-12.statusMessage');
    }

    async confirmationMessageIsVisible(): Promise<void> {
        await this.page.waitForURL('/order-summary', {timeout: 600000})
        await expect(this.confirmationMessage).toBeVisible({ timeout: 600000 });
    }
}
