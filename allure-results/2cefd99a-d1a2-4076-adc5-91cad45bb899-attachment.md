# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:60:5

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
  1   | /*
  2   | * Steps:
  3   | * 1. Navigate to webpage:
  4   | * 2. Set order option to Pick Up
  5   | * 3. Set store location to Dee Why
  6   | * 4. Order food from Menu page
  7   | * 5. Select item and add to cart
  8   | * 6. Go to cart or checkout
  9   | * 7. Validate order summary page
  10  | * 8. Enter detail as guest
  11  | * 9. Enter payment details
  12  | * 10. Conform order is sucessfull
  13  | */
  14  | 
  15  | import { test, expect } from '../config/pagefixture';
  16  | import * as testData from '../data/userDetail.json';
  17  | import * as storeData from '../data/storeDetails.json';
  18  | 
  19  | const stripResponseHeaders = (headers: Headers) => {
  20  |   const strippedHeaders: Record<string, string> = {};
  21  | 
  22  |   for (const [key, value] of headers) {
  23  |     if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
  24  |       strippedHeaders[key] = value;
  25  |     }
  26  |   }
  27  | 
  28  |   return strippedHeaders;
  29  | };
  30  | 
  31  | const proxyKfcOrigin = async (page: Page) => {
  32  |   await page.route('https://au-uat.pwa.kfc.dev/**', async route => {
  33  |     const request = route.request();
  34  |     const response = await fetch(request.url(), {
  35  |       method: request.method(),
  36  |       body: ['GET', 'HEAD'].includes(request.method()) ? undefined : request.postDataBuffer(),
  37  |     });
  38  | 
  39  |     await route.fulfill({
  40  |       status: response.status,
  41  |       headers: stripResponseHeaders(response.headers),
  42  |       body: Buffer.from(await response.arrayBuffer()),
  43  |     });
  44  |   });
  45  | };
  46  | 
  47  | 
  48  | test.beforeEach(async({page, homePage}) => {
  49  |     await page.goto('/', { waitUntil: 'domcontentloaded' });
  50  | 
  51  | })
  52  | 
  53  | test.afterEach(async({page}) => {
> 54  |     await page.evaluate(() => {
      |                ^ Error: page.evaluate: Target page, context or browser has been closed
  55  |         localStorage.clear();
  56  |         sessionStorage.clear();
  57  |   });
  58  | })
  59  | 
  60  | test('Order process', async({page, homePage, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
  61  |     
  62  |     const googleMapsScript = page.waitForResponse(
  63  |       response =>
  64  |         response.url().startsWith('https://maps.googleapis.com/maps/api/js') &&
  65  |         response.status() === 200,
  66  |       { timeout: 15000 },
  67  |     );
  68  | 
  69  |     await googleMapsScript;
  70  |     await page.waitForFunction(
  71  |       () =>
  72  |         Boolean(
  73  |           (window as typeof window & {
  74  |             google?: {
  75  |               maps?: {
  76  |                 places?: unknown;
  77  |               };
  78  |             };
  79  |           }).google?.maps?.places,
  80  |         ),
  81  |       { timeout: 15000 },
  82  |     );
  83  |     
  84  |     
  85  |     // Home Page set pickup store
  86  |     await homePage.logoIsVisible();
  87  |     await homePage.clickSetLocationButton();
  88  |     await homePage.selectPickUp();
  89  |     await homePage.enterSearchQuery(storeData.storeLocation);
  90  |     await homePage.selectTargetLocation(storeData.storeLocation);
  91  |     await homePage.selectTargetStoreFromList(storeData.storeLocation);
  92  |     await homePage.clickViewMenuButton();
  93  |     
  94  |     
  95  |     // Select product from menu
  96  |     // await menuPage.selectSideMenu(storeData.selectMenu);
  97  |     // await menuPage.selectProduct(storeData.selectProduct);
  98  | 
  99  |     // // // Add product to cart
  100 |     // await productPage.clickAddToOrderButton();
  101 |     // await productPage.clickCartButton();
  102 | 
  103 |     // // // Click check out from my cart page
  104 |     // await mycartPage.clickCheckOut();
  105 | 
  106 |     // // verify check out page
  107 |     // await checkoutPage.clickChevron();
  108 |     // expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
  109 |     // expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
  110 |     // await checkoutPage.clickContinueAsAGuestButton();
  111 | 
  112 |     // await checkoutPage.completeUserDetails(testData.firstName, 
  113 |     //                                         testData.lastNAme,
  114 |     //                                         testData.email, 
  115 |     //                                         testData.mobile);
  116 |     // await checkoutPage.clickAddPaymentMethod();
  117 | 
  118 |     // await page.waitForTimeout(4000)
  119 | 
  120 |     // await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
  121 |     // await checkoutPage.clickPayButton();
  122 | 
  123 |     // await orderConfirmationPage.confirmationMessageIsVisible();
  124 |     
  125 | })
  126 | 
```