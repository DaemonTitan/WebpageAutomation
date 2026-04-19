# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:43:5

# Error details

```
TimeoutError: page.waitForResponse: Timeout 15000ms exceeded while waiting for event "response"
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
        - link "TWISTERS & BOWLS" [ref=e90] [cursor=pointer]:
          - /url: /menu/twisters-bowls
          - generic [ref=e93]: TWISTERS & BOWLS
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
  - contentinfo [ref=e130]:
    - contentinfo [ref=e131]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - link "KFC LOGO" [ref=e135] [cursor=pointer]:
            - /url: /
            - img "KFC LOGO" [ref=e136]
          - generic [ref=e137]:
            - generic [ref=e138]:
              - heading "Menu" [level=2] [ref=e139]
              - list [ref=e140]:
                - listitem [ref=e141]:
                  - link "Menu" [ref=e142] [cursor=pointer]:
                    - /url: /menu
                - listitem [ref=e143]:
                  - link "Catering" [ref=e144] [cursor=pointer]:
                    - /url: /catering
                - listitem [ref=e145]:
                  - link "Christmas Ordering" [ref=e146] [cursor=pointer]:
                    - /url: /start-order
                - listitem [ref=e147]:
                  - link "Nutrition & Allergen Guide" [ref=e148] [cursor=pointer]:
                    - /url: /nutrition-allergen
                - listitem [ref=e149]:
                  - link "Rewards" [ref=e150] [cursor=pointer]:
                    - /url: /promo-rewards
            - generic [ref=e151]:
              - heading "Support" [level=2] [ref=e152]
              - list [ref=e153]:
                - listitem [ref=e154]:
                  - link "FAQ" [ref=e155] [cursor=pointer]:
                    - /url: /faq
                - listitem [ref=e156]:
                  - link "Contact KFC" [ref=e157] [cursor=pointer]:
                    - /url: /contact-kfc
                - listitem [ref=e158]:
                  - link "Promos & Rewards" [ref=e159] [cursor=pointer]:
                    - /url: /promos-rewards
            - generic [ref=e160]:
              - heading "KFC Australia" [level=2] [ref=e161]
              - list [ref=e162]:
                - listitem [ref=e163]:
                  - link "About KFC Globalimg" [ref=e164] [cursor=pointer]:
                    - /url: https://global.kfc.com/
                    - text: About KFC Global
                    - img "img" [ref=e165]
                - listitem [ref=e166]:
                  - link "Social Impact" [ref=e167] [cursor=pointer]:
                    - /url: /social-impact
                - listitem [ref=e168]:
                  - link "Meet the Colonel" [ref=e169] [cursor=pointer]:
                    - /url: /meet-the-colonel
                - listitem [ref=e170]:
                  - link "KFC Delivery Service" [ref=e171] [cursor=pointer]:
                    - /url: /delivery
                - listitem [ref=e172]:
                  - link "Training" [ref=e173] [cursor=pointer]:
                    - /url: /training-brand-page-karen
                - listitem [ref=e174]:
                  - link "Responsible Disclosure" [ref=e175] [cursor=pointer]:
                    - /url: https://bugcrowd.com/a19f4258-c79b-4a4f-a8bc-d924f85d5c53/external/report
            - generic [ref=e176]:
              - heading "Work With Us" [level=2] [ref=e177]
              - list [ref=e178]:
                - listitem [ref=e179]:
                  - link "Restaurant Jobsimg" [ref=e180] [cursor=pointer]:
                    - /url: https://careers.kfc.com.au/
                    - text: Restaurant Jobs
                    - img "img" [ref=e181]
                - listitem [ref=e182]:
                  - link "Corporate Jobsimg" [ref=e183] [cursor=pointer]:
                    - /url: https://careers.kfc.com.au/corporate
                    - text: Corporate Jobs
                    - img "img" [ref=e184]
          - generic [ref=e185]:
            - img "Find Store" [ref=e186] [cursor=pointer]
            - link "Find a KFC" [ref=e187] [cursor=pointer]:
              - /url: /
          - generic [ref=e189]:
            - link "Download on the App Store" [ref=e190] [cursor=pointer]:
              - /url: https://kfcau.app.link/BreC0MT6Vab
              - img "Download on the App Store" [ref=e191]
            - link "GET IT ON Google Play" [ref=e192] [cursor=pointer]:
              - /url: https://kfcau.app.link/wPrvMf6zRab
              - img "GET IT ON Google Play" [ref=e193]
        - generic [ref=e194]:
          - generic [ref=e197]:
            - list [ref=e198]:
              - listitem [ref=e199]:
                - link "Privacy Policy" [ref=e200] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e201]:
                - link ".Terms of Use" [ref=e202] [cursor=pointer]:
                  - /url: /terms-conditions
              - listitem [ref=e203]:
                - link ".Protected Disclosure" [ref=e204] [cursor=pointer]:
                  - /url: /protected-disclosure
              - listitem [ref=e205]:
                - link ".Yum" [ref=e206] [cursor=pointer]:
                  - /url: https://www.yum.com/wps/portal/yumbrands/Yumbrands
              - listitem [ref=e207]:
                - link ".Site Map" [ref=e208] [cursor=pointer]:
                  - /url: /sitemap
            - paragraph [ref=e209]: Copyright © KFC Australia. 2024 All Rights Reserved. build pwa-2601-0-3_3aa3ea5e
          - list [ref=e211]:
            - listitem [ref=e212]:
              - link "Instagram" [ref=e213] [cursor=pointer]:
                - /url: https://www.instagram.com/kfcaustralia/?hl=en
                - img "Instagram" [ref=e214]
            - listitem [ref=e215]:
              - link "Facebook" [ref=e216] [cursor=pointer]:
                - /url: https://www.facebook.com/KFCAustralia/
                - img "Facebook" [ref=e217]
            - listitem [ref=e218]:
              - link "Twitter" [ref=e219] [cursor=pointer]:
                - /url: https://twitter.com/kfcaustralia?lang=en
                - img "Twitter" [ref=e220]
            - listitem [ref=e221]:
              - link "Youtube" [ref=e222] [cursor=pointer]:
                - /url: https://www.youtube.com/user/KFCAustralia
                - img "Youtube" [ref=e223]
            - listitem [ref=e224]:
              - link "Snapchat" [ref=e225] [cursor=pointer]:
                - /url: https://www.snapchat.com/add/kfcaustralia
                - img "Snapchat" [ref=e226]
            - listitem [ref=e227]:
              - link "LinkedIn" [ref=e228] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/kfc-south-pacific/
                - img "LinkedIn" [ref=e229]
```

# Test source

```ts
  1  | /*
  2  | * Steps:
  3  | * 1. Navigate to webpage:
  4  | * 2. Set order option to Pick Up
  5  | * 3. Set store location to Dee Why
  6  | * 4. Order food from Menu page
  7  | * 5. Select item and add to cart
  8  | * 6. Go to cart or checkout
  9  | * 7. Validate order summary page
  10 | * 8. Enter detail as guest
  11 | * 9. Enter payment details
  12 | * 10. Conform order is sucessfull
  13 | */
  14 | 
  15 | import { test, expect } from '../config/pagefixture';
  16 | import * as testData from '../data/userDetail.json';
  17 | import * as storeData from '../data/storeDetails.json';
  18 | 
  19 | test.beforeEach(async({page, homePage}) => {
  20 |     await page.goto('/');
  21 | 
  22 |     // Home Page set pickup store
  23 |     //await homePage.waitForGoogleMapsScript();
  24 | 
> 25 |     const googleMapsScript = page.waitForResponse(
     |                                   ^ TimeoutError: page.waitForResponse: Timeout 15000ms exceeded while waiting for event "response"
  26 |       response =>
  27 |         response.url().startsWith('https://maps.googleapis.com/maps/api/js') &&
  28 |         response.status() === 200,
  29 |       { timeout: 15000 },
  30 |     );
  31 | 
  32 |     await googleMapsScript;
  33 | 
  34 | })
  35 | 
  36 | test.afterEach(async({page}) => {
  37 |     await page.evaluate(() => {
  38 |         localStorage.clear();
  39 |         sessionStorage.clear();
  40 |   });
  41 | })
  42 | 
  43 | test('Order process', async({page, homePage, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  44 |     await homePage.logoIsVisible();
  45 |     await homePage.clickSetLocationButton();
  46 |     await homePage.selectPickUp();
  47 |     await homePage.enterSearchQuery(storeData.storeLocation);
  48 |     await homePage.selectTargetLocation(storeData.storeLocation);
  49 |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  50 |     await homePage.clickViewMenuButton();
  51 |     
  52 |     
  53 |     // Select product from menu
  54 |     await menuPage.selectSideMenu(storeData.selectMenu);
  55 |     await menuPage.selectProduct(storeData.selectProduct);
  56 | 
  57 |     // // Add product to cart
  58 |     await productPage.clickAddToOrderButton();
  59 |     await productPage.clickCartButton();
  60 | 
  61 |     // // Click check out from my cart page
  62 |     await mycartPage.clickCheckOut();
  63 | 
  64 |     // verify check out page
  65 |     await checkoutPage.clickChevron();
  66 |     expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  67 |     expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  68 |     await checkoutPage.clickContinueAsAGuestButton();
  69 | 
  70 |     await checkoutPage.completeUserDetails(testData.firstName, 
  71 |                                             testData.lastNAme,
  72 |                                             testData.email, 
  73 |                                             testData.mobile);
  74 |     await checkoutPage.clickAddPaymentMethod();
  75 | 
  76 |     await page.waitForTimeout(4000)
  77 | 
  78 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  79 |     // await checkoutPage.clickPayButton();
  80 | 
  81 |     // await orderConfirmationPage.confirmationMessageIsVisible();
  82 |     
  83 | })
  84 | 
```