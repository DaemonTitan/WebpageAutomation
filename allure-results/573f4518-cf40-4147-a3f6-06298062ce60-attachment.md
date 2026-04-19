# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: expect(locator).toBeEditable() failed

Locator: getByTestId('confirm-button-handler')
Expected: editable
Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]

Call log:
  - Expect "toBeEditable" with timeout 5000ms
  - waiting for getByTestId('confirm-button-handler')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | import { StringManager } from '../constants/fixedValues';
  4  | import { MenuPage } from './menuPage';
  5  | 
  6  | export class HomePage extends BasePage{
  7  |     private readonly logo: Locator;
  8  |     private readonly locationIcon: Locator;
  9  |     private readonly setLocationText: Locator;
  10 |     private readonly setLocationButton: Locator;
  11 |     private readonly orderTypeModalTitle: Locator;
  12 |     private readonly orderTypeModalBodyText: Locator;
  13 |     private readonly pickupButton: Locator;
  14 |     private readonly DeliveryButton: Locator;
  15 |     private readonly storeSearchField: Locator;
  16 |     private readonly suggesAddressList: Locator;
  17 |     private readonly storeName: Locator;
  18 |     private readonly orderHereButton: Locator;
  19 |     private readonly orderSummaryTitle: Locator;
  20 |     private readonly viewMenuButton: Locator;
  21 | 
  22 | 
  23 |     constructor(page: Page) {
  24 |         super(page);
  25 |         this.logo = page.locator(".root-header img[alt='KFC LOGO']");
  26 |         this.locationIcon = page.locator("img[alt='Location Icon']");
  27 |         this.setLocationText = page.locator('.setLocationText');
  28 |         this.setLocationButton = page.getByTestId('set-location-button');
  29 |         this.orderTypeModalTitle = page.locator('#dispostion_selector');
  30 |         this.orderTypeModalBodyText = page.locator('.content-text');
  31 |         this.pickupButton = page.getByTestId('disposition-order-click-handler-Disposition - Pickup');
  32 |         this.DeliveryButton = page.getByTestId('disposition-order-click-handler-Disposition - Delivery');
  33 |         this.storeSearchField = page.getByTestId('store-search-input');
  34 |         this.suggesAddressList = page.locator('.suggestion-list');
  35 |         this.storeName = page.getByTestId('store-name');
  36 |         this.orderHereButton = page.getByTestId('schedule-order');
  37 |         this.orderSummaryTitle = page.getByTestId('view-modal-title');
  38 |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  39 |     }
  40 | 
  41 |     async clickSetLocationButton(): Promise<void> {
  42 |         await expect(this.setLocationButton).toBeVisible();
  43 |         await expect(this.setLocationButton).toBeEnabled();
  44 |         await this.setLocationButton.click();
  45 |     }
  46 | 
  47 |     async selectPickUp(): Promise<void> {
  48 |         await expect(this.pickupButton).toBeVisible();
  49 |         await expect(this.pickupButton).toBeEnabled();
  50 |         await this.pickupButton.click();
  51 |     }
  52 | 
  53 |     async enterSearchQuery(locationQuery: string): Promise<void> {
  54 |         await expect(this.storeSearchField).toBeEditable();
  55 |         await this.storeSearchField.clear();
  56 |         await this.storeSearchField.fill(locationQuery);
  57 |     }
  58 | 
  59 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  60 |         await this.suggesAddressList.first().waitFor({ state: 'visible' });
  61 |         
  62 |         let searchResultList = await this.suggesAddressList.all();
  63 | 
  64 |         for(const locations of searchResultList) {
  65 |             const location = await locations.innerText();
  66 |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  67 |                 await locations.click();
  68 |                 break;
  69 |             }
  70 |         }
  71 |     }
  72 | 
  73 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  74 |         await this.storeName.first().waitFor({ state: 'visible' });
  75 | 
  76 |         const storeNameArray = await this.storeName.all();
  77 |         const orderHereButtonArray = await this.orderHereButton.all();
  78 | 
  79 |         for (let i = 0; i < storeNameArray.length; i++) {
  80 |             const storeLocation = await storeNameArray[i].innerText();
  81 | 
  82 |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())) {
  83 |                 await orderHereButtonArray[i].click();
  84 |                 break;
  85 |             }
  86 |         }
  87 |     }
  88 | 
  89 |     async clickViewMenuButton(): Promise<MenuPage> {
  90 |         await expect(this.viewMenuButton).toBeVisible();
> 91 |         await expect(this.viewMenuButton).toBeEditable();
     |                                           ^ Error: expect(locator).toBeEditable() failed
  92 |         this.viewMenuButton.click();
  93 |         return new MenuPage(this.page);
  94 |     }
  95 | }
```