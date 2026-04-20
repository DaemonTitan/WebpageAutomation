import { FrameLocator, Locator, Page, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async validateLabel(locator: Locator, text: string): Promise<boolean> {
        let label = await locator.innerText();
        if(text.toLowerCase()===label.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    protected async fillText(locator: Locator, inputText: string): Promise<void> {
        await expect(locator).toBeEditable();
        await locator.clear();
        await locator.fill(inputText);
    }

    protected async clickItemFromListByText(
        listLocator: Locator,
        targetText: string,
        matchType: 'includes' | 'exact' = 'includes'
    ): Promise<void> {
        const itemList = await listLocator.all();
        const normalizedTargetText = targetText.trim().toLowerCase();

        for (const item of itemList) {
            const itemText = (await item.innerText()).trim().toLowerCase();
            const isMatch = matchType === 'exact'
                ? itemText === normalizedTargetText
                : itemText.includes(normalizedTargetText);

            if (isMatch) {
                await item.click();
                return;
            }
        }

        throw new Error(`No matching item found for "${targetText}"`);
    }

    protected async clickActionForListItemByText(
        textListLocator: Locator,
        actionListLocator: Locator,
        targetText: string
    ): Promise<void> {
        const textList = await textListLocator.all();
        const actionList = await actionListLocator.all();

        for (let i = 0; i < textList.length; i++) {
            const itemText = await textList[i].innerText();
            if (itemText.toLowerCase().includes(targetText.toLowerCase())) {
                if (!actionList[i]) {
                    throw new Error(`No action found for matching item "${targetText}"`);
                }

                await actionList[i].click();
                return;
            }
        }

        throw new Error(`No matching item found for "${targetText}"`);
    }

    protected async waitForAdyenField(frame: FrameLocator, roleName: string, timeout = 350000) {
        const adyenField = frame.getByRole('textbox', { name: roleName });
        await adyenField.waitFor({state: 'visible', timeout: timeout});
        return adyenField;
    }

    
}
