# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: guestInfoValidation.spec.ts >> Field level validation
- Location: src/tests/guestInfoValidation.spec.ts:49:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('enter-firstName-details')
    - locator resolved to <input value="" maxlength="" aria-required="" name="firstName" inputmode="text" autocomplete="off" class="formElement    " id="mt-input-firstName" placeholder="First Name" data-testid="enter-firstName-details"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="mt-input-firstName" class="firstName-masktextlabel" data-testid="firstName-masktextlabel-id">First Name*</label> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <label for="mt-input-firstName" class="firstName-masktextlabel" data-testid="firstName-masktextlabel-id">First Name*</label> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="secondary-header-container" data-testid="secondary-header-container">…</div> from <div id="header-container">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="mt-input-firstName" class="firstName-masktextlabel" data-testid="firstName-masktextlabel-id">First Name*</label> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="secondary-header-container" data-testid="secondary-header-container">…</div> from <div id="header-container">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="mt-input-firstName" class="firstName-masktextlabel" data-testid="firstName-masktextlabel-id">First Name*</label> intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e8]:
    - button "Close" [ref=e11] [cursor=pointer]: Back to Cart
    - generic [ref=e15] [cursor=pointer]:
      - img "help icon" [ref=e16]
      - text: Need Help?
  - generic [ref=e19]:
    - img "cart" [ref=e20]
    - generic [ref=e22]:
      - heading "Checkout" [level=3] [ref=e23]
      - generic [ref=e25]: Secure Checkout
    - generic [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]: Sign in to Your Account
            - button "Close" [ref=e32] [cursor=pointer]: Sign In
          - generic [ref=e33]:
            - generic [ref=e34]: Continue as a Guest
            - generic [ref=e36]:
              - generic [ref=e37]:
                - textbox "First Name*" [ref=e38]:
                  - /placeholder: First Name
                - generic [ref=e39]: First Name*
              - generic [ref=e40]:
                - textbox "Last Name*" [ref=e41]:
                  - /placeholder: Last Name
                - generic [ref=e42]: Last Name*
              - generic [ref=e43]:
                - textbox "Email Address*" [ref=e44]:
                  - /placeholder: Email Address
                - generic [ref=e45]: Email Address*
              - generic [ref=e46]:
                - textbox "Phone Number*" [ref=e47]:
                  - /placeholder: Phone Number
                - generic [ref=e48]: Phone Number*
        - generic [ref=e49]:
          - generic [ref=e50]: PICK UP INFO
          - generic [ref=e53]:
            - img "type" [ref=e55]
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: KFC Dee Why
                - text: 36 Fisher Road, Dee Why, NSW, 2099, Australia
              - button "Change" [ref=e59] [cursor=pointer]
        - generic [ref=e63]: Please add your Contact details above to enable adding a Payment Method.
        - generic [ref=e64]:
          - generic [ref=e65]: Payment Options
          - generic [ref=e67]:
            - button "Close" [disabled]: Add Payment Method
      - generic [ref=e70]:
        - heading "ORDER SUMMARY" [level=5] [ref=e71]
        - button "1 ITEM" [ref=e74] [cursor=pointer]:
          - generic [ref=e75]: 1 ITEM
        - generic [ref=e77]:
          - generic [ref=e78]:
            - generic [ref=e79]: Subtotal
            - generic [ref=e80]: $1.82
          - generic [ref=e81]:
            - generic [ref=e82]: GST
            - generic [ref=e83]: $0.18
        - generic [ref=e84]:
          - generic [ref=e85]: "TOTAL:"
          - generic [ref=e86]: $2.00
```

# Test source

```ts
  1   | import { FrameLocator, Locator, Page, expect } from '@playwright/test';
  2   | import { BasePage } from '../pages/basePage';
  3   | import { OrderConfirmationPage } from './orderConfirmationPage';
  4   | 
  5   | export class CheckoutPage extends BasePage {
  6   |     private readonly continueAsAGuestButton: Locator;
  7   |     private readonly storeLocation: Locator;
  8   |     private readonly chevron: Locator;
  9   |     private readonly productName: Locator;
  10  |     private readonly totalPrice: Locator;
  11  |     private readonly firstNameField: Locator;
  12  |     private readonly firstNameRequiredAlert: Locator;
  13  |     private readonly lastNameField: Locator;
  14  |     private readonly lastNameRequiredAlert: Locator;
  15  |     private readonly emailAddressField: Locator;
  16  |     private readonly invalidEmailAddressAlert: Locator;
  17  |     private readonly phoneNumberField: Locator;
  18  |     private readonly phoneNumberAlert: Locator;
  19  |     private readonly addPaymentMethod: Locator;
  20  |     private readonly manualCardEntryButton: Locator;
  21  |     private readonly cardNumberFrame: FrameLocator;
  22  |     private readonly expiryDateFrame: FrameLocator;
  23  |     private readonly securityCodeFrame: FrameLocator;
  24  |     private readonly payButon: Locator;
  25  | 
  26  |     constructor(page: Page) {
  27  |         super(page);
  28  |         this.continueAsAGuestButton = page.getByTestId('continue-as-a-gust');
  29  |         this.storeLocation = page.locator('.store_name.d-block.font-weight-bold');
  30  |         this.chevron = page.getByTestId('acordian-handle');
  31  |         this.productName = page.getByTestId('view-receipt-modal-item-name');
  32  |         this.totalPrice = page.getByTestId('checkout-total-amount-price');
  33  |         this.firstNameField = page.getByTestId('enter-firstName-details');
  34  |         this.firstNameRequiredAlert = page.getByText('Enter your first name');
  35  |         this.lastNameField = page.getByTestId('enter-lastName-details');
  36  |         this.lastNameRequiredAlert = page.getByText('Enter your last name');
  37  |         this.emailAddressField = page.getByTestId('enter-email-details');
  38  |         this.invalidEmailAddressAlert = page.getByText('Invalid email address');
  39  |         this.phoneNumberField = page.getByTestId('enter-phoneNumber-details');
  40  |         this.phoneNumberAlert = page.locator("div[id='user-maskinput'] span[role='alert']");
  41  |         this.addPaymentMethod = page.getByTestId('pay-button');
  42  |         this.manualCardEntryButton = page.locator("button[class='adyen-checkout__button adyen-checkout__button--secondary']");
  43  |         this.cardNumberFrame = page.frameLocator('iframe[title="Iframe for card number"]');
  44  |         this.expiryDateFrame = page.frameLocator('iframe[title="Iframe for expiry date"]');
  45  |         this.securityCodeFrame = page.frameLocator('iframe[title="Iframe for security code"]');
  46  |         this.payButon = page.locator("button[class='adyen-checkout__button adyen-checkout__button--pay']")
  47  | 
  48  |     }
  49  | 
  50  |     async clickChevron(): Promise<void> {
  51  |         await expect(this.chevron).toBeVisible({ timeout: 350000 });
  52  |         await this.chevron.click();
  53  |     }
  54  | 
  55  |     async validateSelectProduct(targetProduct: string): Promise<boolean> {
  56  |         const productNameLabel = await this.productName.innerText();
  57  |         if(productNameLabel.toLowerCase()===targetProduct.toLowerCase()) {
  58  |             return true;
  59  |         } else {
  60  |             return false;
  61  |         }
  62  |     }
  63  | 
  64  |     async validateTotalPrice(price: string): Promise<boolean> {
  65  |         await expect(this.totalPrice).toBeVisible({ timeout: 350000 });
  66  |         const totalPriceText = await this.totalPrice.innerText();
  67  |         if(totalPriceText.toLowerCase()===price.toLowerCase()) {
  68  |             return true;
  69  |         } else {
  70  |             return false;
  71  |         }
  72  |     }
  73  | 
  74  |     async validatePickUpLocation(location: string): Promise<boolean> {
  75  |         await this.storeLocation.isVisible();
  76  |         const storeLocationText = await this.storeLocation.innerText();
  77  |         if(storeLocationText.toLowerCase().includes(location.toLowerCase())) {
  78  |             return true;
  79  |         } else {
  80  |             return false;
  81  |         }
  82  |     }
  83  |     
  84  |     async clickContinueAsAGuestButton(): Promise<void> {
  85  |         await expect(this.continueAsAGuestButton).toBeVisible({ timeout: 350000 });
  86  |         await this.continueAsAGuestButton.click();
  87  |     }
  88  | 
  89  |     async completeUserDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
  90  |         await this.fillText(this.firstNameField, firstName);
  91  |         await this.fillText(this.lastNameField, lastName);
  92  |         await this.fillText(this.emailAddressField, email);
  93  |         await this.fillText(this.phoneNumberField, phone);
  94  |     }
  95  | 
  96  |     async validateFirstNameIsRequired(): Promise<void> {
> 97  |         await this.firstNameField.click();
      |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  98  |         await this.firstNameField.clear();
  99  |         await this.firstNameField.blur();
  100 |         await expect(this.firstNameRequiredAlert).toBeVisible();
  101 |     }
  102 | 
  103 |     async validateLastNameIsRequired(): Promise<void> {
  104 |         await this.lastNameField.click();
  105 |         await this.lastNameField.clear();
  106 |         await this.lastNameField.blur();
  107 |         await expect(this.lastNameRequiredAlert).toBeVisible();
  108 |     }
  109 | 
  110 |     async validatePhoneNumberRequires04Prefix(invalidPhoneNumber: string): Promise<void> {
  111 |         await this.fillText(this.phoneNumberField, invalidPhoneNumber);
  112 |         await this.phoneNumberField.blur();
  113 |         await expect(this.phoneNumberAlert).toBeVisible();
  114 |     }
  115 | 
  116 |     async validatePhoneNumberAccepts04Prefix(validPhoneNumber: string): Promise<void> {
  117 |         await this.fillText(this.phoneNumberField, validPhoneNumber);
  118 |         await this.phoneNumberField.blur();
  119 |         await expect(this.phoneNumberAlert).toBeHidden();
  120 |     }
  121 | 
  122 |     async validateInvalidEmailAddress(invalidEmail: string): Promise<void> {
  123 |         await this.fillText(this.emailAddressField, invalidEmail);
  124 |         await this.emailAddressField.blur();
  125 |         await expect(this.invalidEmailAddressAlert).toBeVisible();
  126 |     }
  127 | 
  128 |     async validateValidEmailAddress(validEmail: string): Promise<void> {
  129 |         await this.fillText(this.emailAddressField, validEmail);
  130 |         await this.emailAddressField.blur();
  131 |         await expect(this.invalidEmailAddressAlert).toBeHidden();
  132 |     }
  133 | 
  134 |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  135 |         return await this.addPaymentMethod.isDisabled()
  136 |     }
  137 | 
  138 |     async clickAddPaymentMethod(): Promise<void> {
  139 |         await expect(this.addPaymentMethod).toBeEnabled();
  140 |         await this.addPaymentMethod.click();
  141 |     }
  142 | 
  143 |     async clickManualCardEntryButton(): Promise<void> {
  144 |         await expect(this.manualCardEntryButton).toBeVisible();
  145 |         await this.manualCardEntryButton.click();
  146 |     }
  147 | 
  148 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  149 |         const cardNumberField = await this.waitForAdyenField(this.cardNumberFrame, 'Card number')
  150 |         await cardNumberField.fill(cardNumber);
  151 | 
  152 |         const expireDateField = await this.waitForAdyenField(this.expiryDateFrame, 'Expiry date')
  153 |         await expireDateField.fill(expiryDate);
  154 | 
  155 |         const securityCodeField = await this.waitForAdyenField(this.securityCodeFrame, 'Security code')
  156 |         await securityCodeField.fill(securityCode);
  157 |     }
  158 | 
  159 |     async clickPayButton(): Promise<OrderConfirmationPage> {
  160 |         await expect(this.payButon).toBeEnabled();
  161 |         await Promise.all([
  162 |             this.page.waitForURL('/order-processing'),
  163 |              this.payButon.click()
  164 |         ])
  165 | 
  166 |         return new OrderConfirmationPage(this.page);
  167 |     }
  168 | }
  169 | 
```