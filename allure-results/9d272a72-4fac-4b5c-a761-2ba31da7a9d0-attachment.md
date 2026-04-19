# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:42:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[title="Iframe for security code"]').contentFrame().getByRole('textbox', { name: 'Security code' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - generic [ref=e63]:
              - radiogroup "Choose a payment method" [ref=e68]:
                - generic [ref=e69]:
                  - radio "Credit Card" [checked] [ref=e71] [cursor=pointer]:
                    - generic [ref=e74]: Credit Card
                  - generic [ref=e77]:
                    - form [ref=e78]:
                      - generic [ref=e81]:
                        - generic [ref=e82]:
                          - generic [ref=e84]: Card number
                          - generic [ref=e85]:
                            - iframe [ref=e87]: <p>Your browser does not support iframes.</p>:
                              - generic [active] [ref=f16e1]:
                                - textbox [ref=f16e2]
                                - generic:
                                  - textbox "Card number" [ref=f16e3]:
                                    - /placeholder: ""
                                    - text: 4111 1111 1111 1111
                                  - generic:
                                    - textbox [ref=f16e4]
                                    - textbox [ref=f16e5]
                            - img "VISA" [ref=e88]
                        - generic:
                          - img "Maestro" [ref=e90]
                          - img "American Express" [ref=e92]
                          - img "MasterCard" [ref=e94]
                          - img "VISA" [ref=e96]
                        - generic [ref=e97]:
                          - generic [ref=e98]:
                            - generic [ref=e100]: Expiry date
                            - generic [ref=e101]:
                              - iframe [active] [ref=e103]: <p>Your browser does not support iframes.</p>:
                                - generic [ref=f23e1]:
                                  - textbox [ref=f23e2]
                                  - generic:
                                    - textbox "Expiry date" [active] [ref=f23e3]:
                                      - /placeholder: ""
                                      - text: 03/30
                                    - generic [ref=f23e4]: Front of card in MM/YY format
                              - img "Field valid" [ref=e105]
                            - generic [ref=e106]: Front of card in MM/YY format
                          - generic [ref=e107]:
                            - generic [ref=e109]: Security code
                            - generic [ref=e110]:
                              - iframe [ref=e112]: <p>Your browser does not support iframes.</p>:
                                - generic [active] [ref=f24e1]:
                                  - textbox [ref=f24e2]
                                  - generic:
                                    - textbox "Security code" [ref=f24e3]:
                                      - /placeholder: ""
                                    - generic [ref=f24e4]: 3 digits on back of card
                              - generic [ref=e113]:
                                - img [ref=e114]
                                - img "Security code" [ref=e119]
                            - generic [ref=e125]: 3 digits on back of card
                    - button "Pay $2.00" [ref=e126] [cursor=pointer]:
                      - generic [ref=e127]:
                        - img [ref=e128]
                        - generic [ref=e129]: Pay $2.00
                - radio "PayPal" [ref=e132] [cursor=pointer]:
                  - generic [ref=e135]: PayPal
                - radio "Google Pay" [ref=e138] [cursor=pointer]:
                  - generic [ref=e141]: Google Pay
              - generic [ref=e142]:
                - button "Close": Continue Ordering
        - generic [ref=e145]:
          - heading "ORDER SUMMARY" [level=5] [ref=e146]
          - generic [ref=e148]:
            - button "1 ITEM" [ref=e149] [cursor=pointer]:
              - generic [ref=e150]: 1 ITEM
            - generic [ref=e152]:
              - generic [ref=e153]:
                - generic [ref=e154]: "1"
                - generic [ref=e155]:
                  - generic [ref=e156]: 4 Dipping Sauces
                  - generic:
                    - list
              - generic [ref=e157]: $2.00
          - generic [ref=e159]:
            - generic [ref=e160]:
              - generic [ref=e161]: Subtotal
              - generic [ref=e162]: $1.82
            - generic [ref=e163]:
              - generic [ref=e164]: GST
              - generic [ref=e165]: $0.18
          - generic [ref=e166]:
            - generic [ref=e167]: "TOTAL:"
            - generic [ref=e168]: $2.00
  - log [ref=e169]
  - iframe
```

# Test source

```ts
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
  97  |         await this.firstNameField.click();
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
  149 | 
  150 |         await this.cardNumberFrame
  151 |             .getByRole('textbox', { name: 'Card number' })
  152 |             .fill(cardNumber);
  153 | 
  154 |         await this.expiryDateFrame
  155 |             .getByRole('textbox', { name: 'Expiry date' })
  156 |             .fill(expiryDate);
  157 | 
  158 |         await this.securityCodeFrame
  159 |             .getByRole('textbox', { name: 'Security code' })
> 160 |             .fill(securityCode);
      |              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  161 |     }
  162 | 
  163 |     async clickPayButton(): Promise<OrderConfirmationPage> {
  164 |         await expect(this.payButon).toBeEnabled();
  165 |         await Promise.all([
  166 |             this.page.waitForURL('/order-processing'),
  167 |              this.payButon.click()
  168 |         ])
  169 | 
  170 |         return new OrderConfirmationPage(this.page);
  171 |     }
  172 | }
  173 | 
```