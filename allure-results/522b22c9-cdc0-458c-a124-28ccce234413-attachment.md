# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:31:5

# Error details

```
Error: page.waitForResponse: Target page, context or browser has been closed
```

```
Error: page.evaluate: Target page, context or browser has been closed
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
  20 |     await page.goto('/', { waitUntil: 'domcontentloaded' });
  21 | 
  22 | })
  23 | 
  24 | test.afterEach(async({page}) => {
> 25 |     await page.evaluate(() => {
     |                ^ Error: page.evaluate: Target page, context or browser has been closed
  26 |         localStorage.clear();
  27 |         sessionStorage.clear();
  28 |   });
  29 | })
  30 | 
  31 | test('Order process', async({page, homePage, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  32 |     
  33 |     await page.waitForFunction(
  34 |       () =>
  35 |         Boolean(
  36 |           (window as typeof window & {
  37 |             google?: {
  38 |               maps?: {
  39 |                 places?: unknown;
  40 |               };
  41 |             };
  42 |           }).google?.maps?.places,
  43 |         ),
  44 |       { timeout: 15000 },
  45 |     );
  46 |     
  47 |     
  48 |     // Home Page set pickup store
  49 |     await homePage.waitForGoogleMapsScript();
  50 |     await homePage.logoIsVisible();
  51 |     await homePage.clickSetLocationButton();
  52 |     await homePage.selectPickUp();
  53 |     await homePage.enterSearchQuery(storeData.storeLocation);
  54 |     await homePage.selectTargetLocation(storeData.storeLocation);
  55 |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  56 |     await homePage.clickViewMenuButton();
  57 |     
  58 |     
  59 |     // Select product from menu
  60 |     // await menuPage.selectSideMenu(storeData.selectMenu);
  61 |     // await menuPage.selectProduct(storeData.selectProduct);
  62 | 
  63 |     // // // Add product to cart
  64 |     // await productPage.clickAddToOrderButton();
  65 |     // await productPage.clickCartButton();
  66 | 
  67 |     // // // Click check out from my cart page
  68 |     // await mycartPage.clickCheckOut();
  69 | 
  70 |     // // verify check out page
  71 |     // await checkoutPage.clickChevron();
  72 |     // expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  73 |     // expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  74 |     // await checkoutPage.clickContinueAsAGuestButton();
  75 | 
  76 |     // await checkoutPage.completeUserDetails(testData.firstName, 
  77 |     //                                         testData.lastNAme,
  78 |     //                                         testData.email, 
  79 |     //                                         testData.mobile);
  80 |     // await checkoutPage.clickAddPaymentMethod();
  81 | 
  82 |     // await page.waitForTimeout(4000)
  83 | 
  84 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  85 |     // await checkoutPage.clickPayButton();
  86 | 
  87 |     // await orderConfirmationPage.confirmationMessageIsVisible();
  88 |     
  89 | })
  90 | 
```