# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('store-search-input') to be visible

```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | import { BasePage } from '../pages/basePage';
  3   | import { StringManager } from '../constants/fixedValues';
  4   | 
  5   | export class HomePage extends BasePage{
  6   |     private readonly logo: Locator;
  7   |     private readonly locationIcon: Locator;
  8   |     private readonly setLocationText: Locator;
  9   |     private readonly setLocationButton: Locator;
  10  |     private readonly orderTypeModalTitle: Locator;
  11  |     private readonly orderTypeModalBodyText: Locator;
  12  |     private readonly pickupButton: Locator;
  13  |     private readonly DeliveryButton: Locator;
  14  |     private readonly storeSearchField: Locator;
  15  |     private readonly suggesAddressList: Locator;
  16  |     private readonly storeNameList: Locator;
  17  |     private readonly orderHereButton: Locator;
  18  |     private readonly orderSummaryTitle: Locator;
  19  |     private readonly viewMenuButton: Locator;
  20  | 
  21  | 
  22  |     constructor(page: Page) {
  23  |         super(page);
  24  |         this.logo = page.locator(".root-header img[alt='KFC LOGO']");
  25  |         this.locationIcon = page.locator("img[alt='Location Icon']");
  26  |         this.setLocationText = page.locator('.setLocationText');
  27  |         this.setLocationButton = page.getByTestId('set-location-button');
  28  |         this.orderTypeModalTitle = page.locator('#dispostion_selector');
  29  |         this.orderTypeModalBodyText = page.locator('.content-text');
  30  |         this.pickupButton = page.getByTestId('disposition-order-click-handler-Disposition - Pickup');
  31  |         this.DeliveryButton = page.getByTestId('disposition-order-click-handler-Disposition - Delivery');
  32  |         this.storeSearchField = page.getByTestId('store-search-input');
  33  |         this.suggesAddressList = page.locator('.suggestion-list');
  34  |         this.storeNameList = page.locator("[data-testid='store-name']");
  35  |         this.orderHereButton = page.locator("[data-testid='schedule-order']");
  36  |         this.orderSummaryTitle = page.locator("[data-testid='view-modal-title']");
  37  |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  38  |     }
  39  | 
  40  |     async setLocationButtonIsVisible(): Promise<boolean> {
  41  |         return await this.setLocationButton.isVisible();
  42  |     }
  43  | 
  44  |     async clickSetLocationButton(): Promise<void> {
  45  |         await this.setLocationButton.click();
  46  |     }
  47  | 
  48  |     async selectPickUp(): Promise<void> {
  49  |         await this.pickupButton.click();
> 50  |         await this.storeSearchField.waitFor({ state: 'visible' });
      |                                     ^ Error: locator.waitFor: Target page, context or browser has been closed
  51  |     }
  52  | 
  53  |     async enterSearchQuery(locationQuery: string): Promise<void> {
  54  |         await expect(this.storeSearchField).toBeVisible();
  55  |         await expect(this.storeSearchField).toBeEditable();
  56  |         await this.storeSearchField.clear();
  57  |         await this.storeSearchField.fill(locationQuery);
  58  |     }
  59  | 
  60  |     async selectTargetStore(locationQuery: string): Promise<void> {
  61  |         await this.suggesAddressList.waitFor({ state: 'attached' });
  62  |         let searchResultList = await this.suggesAddressList.all();
  63  | 
  64  |         let isFound = true;
  65  |         for(const locations of searchResultList) {
  66  |             const location = await locations.innerText();
  67  |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  68  |                 await locations.click();
  69  |                 isFound = true
  70  |                 break;
  71  |             }
  72  |         }
  73  |         if (!isFound) {
  74  |             throw new Error(`No store found in the search query list`)
  75  |         }
  76  |     }
  77  | 
  78  |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  79  |         await this.storeNameList.waitFor({ state: 'visible' });
  80  |         let storeCardListArray = await this.storeNameList.all();
  81  |         let orderHerebuttonArray = await this.orderHereButton.all();
  82  |         let isFound = true;
  83  | 
  84  |         for(let i=0; i<storeCardListArray.length;i++) {
  85  |             const storeLocation = await storeCardListArray[i].innerText();
  86  |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  87  |                 await orderHerebuttonArray[i].click();
  88  |                 isFound = true;
  89  |                 break;
  90  |             }
  91  |         }
  92  | 
  93  |         if (!isFound) {
  94  |             throw new Error(`No store found in ${locationQuery}`);
  95  |         }
  96  |     }
  97  |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  98  |         return await this.orderSummaryTitle.isVisible();
  99  |     }
  100 | 
  101 |     async validateOrderSummary(): Promise<void> {
  102 |         this.viewMenuButton.click();
  103 |     }
  104 | 
  105 |     
  106 | 
  107 | 
  108 |     
  109 | }
```