# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:36:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('plp-menu-card').filter({ has: getByTestId('plp-menu-card-header').filter({ hasText: '4 Dipping Sauces' }) }).first()
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByTestId('plp-menu-card').filter({ has: getByTestId('plp-menu-card-header').filter({ hasText: '4 Dipping Sauces' }) }).first()

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | import { ProductPage } from './productPage';
  4  | 
  5  | export class MenuPage extends BasePage {
  6  |     private readonly sideMenu: Locator;
  7  |     private readonly itemNameLabel: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         super(page);
  11 |         this.sideMenu = page.getByTestId('category-click-test');
  12 |         this.itemNameLabel = page.locator('[data-testid="plp-menu-card-header"]:visible');
  13 |     }
  14 | 
  15 |     async selectSideMenu(menuItem: string): Promise<void> {
  16 |         await this.sideMenu.first().waitFor({ state: 'visible' });
  17 |         const menuListArray = await this.sideMenu.all();
  18 | 
  19 |         for(const item of menuListArray) {
  20 |             const itemName = await item.innerText();
  21 |             if (itemName.toLowerCase()===menuItem.toLowerCase()) {
  22 |                 await item.click();
  23 |                 break;
  24 |             }
  25 |         }
  26 |     }
  27 | 
  28 |     async selectProduct(targetName: string): Promise<ProductPage> {
  29 |         // await this.itemNameLabel.last().waitFor({ state: 'visible' });
  30 |         // const itemListArray = await this.itemNameLabel.all();
  31 | 
  32 |         // for(const items of itemListArray) {
  33 |         //     const itemName = await items.innerText();
  34 |         //     if(itemName.toLowerCase()===targetName.toLowerCase()) {
  35 |         //         await items.scrollIntoViewIfNeeded();
  36 |         //         await items.click();
  37 |         //         return new ProductPage(this.page);
  38 |         //     }
  39 |         // }
  40 |         // throw new Error(`Product "${targetName}" not found`);
  41 | 
  42 |         const productCard = this.page.getByTestId('plp-menu-card')
  43 |                                 .filter({
  44 |                                     has: this.page
  45 |                                         .getByTestId('plp-menu-card-header')
  46 |                                         .filter({ hasText: targetName })
  47 |                                 })
  48 |                                 .first();
  49 | 
> 50 |         await expect(productCard).toBeVisible({ timeout: 15000 });
     |                                   ^ Error: expect(locator).toBeVisible() failed
  51 |         await productCard.scrollIntoViewIfNeeded();
  52 |         await productCard.click();
  53 | 
  54 |         await expect(this.page.getByTestId('add-to-cart-handler')).toBeVisible({ timeout: 15000 });
  55 | 
  56 |         return new ProductPage(this.page);
  57 |     }
  58 | }
```