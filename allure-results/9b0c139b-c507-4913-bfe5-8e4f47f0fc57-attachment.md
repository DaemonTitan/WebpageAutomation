# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:39:5

# Error details

```
Error: expect(locator).toBeEditable() failed

Locator: getByTestId('store-search-input')
Expected: editable
Error: element(s) not found

Call log:
  - Expect "toBeEditable" with timeout 5000ms
  - waiting for getByTestId('store-search-input')

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
  20 |     await page.goto('/');
  21 |     await page.waitForTimeout(2000);
  22 | 
  23 |     // Home Page set pickup store
  24 |     await homePage.clickSetLocationButton();
  25 |     await homePage.selectPickUp();
  26 |     await homePage.enterSearchQuery(storeData.storeLocation);
  27 |     await homePage.selectTargetLocation(storeData.storeLocation);
  28 |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  29 |     await homePage.clickViewMenuButton();
  30 | })
  31 | 
  32 | test.afterEach(async({page}) => {
> 33 |     await page.evaluate(() => {
     |                ^ Error: page.evaluate: Target page, context or browser has been closed
  34 |         localStorage.clear();
  35 |         sessionStorage.clear();
  36 |   });
  37 | })
  38 | 
  39 | test('Order process', async({page, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  40 |     // Select product from menu
  41 |     await menuPage.selectSideMenu(storeData.selectMenu);
  42 |     await menuPage.selectProduct(storeData.selectProduct);
  43 | 
  44 |     // // Add product to cart
  45 |     await productPage.clickAddToOrderButton();
  46 |     await productPage.clickCartButton();
  47 | 
  48 |     // // Click check out from my cart page
  49 |     await mycartPage.clickCheckOut();
  50 | 
  51 |     // verify check out page
  52 |     await checkoutPage.clickChevron();
  53 |     expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  54 |     expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  55 |     await checkoutPage.clickContinueAsAGuestButton();
  56 |     await checkoutPage.completeUserDetails(testData.firstName, 
  57 |                                             testData.lastNAme,
  58 |                                             testData.email, 
  59 |                                             testData.mobile);
  60 |     await checkoutPage.clickAddPaymentMethod();
  61 | 
  62 |     await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  63 |     await checkoutPage.clickPayButton();
  64 | 
  65 |     await orderConfirmationPage.confirmationMessageIsVisible();
  66 |     
  67 | })
  68 | 
```