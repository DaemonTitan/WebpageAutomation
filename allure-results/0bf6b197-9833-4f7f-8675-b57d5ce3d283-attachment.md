# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:36:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('acordian-handle')

```

# Test source

```ts
  1   | import { Locator, Page, expect } from '@playwright/test';
  2   | import { BasePage } from '../pages/basePage';
  3   | 
  4   | export class CheckoutPage extends BasePage {
  5   |     private readonly continueAsAGuestButton: Locator;
  6   |     private readonly storeLocation: Locator;
  7   |     private readonly chevron: Locator;
  8   |     private readonly productName: Locator;
  9   |     private readonly totalPrice: Locator;
  10  |     private readonly firstNameField: Locator;
  11  |     private readonly lastNameField: Locator;
  12  |     private readonly emailAddressField: Locator;
  13  |     private readonly phoneNumberField: Locator;
  14  |     private readonly addPaymentMethod: Locator;
  15  |     private readonly manualCardEntryButton: Locator;
  16  |     private readonly cardNumberField: Locator;
  17  |     private readonly expiryDateField: Locator;
  18  |     private readonly securityCodeField: Locator;
  19  |     private readonly payButon: Locator;
  20  | 
  21  |     constructor(page: Page) {
  22  |         super(page);
  23  |         this.continueAsAGuestButton = page.getByTestId('continue-as-a-gust');
  24  |         this.storeLocation = page.locator('.store_name.d-block.font-weight-bold');
  25  |         this.chevron = page.getByTestId('acordian-handle');
  26  |         this.productName = page.getByTestId('view-receipt-modal-item-name');
  27  |         this.totalPrice = page.getByTestId('checkout-total-amount-price');
  28  |         this.firstNameField = page.getByTestId('enter-firstName-details');
  29  |         this.lastNameField = page.getByTestId('enter-lastName-details');
  30  |         this.emailAddressField = page.getByTestId('enter-email-details');
  31  |         this.phoneNumberField = page.getByTestId('enter-phoneNumber-details');
  32  |         this.addPaymentMethod = page.getByTestId('pay-button');
  33  |         this.manualCardEntryButton = page.locator("button[class='adyen-checkout__button adyen-checkout__button--secondary']");
  34  |         this.cardNumberField = page.locator('adyen-checkout-encryptedCardNumber-1776494958632');
  35  |         this.expiryDateField = page.locator('adyen-checkout-encryptedExpiryDate-1776494958633');
  36  |         this.securityCodeField = page.locator('adyen-checkout-encryptedSecurityCode-1776494958634');
  37  |         this.payButon = page.locator("button[class='adyen-checkout__button adyen-checkout__button--pay']")
  38  | 
  39  |     }
  40  | 
  41  |     async clickChevron(): Promise<void> {
> 42  |         await this.chevron.click();
      |                            ^ Error: locator.click: Target page, context or browser has been closed
  43  |     }
  44  | 
  45  |     async validateSelectProduct(targetProduct: string): Promise<boolean> {
  46  |         const productNameLabel = await this.productName.innerText();
  47  |         if(productNameLabel.toLowerCase()===targetProduct.toLowerCase()) {
  48  |             return true;
  49  |         } else {
  50  |             return false;
  51  |         }
  52  |     }
  53  | 
  54  |     async validateTotalPrice(price: string): Promise<boolean> {
  55  |         await expect(this.totalPrice).toBeVisible({ timeout: 350000 });
  56  |         const totalPriceText = await this.totalPrice.innerText();
  57  |         if(totalPriceText.toLowerCase()===price.toLowerCase()) {
  58  |             return true;
  59  |         } else {
  60  |             return false;
  61  |         }
  62  |     }
  63  | 
  64  |     async validatePickUpLocation(location: string): Promise<boolean> {
  65  |         await this.storeLocation.isVisible();
  66  |         const storeLocationText = await this.storeLocation.innerText();
  67  |         if(storeLocationText.toLowerCase().includes(location.toLowerCase())) {
  68  |             return true;
  69  |         } else {
  70  |             return false;
  71  |         }
  72  |     }
  73  |     
  74  |     async clickContinueAsAGuestButton(): Promise<void> {
  75  |         await this.continueAsAGuestButton.click();
  76  |     }
  77  | 
  78  |     async completeUserDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
  79  |         await this.enterText(this.firstNameField, firstName);
  80  |         await this.enterText(this.lastNameField, lastName);
  81  |         await this.enterText(this.emailAddressField, email);
  82  |         await this.enterText(this.phoneNumberField, phone);
  83  |     }
  84  | 
  85  |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  86  |         if(await this.addPaymentMethod.isDisabled()) {
  87  |             return true;
  88  |         }
  89  |         return false;
  90  |     }
  91  | 
  92  |     async clickAddPaymentMethod(): Promise<void> {
  93  |         await this.addPaymentMethod.click();
  94  |     }
  95  | 
  96  |     async clickManualCardEntryButton(): Promise<void> {
  97  |         await this.manualCardEntryButton.click();
  98  |     }
  99  | 
  100 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  101 |         await this.enterText(this.cardNumberField, cardNumber);
  102 |         await this.enterText(this.expiryDateField, expiryDate);
  103 |         await this.enterText(this.securityCodeField, securityCode);
  104 |     }
  105 | 
  106 |     async clickPayButton(): Promise<void> {
  107 |         await this.payButon.click();
  108 |     }
  109 | }
```