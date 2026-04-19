# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:40:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
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
  21 |     //await page.waitForTimeout(2000);
  22 | 
  23 |     // Home Page set pickup store
  24 |     await homePage.clickSetLocationButton();
  25 |     await homePage.selectPickUp();
  26 |     await homePage.enterSearchQuery(storeData.storeLocation);
  27 |     // await homePage.selectTargetLocation(storeData.storeLocation);
  28 |     // await homePage.selectTargetStoreFromList(storeData.storeLocation);
  29 |     // await homePage.clickViewMenuButton();
  30 | 
> 31 |     await page.waitForTimeout(4000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  32 | })
  33 | 
  34 | test.afterEach(async({page}) => {
  35 |     await page.close();
  36 | })
  37 | 
  38 | 
  39 | 
  40 | test('Order process', async({page, menuPage, productPage, mycartPage, checkoutPage}) => {
  41 |     // Select product from menu
  42 |     // await menuPage.selectSideMenu(storeData.selectMenu);
  43 |     // await menuPage.selectProduct(storeData.selectProduct);
  44 | 
  45 |     // // Add product to cart
  46 |     // await productPage.clickAddToOrderButton();
  47 |     // await productPage.clickCartButton();
  48 | 
  49 |     // // Click check out from my cart page
  50 |     // await mycartPage.clickCheckOut();
  51 | 
  52 |     // verify check out page
  53 |     // await checkoutPage.clickChevron();
  54 |     // expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  55 |     // expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  56 |     // await checkoutPage.clickContinueAsAGuestButton();
  57 |     // await checkoutPage.completeUserDetails('test', 'test', 'test@test.com', '0412345678');
  58 | 
  59 |     // await checkoutPage.clickAddPaymentMethod();
  60 | 
  61 |     // await page.waitForTimeout(5000);
  62 |     // await checkoutPage.clickManualCardEntryButton();
  63 | 
  64 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  65 | 
  66 |     
  67 | })
```