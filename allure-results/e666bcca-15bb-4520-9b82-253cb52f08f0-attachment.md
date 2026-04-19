# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "/order-processing" until "load"
  navigated to "https://au-uat.pwa.kfc.dev/payment-failure"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - generic [ref=e49]:
            - generic [ref=e50]: PICK UP INFO
            - generic [ref=e53]:
              - img "type" [ref=e55]
              - generic [ref=e56]:
                - generic [ref=e57]:
                  - generic [ref=e58]: KFC Dee Why
                  - text: 36 Fisher Road, Dee Why, NSW, 2099, Australia
                - button "Change" [ref=e59] [cursor=pointer]
          - generic [ref=e60]:
            - generic [ref=e61]: Payment Options
            - generic [ref=e62]:
              - generic [ref=e66]:
                - radiogroup "Choose a payment method":
                  - generic:
                    - generic:
                      - radio "Credit Card" [checked]:
                        - generic:
                          - generic: Credit Card
                    - generic:
                      - generic:
                        - generic:
                          - form:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - generic:
                                      - generic: Card number
                                    - generic:
                                      - iframe [ref=e67]: <p>Your browser does not support iframes.</p>:
                                        - generic [active] [ref=f17e1]:
                                          - textbox [ref=f17e2]
                                          - generic:
                                            - textbox "Card number" [ref=f17e3]:
                                              - /placeholder: ""
                                              - text: 4111 1111 1111 1111
                                            - generic:
                                              - textbox [ref=f17e4]
                                              - textbox [ref=f17e5]
                                      - img "VISA"
                                  - generic:
                                    - generic:
                                      - img "Maestro"
                                    - generic:
                                      - img "American Express"
                                    - generic:
                                      - img "MasterCard"
                                    - generic:
                                      - img "VISA"
                                  - generic:
                                    - generic:
                                      - generic:
                                        - generic: Expiry date
                                      - generic:
                                        - iframe [ref=e68]: <p>Your browser does not support iframes.</p>:
                                          - generic [active] [ref=f25e1]:
                                            - textbox [ref=f25e2]
                                            - generic:
                                              - textbox "Expiry date" [ref=f25e3]:
                                                - /placeholder: ""
                                                - text: 03/30
                                              - generic [ref=f25e4]: Front of card in MM/YY format
                                        - generic:
                                          - img "Field valid"
                                      - generic: Front of card in MM/YY format
                                    - generic:
                                      - generic:
                                        - generic: Security code
                                      - generic:
                                        - iframe [ref=e69]: <p>Your browser does not support iframes.</p>:
                                          - generic [active] [ref=f27e1]:
                                            - textbox [ref=f27e2]
                                            - generic:
                                              - textbox "Security code" [ref=f27e3]:
                                                - /placeholder: ""
                                                - text: "737"
                                              - generic [ref=f27e4]: 3 digits on back of card
                                        - generic:
                                          - img
                                          - img "Security code"
                                        - generic:
                                          - img "Field valid"
                                      - generic: 3 digits on back of card
                          - button "Loading…" [disabled]:
                            - generic:
                              - generic: Loading…
                  - generic:
                    - generic:
                      - radio "PayPal":
                        - generic:
                          - generic: PayPal
                  - generic:
                    - generic:
                      - radio "Google Pay":
                        - generic:
                          - generic: Google Pay
              - generic [ref=e70]:
                - button "Close": Continue Ordering
        - generic [ref=e73]:
          - heading "ORDER SUMMARY" [level=5] [ref=e74]
          - generic [ref=e76]:
            - button "1 ITEM" [ref=e77] [cursor=pointer]:
              - generic [ref=e78]: 1 ITEM
            - generic [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]: "1"
                - generic [ref=e83]:
                  - generic [ref=e84]: 4 Dipping Sauces
                  - generic:
                    - list
              - generic [ref=e85]: $2.00
          - generic [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e89]: Subtotal
              - generic [ref=e90]: $1.82
            - generic [ref=e91]:
              - generic [ref=e92]: GST
              - generic [ref=e93]: $0.18
          - generic [ref=e94]:
            - generic [ref=e95]: "TOTAL:"
            - generic [ref=e96]: $2.00
  - log [ref=e98]
  - iframe
```

# Test source

```ts
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
  91  |         await expect(this.firstNameRequiredAlert).toBeHidden()
  92  |         await this.fillText(this.lastNameField, lastName);
  93  |         await expect(this.lastNameRequiredAlert).toBeHidden()
  94  |         await this.fillText(this.emailAddressField, email);
  95  |         await expect(this.invalidEmailAddressAlert).toBeHidden()
  96  |         await this.fillText(this.phoneNumberField, phone);
  97  |         await expect(this.phoneNumberAlert).toBeHidden()
  98  |     }
  99  | 
  100 |     async validateFirstNameIsRequired(): Promise<void> {
  101 |         await this.firstNameField.fill('');
  102 |         await expect(this.firstNameRequiredAlert).toBeVisible();
  103 |     }
  104 | 
  105 |     async validateLastNameIsRequired(): Promise<void> {
  106 |         await this.lastNameField.fill('');
  107 |         await expect(this.lastNameRequiredAlert).toBeVisible();
  108 |     }
  109 | 
  110 |     async validatePhoneNumberRequires04Prefix(invalidPhoneNumber: string): Promise<void> {
  111 |         await this.fillText(this.phoneNumberField, invalidPhoneNumber);
  112 |         await expect(this.phoneNumberAlert).toBeVisible();
  113 |     }
  114 | 
  115 |     async validateInvalidEmailAddress(invalidEmail: string): Promise<void> {
  116 |         await this.fillText(this.emailAddressField, invalidEmail);
  117 |         await expect(this.invalidEmailAddressAlert).toBeVisible();
  118 |     }
  119 | 
  120 |     async isAddPaymentMethodDisabled(): Promise<boolean> {
  121 |         return await this.addPaymentMethod.isDisabled()
  122 |     }
  123 | 
  124 |     async clickAddPaymentMethod(): Promise<void> {
  125 |         await expect(this.addPaymentMethod).toBeEnabled();
  126 |         await this.addPaymentMethod.click();
  127 |     }
  128 | 
  129 |     async clickManualCardEntryButton(): Promise<void> {
  130 |         await expect(this.manualCardEntryButton).toBeVisible();
  131 |         await this.manualCardEntryButton.click();
  132 |     }
  133 | 
  134 |     async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {
  135 |         const cardNumberField = await this.waitForAdyenField(this.cardNumberFrame, 'Card number')
  136 |         await cardNumberField.fill(cardNumber);
  137 | 
  138 |         const expireDateField = await this.waitForAdyenField(this.expiryDateFrame, 'Expiry date')
  139 |         await expireDateField.fill(expiryDate);
  140 | 
  141 |         const securityCodeField = await this.waitForAdyenField(this.securityCodeFrame, 'Security code')
  142 |         await securityCodeField.fill(securityCode);
  143 |     }
  144 | 
  145 |     async clickPayButton(): Promise<OrderConfirmationPage> {
  146 |         await expect(this.payButon).toBeEnabled();
  147 |         await Promise.all([
> 148 |             this.page.waitForURL('/order-processing'),
      |                       ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  149 |              this.payButon.click()
  150 |         ])
  151 | 
  152 |         return new OrderConfirmationPage(this.page);
  153 |     }
  154 | }
  155 | 
```