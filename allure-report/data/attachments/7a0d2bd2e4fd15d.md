# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('add-to-cart-handler')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('add-to-cart-handler')

```

# Test source

```ts
  1  | import { Locator, Page, expect } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | 
  4  | export class ProductPage extends BasePage {
  5  |     private readonly addToOrderButton: Locator;
  6  |     private readonly cartButton: Locator;
  7  | 
  8  |     constructor(page: Page) {
  9  |         super(page);
  10 |         this.addToOrderButton = page.getByTestId('add-to-cart-handler');
  11 |         this.cartButton = page.locator("button[class='basket basket-link blank']");
  12 |     }
  13 | 
  14 |     async clickAddToOrderButton(): Promise<void> {
> 15 |         await expect(this.addToOrderButton).toBeVisible();
     |                                             ^ Error: expect(locator).toBeVisible() failed
  16 |         await expect(this.addToOrderButton).toBeEnabled();
  17 |         await this.addToOrderButton.click();
  18 |     }
  19 | 
  20 |     async clickCartButton(): Promise<void> {
  21 |         await expect(this.cartButton).toBeVisible();
  22 |         await expect(this.cartButton).toBeEnabled();
  23 |         await this.cartButton.click();
  24 |     }
  25 | }
```