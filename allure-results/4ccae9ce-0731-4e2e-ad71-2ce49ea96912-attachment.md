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
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[title="Iframe for card number"]').contentFrame().getByRole('textbox', { name: 'Card number' }) to be visible

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
                  - generic [ref=e78]:
                    - generic [ref=e80]:
                      - img "Logo of Click to Pay"
                      - img "Logo of Mastercard"
                      - img "Logo of Visa"
                    - generic [ref=e85]: We are checking to see if you have any saved cards with Click to Pay...
                - radio "PayPal" [ref=e88] [cursor=pointer]:
                  - generic [ref=e91]: PayPal
                - radio "Google Pay" [ref=e94] [cursor=pointer]:
                  - generic [ref=e97]: Google Pay
              - generic [ref=e98]:
                - button "Close": Continue Ordering
        - generic [ref=e101]:
          - heading "ORDER SUMMARY" [level=5] [ref=e102]
          - generic [ref=e104]:
            - button "1 ITEM" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 1 ITEM
            - generic [ref=e108]:
              - generic [ref=e109]:
                - generic [ref=e110]: "1"
                - generic [ref=e111]:
                  - generic [ref=e112]: 4 Dipping Sauces
                  - generic:
                    - list
              - generic [ref=e113]: $2.00
          - generic [ref=e115]:
            - generic [ref=e116]:
              - generic [ref=e117]: Subtotal
              - generic [ref=e118]: $1.82
            - generic [ref=e119]:
              - generic [ref=e120]: GST
              - generic [ref=e121]: $0.18
          - generic [ref=e122]:
            - generic [ref=e123]: "TOTAL:"
            - generic [ref=e124]: $2.00
  - generic:
    - generic:
      - generic:
        - iframe
  - log [ref=e125]
  - iframe
```

# Test source

```ts
  1  | import { FrameLocator, Locator, Page, expect} from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |     readonly page: Page;
  5  | 
  6  |     constructor(page: Page) {
  7  |         this.page = page;
  8  |     }
  9  | 
  10 |     protected async validateLabel(locator: Locator, text: string): Promise<boolean> {
  11 |         let label = await locator.innerText();
  12 |         if(text.toLowerCase()===label.toLowerCase()) {
  13 |             return true;
  14 |         } else {
  15 |             return false;
  16 |         }
  17 |     }
  18 | 
  19 |     protected async fillText(locator: Locator, inputText: string): Promise<void> {
  20 |         await expect(locator).toBeEditable();
  21 |         await locator.clear();
  22 |         await locator.fill(inputText);
  23 |     }
  24 | 
  25 |     protected async clickItemFromListByText(
  26 |         listLocator: Locator,
  27 |         targetText: string,
  28 |         matchType: 'includes' | 'exact' = 'includes'
  29 |     ): Promise<void> {
  30 |         const itemList = await listLocator.all();
  31 |         const normalizedTargetText = targetText.trim().toLowerCase();
  32 | 
  33 |         for (const item of itemList) {
  34 |             const itemText = (await item.innerText()).trim().toLowerCase();
  35 |             const isMatch = matchType === 'exact'
  36 |                 ? itemText === normalizedTargetText
  37 |                 : itemText.includes(normalizedTargetText);
  38 | 
  39 |             if (isMatch) {
  40 |                 await item.click();
  41 |                 return;
  42 |             }
  43 |         }
  44 | 
  45 |         throw new Error(`No matching item found for "${targetText}"`);
  46 |     }
  47 | 
  48 |     protected async clickActionForListItemByText(
  49 |         textListLocator: Locator,
  50 |         actionListLocator: Locator,
  51 |         targetText: string
  52 |     ): Promise<void> {
  53 |         const textList = await textListLocator.all();
  54 |         const actionList = await actionListLocator.all();
  55 | 
  56 |         for (let i = 0; i < textList.length; i++) {
  57 |             const itemText = await textList[i].innerText();
  58 |             if (itemText.toLowerCase().includes(targetText.toLowerCase())) {
  59 |                 if (!actionList[i]) {
  60 |                     throw new Error(`No action found for matching item "${targetText}"`);
  61 |                 }
  62 | 
  63 |                 await actionList[i].click();
  64 |                 return;
  65 |             }
  66 |         }
  67 | 
  68 |         throw new Error(`No matching item found for "${targetText}"`);
  69 |     }
  70 | 
  71 |     protected async waitForAdyenField(frame: FrameLocator, roleName: string, timeout = 30000) {
  72 |         const adyenField = frame.getByRole('textbox', { name: roleName });
> 73 |         await adyenField.waitFor({state: 'visible', timeout: timeout});
     |                          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  74 |         return adyenField;
  75 |     }
  76 | 
  77 |     
  78 | }
  79 | 
```