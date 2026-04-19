import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { ProductPage } from './productPage';

export class MenuPage extends BasePage {
    private readonly menuLabel: Locator;
    private readonly sideMenu: Locator;
    private readonly selectedCategoryTitle: Locator;
    private readonly itemNameLabel: Locator;
    private readonly productCard: Locator;
    

    constructor(page: Page) {
        super(page);
        this.menuLabel = page.locator('.kfc-menu-title')
        this.sideMenu = page.getByTestId('category-click-test');
        this.selectedCategoryTitle = page.locator('h1, h2');
        this.itemNameLabel = page.locator('[data-testid="plp-menu-card-header"]:visible');
        this.productCard = page.locator('.plp-item-card:visible')
    }

    async selectSideMenu(menuItem: string): Promise<void> {
        await this.sideMenu.first().waitFor({ state: 'visible' });

        await Promise.all([
            this.page.waitForURL('/menu/sides-desserts'),
            this.clickItemFromListByText(this.sideMenu, menuItem, 'exact')
        ])
    }

    async selectProduct(targetName: string): Promise<ProductPage> {
        const productCard = this.productCard
                                .filter({
                                    has: this.itemNameLabel.filter({ hasText: targetName })
                                })
                                .first();

        await expect(productCard).toBeVisible({ timeout: 150000 });
        await productCard.scrollIntoViewIfNeeded();

        await Promise.all([
            this.page.waitForURL('/menu/sides-desserts/4-dipping-sauces'),
            productCard.click()
        ])
        
        return new ProductPage(this.page);
    }
}
