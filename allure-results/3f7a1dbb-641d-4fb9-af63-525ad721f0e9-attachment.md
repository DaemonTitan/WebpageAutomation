# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator: getByTestId('store-search-input')
Expected: enabled
Error: element(s) not found

Call log:
  - Expect "toBeEnabled" with timeout 5000ms
  - waiting for getByTestId('store-search-input')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | import { StringManager } from '../constants/fixedValues';
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
  16 |     private readonly storeNameList: Locator;
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
  34 |         this.storeNameList = page.locator("[data-testid='store-name']");
  35 |         this.orderHereButton = page.locator("[data-testid='schedule-order']");
  36 |         this.orderSummaryTitle = page.locator("[data-testid='view-modal-title']");
  37 |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  38 |     }
  39 | 
  40 |     async clickSetLocationButton(): Promise<void> {
  41 |         await expect(this.setLocationButton).toBeEnabled();
  42 |         await this.setLocationButton.click();
  43 |     }
  44 | 
  45 |     async selectPickUp(): Promise<void> {
  46 |         await expect(this.pickupButton).toBeEnabled();
  47 |         await this.pickupButton.click();
  48 |     }
  49 | 
  50 |     async enterSearchQuery(locationQuery: string): Promise<void> {
> 51 |         await expect(this.storeSearchField).toBeEnabled();
     |                                             ^ Error: expect(locator).toBeEnabled() failed
  52 |         await this.storeSearchField.clear();
  53 |         await this.storeSearchField.fill(locationQuery);
  54 |     }
  55 | 
  56 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  57 |         await expect(this.suggesAddressList).toBeVisible();
  58 |         let searchResultList = await this.suggesAddressList.all();
  59 | 
  60 |         for(const locations of searchResultList) {
  61 |             const location = await locations.innerText();
  62 |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  63 |                 await locations.click();
  64 |                 break;
  65 |             }
  66 |         }
  67 |     }
  68 | 
  69 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  70 |         await expect(this.storeNameList).toBeVisible();
  71 |         let storeCardListArray = await this.storeNameList.all();
  72 |         let orderHerebuttonArray = await this.orderHereButton.all();
  73 | 
  74 |         for(let i=0; i<storeCardListArray.length;i++) {
  75 |             const storeLocation = await storeCardListArray[i].innerText();
  76 |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  77 |                 await orderHerebuttonArray[i].click();
  78 |                 break;
  79 |             }
  80 |         }
  81 |     }
  82 |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  83 |         return await this.orderSummaryTitle.isVisible();
  84 |     }
  85 | 
  86 |     async validateOrderSummary(): Promise<void> {
  87 |         this.viewMenuButton.click();
  88 |     }
  89 | 
  90 |     
  91 | 
  92 | 
  93 |     
  94 | }
```