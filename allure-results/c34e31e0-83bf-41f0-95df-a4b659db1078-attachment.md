# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('store-card')
Expected: visible
Error: strict mode violation: getByTestId('store-card') resolved to 10 elements:
    1) <div id="store-card-287" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-287')
    2) <div id="store-card-5" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-5')
    3) <div id="store-card-2" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-2')
    4) <div id="store-card-952" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-952')
    5) <div id="store-card-11123" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-11123')
    6) <div id="store-card-4" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-4')
    7) <div id="store-card-180" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-180')
    8) <div id="store-card-336" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-336')
    9) <div id="store-card-278" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-278')
    10) <div id="store-card-260" data-testid="store-card" class="store-card-container undefined">…</div> aka locator('#store-card-260')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('store-card')

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
  16 |     private readonly storeCard: Locator;
  17 |     private readonly storeNameList: Locator;
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
  35 |         this.storeCard = page.getByTestId('store-card');
  36 |         this.storeNameList = page.getByTestId('store-name');
  37 |         this.orderHereButton = page.getByTestId('schedule-order');
  38 |         this.orderSummaryTitle = page.getByTestId('view-modal-title');
  39 |         this.viewMenuButton = page.getByTestId('confirm-button-handler');
  40 |     }
  41 | 
  42 |     async clickSetLocationButton(): Promise<void> {
  43 |         await expect(this.setLocationButton).toBeEnabled();
  44 |         await this.setLocationButton.click();
  45 |     }
  46 | 
  47 |     async selectPickUp(): Promise<void> {
  48 |         await expect(this.pickupButton).toBeEnabled();
  49 |         await this.pickupButton.click();
  50 |     }
  51 | 
  52 |     async enterSearchQuery(locationQuery: string): Promise<void> {
  53 |         await expect(this.storeSearchField).toBeEnabled();
  54 |         await this.storeSearchField.clear();
  55 |         await this.storeSearchField.fill(locationQuery);
  56 |     }
  57 | 
  58 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  59 |         await expect(this.suggesAddressList).toBeVisible();
  60 |         let searchResultList = await this.suggesAddressList.all();
  61 | 
  62 |         for(const locations of searchResultList) {
  63 |             const location = await locations.innerText();
  64 |             if (location.toLowerCase().includes(locationQuery.toLowerCase())) {
  65 |                 await locations.click();
  66 |                 break;
  67 |             }
  68 |         }
  69 |     }
  70 | 
  71 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
> 72 |         await expect(this.storeCard).toBeVisible();
     |                                      ^ Error: expect(locator).toBeVisible() failed
  73 |         let storeCardListArray = await this.storeNameList.all();
  74 |         let orderHerebuttonArray = await this.orderHereButton.all();
  75 | 
  76 |         for(let i=0; i<storeCardListArray.length;i++) {
  77 |             const storeLocation = await storeCardListArray[i].innerText();
  78 |             if (storeLocation.toLowerCase().includes(locationQuery.toLowerCase())){
  79 |                 await orderHerebuttonArray[i].click();
  80 |                 break;
  81 |             }
  82 |         }
  83 |     }
  84 |     async orderSummaryTitleIsVisible(): Promise<boolean> {
  85 |         return await this.orderSummaryTitle.isVisible();
  86 |     }
  87 | 
  88 |     async validateOrderSummary(): Promise<void> {
  89 |         this.viewMenuButton.click();
  90 |     }
  91 | 
  92 |     
  93 | 
  94 | 
  95 |     
  96 | }
```