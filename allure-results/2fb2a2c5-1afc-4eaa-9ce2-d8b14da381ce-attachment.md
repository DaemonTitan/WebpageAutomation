# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:38:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('input') resolved to 4 elements:
    1) <input tabindex="-1" id="shiftTabField" autocomplete="off" aria-hidden="true"/> aka locator('#shiftTabField')
    2) <input type="text" maxlength="24" placeholder="" data-type="gsf" inputmode="numeric" aria-invalid="false" aria-required="true" autocomplete="cc-number" aria-label="Card number" class="js-iframe-input input-field" data-fieldtype="encryptedCardNumber" id="adyen-checkout-encryptedCardNumber-1776525193182" aria-describedby="adyen-checkout-encryptedCardNumber-1776525193182-ariaContext"/> aka getByRole('textbox', { name: 'Card number' })
    3) <input type="text" name="cc-exp" tabindex="-1" id="acDtField" aria-hidden="true" autocomplete="cc-exp" class="autocomplete-field"/> aka locator('#acDtField')
    4) <input type="text" tabindex="-1" id="acNmField" name="cc-name" aria-hidden="true" autocomplete="cc-name" class="autocomplete-field"/> aka locator('#acNmField')

Call log:
  - waiting for locator('iframe[title="Iframe for card number"]').contentFrame().locator('input')

```

# Test source

```ts
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
  34  |         
  35  |         
  36  |         this.cardNumberField = page.locator('.adyen-checkout__input.adyen-checkout__input--large.adyen-checkout__card__cardNumber__input');
  37  |         this.expiryDateField = page.locator('.adyen-checkout__input.adyen-checkout__input--small.adyen-checkout__card__exp-date__input');
  38  |         this.securityCodeField = page.locator('.adyen-checkout__input.adyen-checkout__input--small.adyen-checkout__card__cvc__input');
  39  |         this.payButon = page.locator("button[class='adyen-checkout__button adyen-checkout__button--pay']")
  40  | 
  41  |     }
  42  | 
  43  |     async clickChevron(): Promise<void> {
  44  |         await expect(this.chevron).toBeVisible({ timeout: 350000 });
  45  |         await this.chevron.click();
  46  |     }
  47  | 
  48  |     async validateSelectProduct(targetProduct: string): Promise<boolean> {
  49  |         const productNameLabel = await this.productName.innerText();
  50  |         if(productNameLabel.toLowerCase()===targetProduct.toLowerCase()) {
  51  |             return true;
  52  |         } else {
  53  |             return false;
  54  |         }
  55  |     }
  56  | 
  57  |     async validateTotalPrice(price: string): Promise<boolean> {
  58  |         await expect(this.totalPrice).toBeVisible({ timeout: 350000 });
  59  |         const totalPriceText = await this.totalPrice.innerText();
  60  |         if(totalPriceText.toLowerCase()===price.toLowerCase()) {
  61  |             return true;
  62  |         } else {
  63  |             return false;
  64  |         }
  65  |     }
  66  | 
  67  |     async validatePickUpLocation(location: string): Promise<boolean> {
  68  |         await this.storeLocation.isVisible();
  69  |         const storeLocationText = await this.storeLocation.innerText();
  70  |         if(storeLocationText.toLowerCase().includes(location.toLowerCase())) {
  71  |             return true;
  72  |         } else {
  73  |             return false;
  74  |         }
  75  |     }
  76  |     
  77  |     async clickContinueAsAGuestButton(): Promise<void> {
  78  |         await expect(this.continueAsAGuestButton).toBeVisible({ timeout: 350000 });
  79  |         await this.continueAsAGuestButton.click();
  80  |     }
  81  | 
  82  |     async completeUserDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
  83  |         await this.fillText(this.firstNameField, firstName);
  84  |         await this.fillText(this.lastNameField, lastName);
  85  |         await this.fillText(this.emailAddressField, email);
  86  |         await this.fillText(this.phoneNumberField, phone);
  87  |     }
  88  | 
  89  |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  90  |         return await this.addPaymentMethod.isDisabled()
  91  |     }
  92  | 
  93  |     async clickAddPaymentMethod(): Promise<void> {
  94  |         await expect(this.addPaymentMethod).toBeEnabled();
  95  |         await this.addPaymentMethod.click();
  96  |     }
  97  | 
  98  |     async clickManualCardEntryButton(): Promise<void> {
  99  |         await expect(this.manualCardEntryButton).toBeVisible();
  100 |         await this.manualCardEntryButton.click();
  101 |     }
  102 | 
  103 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  104 |         const cardNumberFrame = this.page.frameLocator('iframe[title="Iframe for card number"]');
  105 |         const expiryDateFrame = this.page.frameLocator('iframe[title="Iframe for expiry date"]');
  106 |         const securityCodeFrame = this.page.frameLocator('iframe[title="Iframe for security code"]');
  107 | 
> 108 |         await cardNumberFrame.locator('input').fill(cardNumber);
      |                                                ^ Error: locator.fill: Error: strict mode violation: locator('input') resolved to 4 elements:
  109 |         await expiryDateFrame.locator('input').fill(expiryDate);
  110 |         await securityCodeFrame.locator('input').fill(securityCode);
  111 |     }
  112 | 
  113 |     async clickPayButton(): Promise<void> {
  114 |         await expect(this.payButon).toBeEnabled();
  115 |         await this.payButon.click();
  116 |     }
  117 | }
  118 | 
```