# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:36:5

# Error details

```
Error: locator.innerText: Test ended.
Call log:
  - waiting for getByTestId('checkout-total-amount-price')

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | 
  4  | export class CheckoutPage extends BasePage {
  5  |     private readonly continueAsAGuestButton: Locator;
  6  |     private readonly storeLocation: Locator;
  7  |     private readonly chevron: Locator;
  8  |     private readonly totalPrice: Locator;
  9  |     private readonly firstNameField: Locator;
  10 |     private readonly lastNameField: Locator;
  11 |     private readonly emailAddressField: Locator;
  12 |     private readonly phoneNumberField: Locator;
  13 |     private readonly addPaymentMethod: Locator;
  14 |     private readonly manualCardEntryButton: Locator;
  15 |     private readonly cardNumberField: Locator;
  16 |     private readonly expiryDateField: Locator;
  17 |     private readonly securityCodeField: Locator;
  18 |     private readonly payButon: Locator;
  19 | 
  20 |     constructor(page: Page) {
  21 |         super(page);
  22 |         this.continueAsAGuestButton = page.getByTestId('continue-as-a-gust');
  23 |         this.storeLocation = page.locator('.store_name.d-block.font-weight-bold');
  24 |         this.chevron = page.getByTestId('acordian-handle');
  25 |         this.totalPrice = page.getByTestId('checkout-total-amount-price');
  26 |         this.firstNameField = page.getByTestId('enter-firstName-details');
  27 |         this.lastNameField = page.getByTestId('enter-lastName-details');
  28 |         this.emailAddressField = page.getByTestId('enter-email-details');
  29 |         this.phoneNumberField = page.getByTestId('enter-phoneNumber-details');
  30 |         this.addPaymentMethod = page.getByTestId('pay-button');
  31 |         this.manualCardEntryButton = page.locator("button[class='adyen-checkout__button adyen-checkout__button--secondary']");
  32 |         this.cardNumberField = page.locator('adyen-checkout-encryptedCardNumber-1776494958632');
  33 |         this.expiryDateField = page.locator('adyen-checkout-encryptedExpiryDate-1776494958633');
  34 |         this.securityCodeField = page.locator('adyen-checkout-encryptedSecurityCode-1776494958634');
  35 |         this.payButon = page.locator("button[class='adyen-checkout__button adyen-checkout__button--pay']")
  36 | 
  37 |     }
  38 | 
  39 |     async validateTotalPrice(price: string): Promise<boolean> {
> 40 |         const totalPriceText = await this.totalPrice.innerText();
     |                                                      ^ Error: locator.innerText: Test ended.
  41 |         if(totalPriceText.toLowerCase()===price.toLowerCase()) {
  42 |             return true;
  43 |         } else {
  44 |             return false;
  45 |         }
  46 |     }
  47 | 
  48 |     async validatePickUpLocation(location: string): Promise<boolean> {
  49 |         await this.storeLocation.isVisible();
  50 |         const storeLocationText = await this.storeLocation.innerText();
  51 |         if(storeLocationText.toLowerCase().includes(location.toLowerCase())) {
  52 |             return true;
  53 |         } else {
  54 |             return false;
  55 |         }
  56 |     }
  57 |     
  58 |     async clickContinueAsAGuestButton(): Promise<void> {
  59 |         await this.continueAsAGuestButton.click();
  60 |     }
  61 | 
  62 |     async completeUserDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
  63 |         await this.enterText(this.firstNameField, firstName);
  64 |         await this.enterText(this.lastNameField, lastName);
  65 |         await this.enterText(this.emailAddressField, email);
  66 |         await this.enterText(this.phoneNumberField, phone);
  67 |     }
  68 | 
  69 |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  70 |         if(await this.addPaymentMethod.isDisabled()) {
  71 |             return true;
  72 |         }
  73 |         return false;
  74 |     }
  75 | 
  76 |     async clickAddPaymentMethod(): Promise<void> {
  77 |         await this.addPaymentMethod.click();
  78 |     }
  79 | 
  80 |     async clickManualCardEntryButton(): Promise<void> {
  81 |         await this.manualCardEntryButton.click();
  82 |     }
  83 | 
  84 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  85 |         await this.enterText(this.cardNumberField, cardNumber);
  86 |         await this.enterText(this.expiryDateField, expiryDate);
  87 |         await this.enterText(this.securityCodeField, securityCode);
  88 |     }
  89 | 
  90 |     async clickPayButton(): Promise<void> {
  91 |         await this.payButon.click();
  92 |     }
  93 | }
```