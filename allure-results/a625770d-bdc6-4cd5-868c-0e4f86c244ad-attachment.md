# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:40:5

# Error details

```
Error: expect(locator).toBeEditable() failed

Locator: getByTestId('store-search-input')
Expected: editable
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeEditable" with timeout 15000ms
  - waiting for getByTestId('store-search-input')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | import { MenuPage } from './menuPage';
  4  | 
  5  | export class HomePage extends BasePage{
  6  |     private readonly logo: Locator;
  7  |     private readonly locationIcon: Locator;
  8  |     private readonly setLocationText: Locator;
  9  |     private readonly setLocationButton: Locator;
  10 |     private readonly orderTypeModalTitle: Locator;
  11 |     private readonly orderTypeModalBodyText: Locator;
  12 |     private readonly pickupButton: Locator;
  13 |     private readonly DeliveryButton: Locator;
  14 |     private readonly storeSearchField: Locator;
  15 |     private readonly suggesAddressList: Locator;
  16 |     private readonly storeName: Locator;
  17 |     private readonly orderHereButton: Locator;
  18 |     private readonly orderSummaryTitle: Locator;
  19 |     private readonly viewMenuButton: Locator;
  20 | 
  21 | 
  22 |     constructor(page: Page) {
  23 |         super(page);
  24 |         this.logo = page.locator(".root-header img[alt='KFC LOGO']");
  25 |         this.locationIcon = page.locator("img[alt='Location Icon']");
  26 |         this.setLocationText = page.locator('.setLocationText');
  27 |         this.setLocationButton = page.getByTestId('set-location-button');
  28 |         this.orderTypeModalTitle = page.locator('#dispostion_selector');
  29 |         this.orderTypeModalBodyText = page.locator('.content-text');
  30 |         this.pickupButton = page.getByTestId('disposition-order-click-handler-Disposition - Pickup');
  31 |         this.DeliveryButton = page.getByTestId('disposition-order-click-handler-Disposition - Delivery');
  32 |         this.storeSearchField = page.getByTestId('store-search-input');
  33 |         this.suggesAddressList = page.locator('.suggestion-list');
  34 |         this.storeName = page.getByTestId('store-name');
  35 |         this.orderHereButton = page.getByTestId('schedule-order');
  36 |         this.orderSummaryTitle = page.getByTestId('view-modal-title');
  37 |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  38 |     }
  39 | 
  40 |     async waitForGoogleMapsLibrary(): Promise<void> {
  41 |         await this.page.waitForFunction(() => {
  42 |             const google = (window as any).google;
  43 | 
  44 |             return Boolean(google?.maps?.importLibrary);
  45 |         }, { timeout: 30000 });
  46 | 
  47 |         await this.page.evaluate(async () => {
  48 |             const google = (window as any).google;
  49 |             await google.maps.importLibrary('places');
  50 |         });
  51 | 
  52 |         await this.page.waitForFunction(() => {
  53 |             const google = (window as any).google;
  54 |             const places = google?.maps?.places;
  55 | 
  56 |             return Boolean(
  57 |                 places?.Autocomplete ||
  58 |                 places?.AutocompleteService ||
  59 |                 places?.PlaceAutocompleteElement
  60 |             );
  61 |         }, { timeout: 30000 });
  62 |     }
  63 | 
  64 |     async clickSetLocationButton(): Promise<void> {
  65 |         await this.setLocationButton.click();
  66 |     }
  67 | 
  68 |     async selectPickUp(): Promise<void> {
  69 |         await this.pickupButton.click();
> 70 |         await expect(this.storeSearchField).toBeEditable({ timeout: 15000 });
     |                                             ^ Error: expect(locator).toBeEditable() failed
  71 |         await this.waitForGoogleMapsLibrary();
  72 |     }
  73 | 
  74 |     async enterSearchQuery(locationQuery: string): Promise<void> {
  75 |         await this.waitForGoogleMapsLibrary();
  76 |         await this.fillText(this.storeSearchField, locationQuery);
  77 |     }
  78 | 
  79 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  80 |         await this.suggesAddressList.first().waitFor({ state: 'visible' });
  81 |         await this.clickItemFromListByText(this.suggesAddressList, locationQuery);
  82 |     }
  83 | 
  84 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  85 |         await this.storeName.first().waitFor({ state: 'visible' });
  86 |         await this.clickActionForListItemByText(this.storeName, this.orderHereButton, locationQuery);
  87 |     }
  88 | 
  89 |     async clickViewMenuButton(): Promise<MenuPage> {
  90 |         await expect(this.viewMenuButton).toBeVisible();
  91 |         this.viewMenuButton.click();
  92 |         return new MenuPage(this.page);
  93 |     }
  94 | }
  95 | 
```