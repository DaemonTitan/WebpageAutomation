# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:32:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('store-name').first() to be visible

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
  19 | 
  20 | test.beforeEach(async({page, homePage}) => {
  21 |     await page.goto('/', { waitUntil: 'domcontentloaded' });
  22 | 
  23 | })
  24 | 
  25 | test.afterEach(async({page}) => {
> 26 |     await page.evaluate(() => {
     |                ^ Error: page.evaluate: Target page, context or browser has been closed
  27 |         localStorage.clear();
  28 |         sessionStorage.clear();
  29 |   });
  30 | })
  31 | 
  32 | test('Order process', async({page, homePage, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  33 |     
  34 |     const googleMapsScript = page.waitForResponse(
  35 |       response =>
  36 |         response.url().startsWith('https://maps.googleapis.com/maps/api/js') &&
  37 |         response.status() === 200,
  38 |       { timeout: 15000 },
  39 |     );
  40 | 
  41 |     await googleMapsScript;
  42 |     await page.waitForFunction(
  43 |       () =>
  44 |         Boolean(
  45 |           (window as typeof window & {
  46 |             google?: {
  47 |               maps?: {
  48 |                 places?: unknown;
  49 |               };
  50 |             };
  51 |           }).google?.maps?.places,
  52 |         ),
  53 |       { timeout: 15000 },
  54 |     );
  55 |     
  56 |     
  57 |     // Home Page set pickup store
  58 |     await homePage.logoIsVisible();
  59 |     await homePage.clickSetLocationButton();
  60 |     await homePage.selectPickUp();
  61 |     await homePage.enterSearchQuery(storeData.storeLocation);
  62 |     await homePage.selectTargetLocation(storeData.storeLocation);
  63 |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  64 |     await homePage.clickViewMenuButton();
  65 |     
  66 |     
  67 |     // Select product from menu
  68 |     // await menuPage.selectSideMenu(storeData.selectMenu);
  69 |     // await menuPage.selectProduct(storeData.selectProduct);
  70 | 
  71 |     // // // Add product to cart
  72 |     // await productPage.clickAddToOrderButton();
  73 |     // await productPage.clickCartButton();
  74 | 
  75 |     // // // Click check out from my cart page
  76 |     // await mycartPage.clickCheckOut();
  77 | 
  78 |     // // verify check out page
  79 |     // await checkoutPage.clickChevron();
  80 |     // expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  81 |     // expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  82 |     // await checkoutPage.clickContinueAsAGuestButton();
  83 | 
  84 |     // await checkoutPage.completeUserDetails(testData.firstName, 
  85 |     //                                         testData.lastNAme,
  86 |     //                                         testData.email, 
  87 |     //                                         testData.mobile);
  88 |     // await checkoutPage.clickAddPaymentMethod();
  89 | 
  90 |     // await page.waitForTimeout(4000)
  91 | 
  92 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  93 |     // await checkoutPage.clickPayButton();
  94 | 
  95 |     // await orderConfirmationPage.confirmationMessageIsVisible();
  96 |     
  97 | })
  98 | 
```