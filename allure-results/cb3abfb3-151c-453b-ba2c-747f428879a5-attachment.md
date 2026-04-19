# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:41:5

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
  18 | import * as fieldValidationData from '../data/fieldValidationData.json'
  19 | 
  20 | test.beforeEach(async({page, homePage}) => {
  21 |     await page.goto('/');
  22 | 
  23 |     // Home Page set pickup store
  24 |     await homePage.waitForGoogleMapsScript();
  25 |     await homePage.logoIsVisible();
  26 |     await homePage.clickSetLocationButton();
  27 |     await homePage.selectPickUp();
  28 |     await homePage.enterSearchQuery(storeData.storeLocation);
  29 |     await homePage.selectTargetLocation(storeData.storeLocation);
  30 |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  31 |     await homePage.clickViewMenuButton();
  32 | })
  33 | 
  34 | test.afterEach(async({page}) => {
> 35 |     await page.evaluate(() => {
     |                ^ Error: page.evaluate: Target page, context or browser has been closed
  36 |         localStorage.clear();
  37 |         sessionStorage.clear();
  38 |   });
  39 | })
  40 | 
  41 | test('Order process', async({page, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  42 |     // Select product from menu
  43 |     await menuPage.selectSideMenu(storeData.selectMenu);
  44 |     await menuPage.selectProduct(storeData.selectProduct);
  45 | 
  46 |     // // Add product to cart
  47 |     await productPage.clickAddToOrderButton();
  48 |     await productPage.clickCartButton();
  49 | 
  50 |     // // Click check out from my cart page
  51 |     await mycartPage.clickCheckOut();
  52 | 
  53 |     // verify check out page
  54 |     await checkoutPage.clickChevron();
  55 |     expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  56 |     expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  57 |     await checkoutPage.clickContinueAsAGuestButton();
  58 | 
  59 |     await checkoutPage.completeUserDetails(testData.firstName, 
  60 |                                             testData.lastNAme,
  61 |                                             testData.email, 
  62 |                                             testData.mobile);
  63 |     await checkoutPage.clickAddPaymentMethod();
  64 | 
  65 |     await page.waitForTimeout(4000)
  66 | 
  67 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  68 |     // await checkoutPage.clickPayButton();
  69 | 
  70 |     // await orderConfirmationPage.confirmationMessageIsVisible();
  71 |     
  72 | })
  73 | 
```