# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:39:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForFunction: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e6]:
    - img "Location Icon" [ref=e7]
    - generic [ref=e8]: Exclusive promotions available at your local KFC Store
    - button "Close" [ref=e9] [cursor=pointer]: Set Location
  - generic [ref=e10]:
    - banner [ref=e11]:
      - generic [ref=e13]:
        - img "KFC LOGO" [ref=e15] [cursor=pointer]
        - generic [ref=e16]:
          - generic [ref=e18] [cursor=pointer]: Menu
          - generic [ref=e20] [cursor=pointer]: Promos & Rewards
          - generic [ref=e22] [cursor=pointer]: Rewards 2.0
          - generic [ref=e24] [cursor=pointer]: Catering
        - generic [ref=e25]:
          - generic [ref=e27] [cursor=pointer]: Sign In
          - button "Close" [ref=e33] [cursor=pointer]: "0"
    - generic [ref=e37]:
      - generic [ref=e38]: LET'S ORDER FOR PICK UP OR DELIVERY
      - button "Start Order" [ref=e39] [cursor=pointer]
  - main [ref=e41]:
    - heading "KFC | Order KFC Chicken Online & Find Restaurants" [level=1] [ref=e42]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - heading "Looking for Limited Time Deals?" [level=2] [ref=e50]
        - paragraph [ref=e52]: We got your back 👍
      - paragraph [ref=e54]:
        - link "Promos & Rewards" [ref=e55] [cursor=pointer]:
          - /url: /rewards
    - generic [ref=e57]:
      - generic [ref=e59]: BROWSE MENU CATEGORIES
      - generic [ref=e61]:
        - link "FEATURED OFFERS" [ref=e62] [cursor=pointer]:
          - /url: /menu/featured-offers
          - generic [ref=e65]: FEATURED OFFERS
        - link "BURGERS" [ref=e66] [cursor=pointer]:
          - /url: /menu/burgers
          - generic [ref=e69]: BURGERS
        - link "BOXED MEALS" [ref=e70] [cursor=pointer]:
          - /url: /menu/boxed-meals
          - generic [ref=e73]: BOXED MEALS
        - link "CHICKEN" [ref=e74] [cursor=pointer]:
          - /url: /menu/chicken
          - generic [ref=e77]: CHICKEN
        - link "SNACK HACKS" [ref=e78] [cursor=pointer]:
          - /url: /menu/snack-hacks
          - generic [ref=e81]: SNACK HACKS
        - link "PROTEIN PICKS" [ref=e82] [cursor=pointer]:
          - /url: /menu/protein-picks
          - generic [ref=e85]: PROTEIN PICKS
        - link "SHARED MEALS" [ref=e86] [cursor=pointer]:
          - /url: /menu/shared-meals
          - generic [ref=e89]: SHARED MEALS
        - link "GO BUCKETS & KIDS MEALS" [ref=e90] [cursor=pointer]:
          - /url: /menu/go-buckets-kids-meals
          - generic [ref=e93]: GO BUCKETS & KIDS MEALS
        - link "EVERYDAY VALUE" [ref=e94] [cursor=pointer]:
          - /url: /menu/everyday-value
          - generic [ref=e97]: EVERYDAY VALUE
        - link "SIDES & DESSERTS" [ref=e98] [cursor=pointer]:
          - /url: /menu/sides-desserts
          - generic [ref=e101]: SIDES & DESSERTS
        - link "COLD DRINKS" [ref=e102] [cursor=pointer]:
          - /url: /menu/cold-drinks
          - generic [ref=e105]: COLD DRINKS
        - link [ref=e106] [cursor=pointer]:
          - /url: /menu
    - generic [ref=e114]:
      - generic [ref=e115]: DOWNLOAD THE NEW KFC APP
      - generic [ref=e116]:
        - link [ref=e117] [cursor=pointer]:
          - /url: https://kfcau.app.link/BreC0MT6Vab
        - link [ref=e118] [cursor=pointer]:
          - /url: https://kfcau.app.link/wPrvMf6zRab
    - generic [ref=e121]:
      - paragraph [ref=e124]: THIS SHOULD BE DIFFERENT
      - heading "THIS SHOULD BE DIFFERENT" [level=2] [ref=e125]
      - paragraph [ref=e127]: Create an account to get access to exclusive promos and rewards, and reorder your favourites.
      - button "Sign me up!" [ref=e128] [cursor=pointer]
  - contentinfo [ref=e131]:
    - contentinfo [ref=e132]:
      - generic [ref=e133]:
        - generic [ref=e134]:
          - link "KFC LOGO" [ref=e136] [cursor=pointer]:
            - /url: /
            - img "KFC LOGO" [ref=e137]
          - generic [ref=e138]:
            - generic [ref=e139]:
              - heading "Menu" [level=2] [ref=e140]
              - list [ref=e141]:
                - listitem [ref=e142]:
                  - link "Menu" [ref=e143] [cursor=pointer]:
                    - /url: /menu
                - listitem [ref=e144]:
                  - link "Catering" [ref=e145] [cursor=pointer]:
                    - /url: /catering
                - listitem [ref=e146]:
                  - link "Christmas Ordering" [ref=e147] [cursor=pointer]:
                    - /url: /start-order
                - listitem [ref=e148]:
                  - link "Nutrition & Allergen Guide" [ref=e149] [cursor=pointer]:
                    - /url: /nutrition-allergen
                - listitem [ref=e150]:
                  - link "Rewards" [ref=e151] [cursor=pointer]:
                    - /url: /promo-rewards
            - generic [ref=e152]:
              - heading "Support" [level=2] [ref=e153]
              - list [ref=e154]:
                - listitem [ref=e155]:
                  - link "FAQ" [ref=e156] [cursor=pointer]:
                    - /url: /faq
                - listitem [ref=e157]:
                  - link "Contact KFC" [ref=e158] [cursor=pointer]:
                    - /url: /contact-kfc
                - listitem [ref=e159]:
                  - link "Promos & Rewards" [ref=e160] [cursor=pointer]:
                    - /url: /promos-rewards
            - generic [ref=e161]:
              - heading "KFC Australia" [level=2] [ref=e162]
              - list [ref=e163]:
                - listitem [ref=e164]:
                  - link "About KFC Globalimg" [ref=e165] [cursor=pointer]:
                    - /url: https://global.kfc.com/
                    - text: About KFC Global
                    - img "img" [ref=e166]
                - listitem [ref=e167]:
                  - link "Social Impact" [ref=e168] [cursor=pointer]:
                    - /url: /social-impact
                - listitem [ref=e169]:
                  - link "Meet the Colonel" [ref=e170] [cursor=pointer]:
                    - /url: /meet-the-colonel
                - listitem [ref=e171]:
                  - link "KFC Delivery Service" [ref=e172] [cursor=pointer]:
                    - /url: /delivery
                - listitem [ref=e173]:
                  - link "Training" [ref=e174] [cursor=pointer]:
                    - /url: /training-brand-page-karen
                - listitem [ref=e175]:
                  - link "Responsible Disclosure" [ref=e176] [cursor=pointer]:
                    - /url: https://bugcrowd.com/a19f4258-c79b-4a4f-a8bc-d924f85d5c53/external/report
            - generic [ref=e177]:
              - heading "Work With Us" [level=2] [ref=e178]
              - list [ref=e179]:
                - listitem [ref=e180]:
                  - link "Restaurant Jobsimg" [ref=e181] [cursor=pointer]:
                    - /url: https://careers.kfc.com.au/
                    - text: Restaurant Jobs
                    - img "img" [ref=e182]
                - listitem [ref=e183]:
                  - link "Corporate Jobsimg" [ref=e184] [cursor=pointer]:
                    - /url: https://careers.kfc.com.au/corporate
                    - text: Corporate Jobs
                    - img "img" [ref=e185]
          - generic [ref=e186]:
            - img "Find Store" [ref=e187] [cursor=pointer]
            - link "Find a KFC" [ref=e188] [cursor=pointer]:
              - /url: /
          - generic [ref=e190]:
            - link "Download on the App Store" [ref=e191] [cursor=pointer]:
              - /url: https://kfcau.app.link/BreC0MT6Vab
              - img "Download on the App Store" [ref=e192]
            - link "GET IT ON Google Play" [ref=e193] [cursor=pointer]:
              - /url: https://kfcau.app.link/wPrvMf6zRab
              - img "GET IT ON Google Play" [ref=e194]
        - generic [ref=e195]:
          - generic [ref=e198]:
            - list [ref=e199]:
              - listitem [ref=e200]:
                - link "Privacy Policy" [ref=e201] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e202]:
                - link ".Terms of Use" [ref=e203] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e204]:
                - link ".Protected Disclosure" [ref=e205] [cursor=pointer]:
                  - /url: /protected-disclosure
              - listitem [ref=e206]:
                - link ".Yum" [ref=e207] [cursor=pointer]:
                  - /url: https://www.yum.com/wps/portal/yumbrands/Yumbrands
              - listitem [ref=e208]:
                - link ".Site Map" [ref=e209] [cursor=pointer]:
                  - /url: /sitemap
            - paragraph [ref=e210]: Copyright © KFC Australia. 2024 All Rights Reserved. build pwa-2601-0-3_3aa3ea5e
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link "Instagram" [ref=e214] [cursor=pointer]:
                - /url: https://www.instagram.com/kfcaustralia/?hl=en
                - img "Instagram" [ref=e215]
            - listitem [ref=e216]:
              - link "Facebook" [ref=e217] [cursor=pointer]:
                - /url: https://www.facebook.com/KFCAustralia/
                - img "Facebook" [ref=e218]
            - listitem [ref=e219]:
              - link "Twitter" [ref=e220] [cursor=pointer]:
                - /url: https://twitter.com/kfcaustralia?lang=en
                - img "Twitter" [ref=e221]
            - listitem [ref=e222]:
              - link "Youtube" [ref=e223] [cursor=pointer]:
                - /url: https://www.youtube.com/user/KFCAustralia
                - img "Youtube" [ref=e224]
            - listitem [ref=e225]:
              - link "Snapchat" [ref=e226] [cursor=pointer]:
                - /url: https://www.snapchat.com/add/kfcaustralia
                - img "Snapchat" [ref=e227]
            - listitem [ref=e228]:
              - link "LinkedIn" [ref=e229] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/kfc-south-pacific/
                - img "LinkedIn" [ref=e230]
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
  40 |     async waitForBrazeDataLoaded(): Promise<void> {
> 41 |         await this.page.waitForFunction((brazeDataUrl) => {
     |                         ^ Error: page.waitForFunction: Test timeout of 30000ms exceeded.
  42 |             return performance
  43 |                 .getEntriesByType('resource')
  44 |                 .some((entry) => entry.name.startsWith(brazeDataUrl));
  45 |         }, 'https://sdk.iad-01.braze.com/api/v3/data/', { timeout: 30000 });
  46 |     }
  47 | 
  48 |     async clickSetLocationButton(): Promise<void> {
  49 |         await this.waitForBrazeDataLoaded();
  50 |         await this.setLocationButton.click();
  51 |     }
  52 | 
  53 |     async selectPickUp(): Promise<void> {
  54 |         await this.pickupButton.click();
  55 |     }
  56 | 
  57 |     async enterSearchQuery(locationQuery: string): Promise<void> {
  58 |         await this.fillText(this.storeSearchField, locationQuery);
  59 |     }
  60 | 
  61 |     async selectTargetLocation(locationQuery: string): Promise<void> {
  62 |         await this.suggesAddressList.first().waitFor({ state: 'visible' });
  63 |         await this.clickItemFromListByText(this.suggesAddressList, locationQuery);
  64 |     }
  65 | 
  66 |     async selectTargetStoreFromList(locationQuery: string): Promise<void> {
  67 |         await this.storeName.first().waitFor({ state: 'visible' });
  68 |         await this.clickActionForListItemByText(this.storeName, this.orderHereButton, locationQuery);
  69 |     }
  70 | 
  71 |     async clickViewMenuButton(): Promise<MenuPage> {
  72 |         await expect(this.viewMenuButton).toBeVisible();
  73 | 
  74 |         await Promise.all([
  75 |             this.page.waitForURL('/menu'),
  76 |              this.viewMenuButton.click()
  77 |         ]);
  78 |             
  79 |         return new MenuPage(this.page);
  80 |     }
  81 | }
  82 | 
```