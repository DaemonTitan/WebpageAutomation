import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { MenuPage } from './menuPage';

export class HomePage extends BasePage{
    private readonly logo: Locator;
    private readonly locationIcon: Locator;
    private readonly setLocationText: Locator;
    private readonly setLocationButton: Locator;
    private readonly orderTypeModalTitle: Locator;
    private readonly orderTypeModalBodyText: Locator;
    private readonly pickupButton: Locator;
    private readonly DeliveryButton: Locator;
    private readonly storeSearchField: Locator;
    private readonly suggesAddressList: Locator;
    private readonly storeName: Locator;
    private readonly orderHereButton: Locator;
    private readonly orderSummaryTitle: Locator;
    private readonly viewMenuButton: Locator;


    constructor(page: Page) {
        super(page);
        this.logo = page.locator(".root-header img[alt='KFC LOGO']");
        this.locationIcon = page.locator("img[alt='Location Icon']");
        this.setLocationText = page.locator('.setLocationText');
        this.setLocationButton = page.getByTestId('set-location-button');
        this.orderTypeModalTitle = page.locator('#dispostion_selector');
        this.orderTypeModalBodyText = page.locator('.content-text');
        this.pickupButton = page.getByTestId('disposition-order-click-handler-Disposition - Pickup');
        this.DeliveryButton = page.getByTestId('disposition-order-click-handler-Disposition - Delivery');
        this.storeSearchField = page.getByTestId('store-search-input');
        this.suggesAddressList = page.locator('.suggestion-list');
        this.storeName = page.getByTestId('store-name');
        this.orderHereButton = page.getByTestId('schedule-order');
        this.orderSummaryTitle = page.getByTestId('view-modal-title');
        this.viewMenuButton = page.getByTestId('confirm-button-handler');
    }

    async clickSetLocationButton(): Promise<void> {
        await this.setLocationButton.click();
    }

    async selectPickUp(): Promise<void> {
        await this.pickupButton.click();
    }

    async enterSearchQuery(locationQuery: string): Promise<void> {
        await this.fillText(this.storeSearchField, locationQuery);
    }

    async selectTargetLocation(locationQuery: string): Promise<void> {
        await this.suggesAddressList.first().waitFor({ state: 'visible' });
        await this.clickItemFromListByText(this.suggesAddressList, locationQuery);
    }

    async selectTargetStoreFromList(locationQuery: string): Promise<void> {
        await this.storeName.first().waitFor({ state: 'visible' });
        await this.clickActionForListItemByText(this.storeName, this.orderHereButton, locationQuery);
    }

    async clickViewMenuButton(): Promise<MenuPage> {
        await expect(this.viewMenuButton).toBeVisible();

        await Promise.all([
            this.page.waitForURL('/menu'),
            this.viewMenuButton.click()
        ]);
            
        return new MenuPage(this.page);
    }
}
