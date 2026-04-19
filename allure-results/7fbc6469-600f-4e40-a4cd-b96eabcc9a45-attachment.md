# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:28:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: getByTestId('category-click-test') resolved to 11 elements:
    1) <a class="active " data-testid="category-click-test">FEATURED OFFERS</a> aka locator('#category-name-C-20035').getByTestId('category-click-test')
    2) <a class="false " data-testid="category-click-test">BURGERS</a> aka locator('#category-name-C-20034').getByTestId('category-click-test')
    3) <a class="false " data-testid="category-click-test">BOXED MEALS</a> aka locator('#category-name-C-20018').getByTestId('category-click-test')
    4) <a class="false " data-testid="category-click-test">CHICKEN</a> aka locator('#category-name-C-20000').getByTestId('category-click-test')
    5) <a class="false " data-testid="category-click-test">SNACK HACKS</a> aka locator('#category-name-C-20056').getByTestId('category-click-test')
    6) <a class="false " data-testid="category-click-test">PROTEIN PICKS</a> aka locator('#category-name-C-20083').getByTestId('category-click-test')
    7) <a class="false " data-testid="category-click-test">SHARED MEALS</a> aka locator('#category-name-C-20041').getByText('SHARED MEALS')
    8) <a class="false " data-testid="category-click-test">TWISTERS & BOWLS</a> aka locator('#category-name-C-20036').getByText('TWISTERS & BOWLS')
    9) <a class="false " data-testid="category-click-test">EVERYDAY VALUE</a> aka locator('#category-name-C-20080').getByText('EVERYDAY VALUE')
    10) <a class="false " data-testid="category-click-test">SIDES & DESSERTS</a> aka locator('#category-name-C-20020').getByText('SIDES & DESSERTS')
    ...

Call log:
  - waiting for getByTestId('category-click-test') to be visible

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../pages/basePage';
  3  | 
  4  | export class MenuPage extends BasePage {
  5  |     private readonly sideMenu: Locator;
  6  |     private readonly itemNameLabel: Locator;
  7  | 
  8  |     constructor(page: Page) {
  9  |         super(page);
  10 |         this.sideMenu = page.getByTestId('category-click-test');
  11 |         this.itemNameLabel = page.getByTestId('plp-menu-card-header');
  12 |     }
  13 | 
  14 |     async selectSideMenu(selectItem: string): Promise<void> {
> 15 |         await this.sideMenu.waitFor({ state: 'visible' });
     |                             ^ Error: locator.waitFor: Error: strict mode violation: getByTestId('category-click-test') resolved to 11 elements:
  16 |         const menuListArray = await this.sideMenu.all();
  17 | 
  18 |         for(const item of menuListArray) {
  19 |             const itemName = await item.innerText();
  20 |             if (itemName.toLocaleLowerCase().includes(selectItem)) {
  21 |                 await item.click();
  22 |                 break;
  23 |             }
  24 |         }
  25 |     }
  26 | 
  27 | 
  28 |     async locateItem(targetName: string): Promise<void> {
  29 |         const itemListArray = await this.itemNameLabel.all();
  30 | 
  31 |         for(const item of itemListArray) {
  32 |             const itemName = await item.innerText();
  33 | 
  34 |             if(itemName===targetName) {
  35 |                 await item.click();
  36 |             }
  37 |         }
  38 |     }
  39 | }
```