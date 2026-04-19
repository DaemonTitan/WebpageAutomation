/*
* Steps:
* 1. Navigate to webpage:
* 2. Set order option to Pick Up
* 3. Set store location to Dee Why
* 4. Order food from Menu page
* 5. Select item and add to cart
* 6. Go to cart or checkout
* 7. Validate order summary page
* 8. Enter detail as guest
* 9. Enter payment details
* 10. Conform order is sucessfull
*/

import { test, expect } from '../config/pagefixture';
import * as testData from '../data/userDetail.json';
import * as storeData from '../data/storeDetails.json';
import * as fieldValidationData from '../data/fieldValidationData.json'

test.beforeEach(async({page, homePage}) => {
    await page.goto('/');
    await page.waitForTimeout(2000);

    // Home Page set pickup store
    await homePage.clickSetLocationButton();
    await homePage.selectPickUp();
    await homePage.enterSearchQuery(storeData.storeLocation);
    await homePage.selectTargetLocation(storeData.storeLocation);
    await homePage.selectTargetStoreFromList(storeData.storeLocation);
    await homePage.clickViewMenuButton();
})

test.afterEach(async({page}) => {
    await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
  });
})

test('Order process', async({page, menuPage, productPage, mycartPage, checkoutPage, orderConfirmationPage}) => {
    // Select product from menu
    await menuPage.selectSideMenu(storeData.selectMenu);
    await menuPage.selectProduct(storeData.selectProduct);

    // // Add product to cart
    await productPage.clickAddToOrderButton();
    await productPage.clickCartButton();

    // // Click check out from my cart page
    await mycartPage.clickCheckOut();

    // verify check out page
    await checkoutPage.clickChevron();
    expect(checkoutPage.validateSelectProduct(storeData.selectProduct)).toBeTruthy();
    expect(checkoutPage.validateTotalPrice(storeData.totalPrice)).toBeTruthy();
    await checkoutPage.clickContinueAsAGuestButton();


    await checkoutPage.completeUserDetails(testData.firstName, 
                                            testData.lastNAme,
                                            testData.email, 
                                            testData.mobile);
    await checkoutPage.clickAddPaymentMethod();

    await checkoutPage.enterCardDetails(testData.cardNumber, testData.expireDate, testData.cvc);
    await checkoutPage.clickPayButton();

    await orderConfirmationPage.confirmationMessageIsVisible();
    
})
