# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: locator.clear: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('store-search-input')

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
  53  |         await this.pickupButton.click();
  54  |     }
  55  | 
  56  |     async enterSearchQuery(locationQuery: string): Promise<void> {
> 57  |         await this.storeSearchField.clear();
      |                                     ^ Error: locator.clear: Target page, context or browser has been closed
  58  |         await this.storeSearchField.fill(locationQuery);
  59  |     }
  60  | 
  61  |     async selectTargetStore(locationQuery: string): Promise<void> {
  62  | 
  63  | 
  64  | 
  65  |         let searchResultList = await this.suggesAddressList.all();
  66  | 
  67  |         
  68  | 
  69  |         // let isFound = true;
  70  |         // for(const locations of searchResultList) {
  71  |         //     const location = await locations.innerText();
  72  |         //     if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  73  |         //         await locations.click();
  74  |         //         isFound = true
  75  |         //         break;
  76  |         //     }
  77  |         // }
  78  |         // if (!isFound) {
  79  |         //     throw new Error(`No store found in the search query list`)
  80  |         // }
  81  |     }
  82  | 
  83  |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  84  |         let storeCardListArray = await this.storeNameList.all();
  85  |         let orderHerebuttonArray = await this.orderHereButton.all();
  86  |         let isFound = true;
  87  | 
  88  |         for(let i=0; i<storeCardListArray.length;i++) {
  89  |             const storeLocation = await storeCardListArray[i].innerText();
  90  |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  91  |                 await orderHerebuttonArray[i].click();
  92  |                 isFound = true;
  93  |                 break;
  94  |             }
  95  |         }
  96  | 
  97  |         if (!isFound) {
  98  |             throw new Error(`No store found in ${locationQuery}`);
  99  |         }
  100 |     }
  101 |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  102 |         return await this.orderSummaryTitle.isVisible();
  103 |     }
  104 | 
  105 |     async validateOrderSummary(): Promise<void> {
  106 |         this.viewMenuButton.click();
  107 |     }
  108 | 
  109 |     
  110 | 
  111 | 
  112 |     
  113 | }
```