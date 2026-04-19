# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('confirm-button-handler')

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
  32  |         this.storeSearchField = page.locator("[data-testid='store-search-input']");
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
  57  |         await this.storeSearchField.clear();
  58  |         await this.storeSearchField.fill(locationQuery);
  59  |     }
  60  | 
  61  |     async selectTargetStore(locationQuery: string): Promise<void> {
  62  |         let searchResultList = await this.suggesAddressList.all();
  63  |         let isFound = true;
  64  |         for(const locations of searchResultList) {
  65  |             const location = await locations.innerText();
  66  |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  67  |                 await locations.click();
  68  |                 isFound = true
  69  |                 break;
  70  |             }
  71  |         }
  72  |         if (!isFound) {
  73  |             throw new Error(`No store found in the search query list`)
  74  |         }
  75  |     }
  76  | 
  77  |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  78  |         let storeCardListArray = await this.storeNameList.all();
  79  |         let orderHerebuttonArray = await this.orderHereButton.all();
  80  |         let isFound = true;
  81  | 
  82  |         for(let i=0; i<storeCardListArray.length;i++) {
  83  |             const storeLocation = await storeCardListArray[i].innerText();
  84  |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  85  |                 await orderHerebuttonArray[i].click();
  86  |                 isFound = true;
  87  |                 break;
  88  |             }
  89  |         }
  90  | 
  91  |         if (!isFound) {
  92  |             throw new Error(`No store found in ${locationQuery}`);
  93  |         }
  94  |     }
  95  |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  96  |         return await this.orderSummaryTitle.isVisible();
  97  |     }
  98  | 
  99  |     async validateOrderSummary(): Promise<void> {
> 100 |         this.viewMenuButton.click();
      |                             ^ Error: locator.click: Target page, context or browser has been closed
  101 |     }
  102 | 
  103 |     
  104 | 
  105 | 
  106 |     
  107 | }
```