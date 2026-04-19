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
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.basket')
Expected: "1"
Received: "0"

Call log:
  - Expect "toHaveText" with timeout 15000ms
  - waiting for locator('.basket')
    5 × locator resolved to <button aria-label="Close" class="basket basket-link blank">0</button>
      - unexpected value "0"

```

# Test source

```ts
  1  | import { Locator, Page, expect } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | import { MyCartPage } from './myCartPage';
  4  | 
  5  | export class ProductPage extends BasePage {
  6  |     private readonly addToOrderButton: Locator;
  7  |     private readonly cartButton: Locator;
  8  |     
  9  | 
  10 |     constructor(page: Page) {
  11 |         super(page);
  12 |         this.addToOrderButton = page.getByTestId('add-to-cart-handler');
  13 |         this.cartButton = page.locator(".basket");
  14 |     }
  15 | 
  16 |     async clickAddToOrderButton(): Promise<void> {
  17 |         await this.addToOrderButton.click();
> 18 |         await expect(this.cartButton).toHaveText('1', { timeout: 15000 });
     |                                       ^ Error: expect(locator).toHaveText(expected) failed
  19 |     }
  20 | 
  21 |     async clickCartButton(): Promise<MyCartPage> {
  22 |         await this.cartButton.click();
  23 |         return new MyCartPage(this.page)
  24 |     }
  25 | }
```