# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:36:5

# Error details

```
Test timeout of 3000ms exceeded while running "beforeEach" hook.
```

```
Error: expect(locator).toBeEditable() failed

Locator: getByTestId('store-search-input')
Expected: editable
Error: element(s) not found

Call log:
  - Expect "toBeEditable" with timeout 5000ms
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
  40 |     async clickSetLocationButton(): Promise<void> {
  41 |         await expect(this.setLocationButton).toBeVisible();
  42 |         await expect(this.setLocationButton).toBeEnabled();
  43 |         await this.setLocationButton.click();
  44 |     }
  45 | 
  46 |     async selectPickUp(): Promise<void> {
  47 |         await expect(this.pickupButton).toBeVisible();
  48 |         await expect(this.pickupButton).toBeEnabled();
  49 |         await this.pickupButton.click();
  50 |     }
  51 | 
  52 |     async enterSearchQuery(locationQuery: string): Promise<void> {
> 53 |         await expect(this.storeSearchField).toBeEditable();
     |                                             ^ Error: expect(locator).toBeEditable() failed
  54 |         await this.storeSearchField.clear();
  55 |         await this.storeSearchField.fill(locationQuery);
  56 |     }
  57 | 
  58 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  59 |         await this.suggesAddressList.first().waitFor({ state: 'visible' });
  60 |         
  61 |         let searchResultList = await this.suggesAddressList.all();
  62 | 
  63 |         for(const locations of searchResultList) {
  64 |             const location = await locations.innerText();
  65 |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  66 |                 await locations.click();
  67 |                 break;
  68 |             }
  69 |         }
  70 |     }
  71 | 
  72 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  73 |         await this.storeName.first().waitFor({ state: 'visible' });
  74 | 
  75 |         const storeNameArray = await this.storeName.all();
  76 |         const orderHereButtonArray = await this.orderHereButton.all();
  77 | 
  78 |         for (let i = 0; i < storeNameArray.length; i++) {
  79 |             const storeLocation = await storeNameArray[i].innerText();
  80 | 
  81 |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())) {
  82 |                 await orderHereButtonArray[i].click();
  83 |                 break;
  84 |             }
  85 |         }
  86 |     }
  87 | 
  88 |     async clickViewMenuButton(): Promise<MenuPage> {
  89 |         await expect(this.viewMenuButton).toBeVisible();
  90 |         this.viewMenuButton.click();
  91 |         return new MenuPage(this.page);
  92 |     }
  93 | }
```