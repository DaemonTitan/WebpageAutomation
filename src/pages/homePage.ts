import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { ApiEndpoints } from '../constants/endpoints';
import { MenuPage } from './menuPage';

export class HomePage extends BasePage{
    private readonly logo: Locator;
    private readonly setLocationButton: Locator;
    private readonly pickupButton: Locator;
    private readonly storeSearchField: Locator;
    private readonly suggesAddressList: Locator;
    private readonly storeName: Locator;
    private readonly orderHereButton: Locator;
    private readonly viewMenuButton: Locator;


    constructor(page: Page) {
        super(page);
        this.logo = page.locator(".root-header img[alt='KFC LOGO']");
        this.setLocationButton = page.getByTestId('set-location-button');
        this.pickupButton = page.getByTestId('disposition-order-click-handler-Disposition - Pickup');
        this.storeSearchField = page.getByTestId('store-search-input');
        this.suggesAddressList = page.locator('.suggested-address-alignment-delivery');
        this.storeName = page.getByTestId('store-name');
        this.orderHereButton = page.getByTestId('schedule-order');
        this.viewMenuButton = page.getByTestId('confirm-button-handler');
    }

    async logoIsVisible(): Promise<void> {
        await expect(this.logo).toBeVisible();
    }

    async waitForGoogleMapsScript(): Promise<void> {
        await this.page.waitForResponse(
            response =>
                response.url().startsWith(ApiEndpoints.googleMapsScript) &&
                response.status() === 200,
            { timeout: 15000 },
        );

        await this.page.waitForFunction(
            () =>
                Boolean(
                    (window as typeof window & {
                        google?: {
                            maps?: {
                                places?: unknown;
                            };
                        };
                    }).google?.maps?.places,
                ),
            { timeout: 15000 },
        );
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
