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
  - waiting for locator('[data-testid=\'store-search-input\']')
    - waiting for" https://au-uat.pwa.kfc.dev/" navigation to finish...
    - navigated to "https://au-uat.pwa.kfc.dev/"

```

# Test source

```ts
  1   | import { Locator, Page } from '@playwright/test';
  2   | import { BasePage } from './basepage';
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
  32  |         this.storeSearchField = page.locator("[data-testid='store-search-input']");
  33  |         this.suggesAddressList = page.locator('.suggestion-list');
  34  |         this.storeNameList = page.locator("[data-testid='store-name']");
  35  |         this.orderHereButton = page.locator("[data-testid='schedule-order']");
  36  |         this.orderSummaryTitle = page.locator("[data-testid='view-modal-title']");
  37  |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  38  |     }
  39  | 
  40  |     async clickSetLocationButton(): Promise<void> {
  41  |         await this.setLocationButton.isVisible();
  42  |         await this.setLocationButton.click();
  43  |     }
  44  | 
  45  |     async selectPickUp(): Promise<void> {
  46  |         await this.pickupButton.isVisible();
  47  |         await this.pickupButton.click();
  48  |     }
  49  | 
  50  |     async enterSearchQuery(locationQuery: string): Promise<void> {
> 51  |         await this.storeSearchField.clear();
      |                                     ^ Error: locator.clear: Target page, context or browser has been closed
  52  |         await this.storeSearchField.fill(locationQuery);
  53  |     }
  54  | 
  55  |     async selectTargetStore(locationQuery: string): Promise<void> {
  56  |         let searchResultList = await this.suggesAddressList.all();
  57  |         let isFound = true;
  58  |         for(const locations of searchResultList) {
  59  |             const location = await locations.innerText();
  60  |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  61  |                 await locations.click();
  62  |                 isFound = true
  63  |                 break;
  64  |             }
  65  |         }
  66  |         if (!isFound) {
  67  |             throw new Error(`No store found in the search query list`)
  68  |         }
  69  |     }
  70  | 
  71  |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  72  |         let storeCardListArray = await this.storeNameList.all();
  73  |         let orderHerebuttonArray = await this.orderHereButton.all();
  74  |         let isFound = true;
  75  | 
  76  |         for(let i=0; i<storeCardListArray.length;i++) {
  77  |             const storeLocation = await storeCardListArray[i].innerText();
  78  |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  79  |                 await orderHerebuttonArray[i].click();
  80  |                 isFound = true;
  81  |                 break;
  82  |             }
  83  |         }
  84  | 
  85  |         if (!isFound) {
  86  |             throw new Error(`No store found in ${locationQuery}`);
  87  |         }
  88  |     }
  89  |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  90  |         return await this.orderSummaryTitle.isVisible();
  91  |     }
  92  | 
  93  |     async validateOrderSummary(): Promise<void> {
  94  |         this.viewMenuButton.click();
  95  |     }
  96  | 
  97  |     
  98  | 
  99  | 
  100 |     
  101 | }
```