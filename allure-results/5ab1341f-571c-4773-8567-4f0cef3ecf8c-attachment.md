# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:39:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[title="Iframe for card number"]').contentFrame().getByRole('textbox', { name: 'Card number' })

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
            - generic [ref=e35]:
              - generic [ref=e36]:
                - generic [ref=e37]:
                  - textbox "First Name*" [disabled] [ref=e38]:
                    - /placeholder: First Name
                    - text: John
                  - generic [ref=e39] [cursor=pointer]: First Name*
                - generic [ref=e40]:
                  - textbox "Last Name*" [disabled] [ref=e41]:
                    - /placeholder: Last Name
                    - text: Smith
                  - generic [ref=e42] [cursor=pointer]: Last Name*
                - generic [ref=e43]:
                  - textbox "Email Address*" [disabled] [ref=e44]:
                    - /placeholder: Email Address
                    - text: john.smith@mail.com
                  - generic [ref=e45] [cursor=pointer]: Email Address*
                - generic [ref=e46]:
                  - textbox "Phone Number*" [disabled] [ref=e47]:
                    - /placeholder: Phone Number
                    - text: "0412345678"
                  - generic [ref=e48] [cursor=pointer]: Phone Number*
              - button "Edit" [ref=e49] [cursor=pointer]
        - generic [ref=e50]:
          - generic [ref=e51]: PICK UP INFO
          - generic [ref=e54]:
            - img "type" [ref=e56]
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: KFC Dee Why
                - text: 36 Fisher Road, Dee Why, NSW, 2099, Australia
              - button "Change" [ref=e60] [cursor=pointer]
        - generic [ref=e61]:
          - generic [ref=e62]: Payment Options
          - generic [ref=e64]:
            - button "Close": Continue Ordering
      - generic [ref=e67]:
        - heading "ORDER SUMMARY" [level=5] [ref=e68]
        - generic [ref=e70]:
          - button "1 ITEM" [ref=e71] [cursor=pointer]:
            - generic [ref=e72]: 1 ITEM
          - generic [ref=e74]:
            - generic [ref=e75]:
              - generic [ref=e76]: "1"
              - generic [ref=e77]:
                - generic [ref=e78]: 4 Dipping Sauces
                - generic:
                  - list
            - generic [ref=e79]: $2.00
        - generic [ref=e81]:
          - generic [ref=e82]:
            - generic [ref=e83]: Subtotal
            - generic [ref=e84]: $1.82
          - generic [ref=e85]:
            - generic [ref=e86]: GST
            - generic [ref=e87]: $0.18
        - generic [ref=e88]:
          - generic [ref=e89]: "TOTAL:"
          - generic [ref=e90]: $2.00
```

# Test source

```ts
  13  |     private readonly emailAddressField: Locator;
  14  |     private readonly phoneNumberField: Locator;
  15  |     private readonly addPaymentMethod: Locator;
  16  |     private readonly manualCardEntryButton: Locator;
  17  |     private readonly cardNumberFrame: FrameLocator;
  18  |     private readonly expiryDateFrame: FrameLocator;
  19  |     private readonly securityCodeFrame: FrameLocator;
  20  |     private readonly cardNumberField: Locator;
  21  |     private readonly expiryDateField: Locator;
  22  |     private readonly securityCodeField: Locator;
  23  |     private readonly payButon: Locator;
  24  | 
  25  |     constructor(page: Page) {
  26  |         super(page);
  27  |         this.continueAsAGuestButton = page.getByTestId('continue-as-a-gust');
  28  |         this.storeLocation = page.locator('.store_name.d-block.font-weight-bold');
  29  |         this.chevron = page.getByTestId('acordian-handle');
  30  |         this.productName = page.getByTestId('view-receipt-modal-item-name');
  31  |         this.totalPrice = page.getByTestId('checkout-total-amount-price');
  32  |         this.firstNameField = page.getByTestId('enter-firstName-details');
  33  |         this.lastNameField = page.getByTestId('enter-lastName-details');
  34  |         this.emailAddressField = page.getByTestId('enter-email-details');
  35  |         this.phoneNumberField = page.getByTestId('enter-phoneNumber-details');
  36  |         this.addPaymentMethod = page.getByTestId('pay-button');
  37  |         this.manualCardEntryButton = page.locator("button[class='adyen-checkout__button adyen-checkout__button--secondary']");
  38  |         
  39  |         this.cardNumberFrame = page.frameLocator('iframe[title="Iframe for card number"]');
  40  |         this.expiryDateFrame = page.frameLocator('iframe[title="Iframe for expiry date"]');
  41  |         this.securityCodeFrame = page.frameLocator('iframe[title="Iframe for security code"]');
  42  |         
  43  |         this.cardNumberField = this.cardNumberFrame.getByRole('textbox', { name: 'Card number' })
  44  |         this.expiryDateField = this.expiryDateFrame.getByRole('textbox', { name: 'Expiry date' })
  45  |         this.securityCodeField = this.securityCodeFrame.getByRole('textbox', { name: 'Security code' })
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
  96  |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  97  |         return await this.addPaymentMethod.isDisabled()
  98  |     }
  99  | 
  100 |     async clickAddPaymentMethod(): Promise<void> {
  101 |         await expect(this.addPaymentMethod).toBeEnabled();
  102 |         await this.addPaymentMethod.click();
  103 |     }
  104 | 
  105 |     async clickManualCardEntryButton(): Promise<void> {
  106 |         await expect(this.manualCardEntryButton).toBeVisible();
  107 |         await this.manualCardEntryButton.click();
  108 |     }
  109 | 
  110 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  111 |         await this.cardNumberFrame
  112 |             .getByRole('textbox', { name: 'Card number' })
> 113 |             .fill(cardNumber);
      |              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  114 | 
  115 |         await this.expiryDateFrame
  116 |             .getByRole('textbox', { name: 'Expiry date' })
  117 |             .fill(expiryDate);
  118 | 
  119 |         await this.securityCodeFrame
  120 |             .getByRole('textbox', { name: 'Security code' })
  121 |             .fill(securityCode);
  122 |     }
  123 | 
  124 |     async clickPayButton(): Promise<OrderConfirmationPage> {
  125 |         await expect(this.payButon).toBeEnabled();
  126 |         await this.payButon.click();
  127 | 
  128 |         const orderConfirmationPage = new OrderConfirmationPage(this.page);
  129 |         await orderConfirmationPage.waitForPageLoad();
  130 |         return orderConfirmationPage;
  131 |     }
  132 | }
  133 | 
```