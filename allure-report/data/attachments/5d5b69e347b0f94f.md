# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Test source

```ts
  1   | import { Locator, Page } from '@playwright/test';
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
  27  |         this.setLocationButton = page.locator('[data-testid=set-location-button]');
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
  48  |     async pickUpButtonIsVisible(): Promise<boolean> {
  49  |         return await this.pickupButton.isVisible();
  50  |     }
  51  | 
  52  |     async selectPickUp(): Promise<void> {
  53  |         //wait this.pickupButton.click();
  54  | 
  55  |         await Promise.all([
> 56  |             this.page.waitForEvent('popup'),
      |                       ^ Error: page.waitForEvent: Target page, context or browser has been closed
  57  |             await this.pickupButton.click()
  58  |         ])
  59  |     }
  60  | 
  61  |     async enterSearchQuery(locationQuery: string): Promise<void> {
  62  |         await this.storeSearchField.clear();
  63  |         await this.storeSearchField.fill(locationQuery);
  64  |     }
  65  | 
  66  |     async selectTargetStore(locationQuery: string): Promise<void> {
  67  | 
  68  | 
  69  | 
  70  |         let searchResultList = await this.suggesAddressList.all();
  71  | 
  72  |         
  73  | 
  74  |         // let isFound = true;
  75  |         // for(const locations of searchResultList) {
  76  |         //     const location = await locations.innerText();
  77  |         //     if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  78  |         //         await locations.click();
  79  |         //         isFound = true
  80  |         //         break;
  81  |         //     }
  82  |         // }
  83  |         // if (!isFound) {
  84  |         //     throw new Error(`No store found in the search query list`)
  85  |         // }
  86  |     }
  87  | 
  88  |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  89  |         let storeCardListArray = await this.storeNameList.all();
  90  |         let orderHerebuttonArray = await this.orderHereButton.all();
  91  |         let isFound = true;
  92  | 
  93  |         for(let i=0; i<storeCardListArray.length;i++) {
  94  |             const storeLocation = await storeCardListArray[i].innerText();
  95  |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  96  |                 await orderHerebuttonArray[i].click();
  97  |                 isFound = true;
  98  |                 break;
  99  |             }
  100 |         }
  101 | 
  102 |         if (!isFound) {
  103 |             throw new Error(`No store found in ${locationQuery}`);
  104 |         }
  105 |     }
  106 |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  107 |         return await this.orderSummaryTitle.isVisible();
  108 |     }
  109 | 
  110 |     async validateOrderSummary(): Promise<void> {
  111 |         this.viewMenuButton.click();
  112 |     }
  113 | 
  114 |     
  115 | 
  116 | 
  117 |     
  118 | }
```