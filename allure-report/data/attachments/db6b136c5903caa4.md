# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:38:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeEditable() failed

Locator: locator('adyen-checkout-encryptedCardNumber-1776494958632')
Expected: editable
Error: element(s) not found

Call log:
  - Expect "toBeEditable" with timeout 5000ms
  - waiting for locator('adyen-checkout-encryptedCardNumber-1776494958632')

```

# Test source

```ts
  1  | import { Locator, Page, expect} from '@playwright/test';
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
> 20 |         await expect(locator).toBeEditable();
     |                               ^ Error: expect(locator).toBeEditable() failed
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
  71 |     
  72 | }
  73 | 
```