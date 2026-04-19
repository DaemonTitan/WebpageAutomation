import { FrameLocator, Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { OrderConfirmationPage } from './orderConfirmationPage';

export class CheckoutPage extends BasePage {
    private readonly continueAsAGuestButton: Locator;
    private readonly storeLocation: Locator;
    private readonly chevron: Locator;
    private readonly productName: Locator;
    private readonly totalPrice: Locator;
    private readonly firstNameField: Locator;
    private readonly firstNameRequiredAlert: Locator;
    private readonly lastNameField: Locator;
    private readonly lastNameRequiredAlert: Locator;
    private readonly emailAddressField: Locator;
    private readonly invalidEmailAddressAlert: Locator;
    private readonly phoneNumberField: Locator;
    private readonly phoneNumberAlert: Locator;
    private readonly addPaymentMethod: Locator;
    private readonly manualCardEntryButton: Locator;
    private readonly cardNumberFrame: FrameLocator;
    private readonly expiryDateFrame: FrameLocator;
    private readonly securityCodeFrame: FrameLocator;
    private readonly cardNumberField: Locator;
    private readonly expiryDateField: Locator;
    private readonly securityCodeField: Locator;
    private readonly payButon: Locator;

    constructor(page: Page) {
        super(page);
        this.continueAsAGuestButton = page.getByTestId('continue-as-a-gust');
        this.storeLocation = page.locator('.store_name.d-block.font-weight-bold');
        this.chevron = page.getByTestId('acordian-handle');
        this.productName = page.getByTestId('view-receipt-modal-item-name');
        this.totalPrice = page.getByTestId('checkout-total-amount-price');
        this.firstNameField = page.getByTestId('enter-firstName-details');
        this.firstNameRequiredAlert = page.getByText('Enter your first name');
        this.lastNameField = page.getByTestId('enter-lastName-details');
        this.lastNameRequiredAlert = page.getByText('Enter your last name');
        this.emailAddressField = page.getByTestId('enter-email-details');
        this.invalidEmailAddressAlert = page.getByText('Invalid email address');
        this.phoneNumberField = page.getByTestId('enter-phoneNumber-details');
        this.phoneNumberAlert = page.locator("div[id='user-maskinput'] span[role='alert']");
        this.addPaymentMethod = page.getByTestId('pay-button');
        this.manualCardEntryButton = page.locator("button[class='adyen-checkout__button adyen-checkout__button--secondary']");
        
        this.cardNumberFrame = page.frameLocator('iframe[title="Iframe for card number"]');
        this.expiryDateFrame = page.frameLocator('iframe[title="Iframe for expiry date"]');
        this.securityCodeFrame = page.frameLocator('iframe[title="Iframe for security code"]');
        
        this.cardNumberField = this.cardNumberFrame.getByRole('textbox', { name: 'Card number' })
        this.expiryDateField = this.expiryDateFrame.getByRole('textbox', { name: 'Expiry date' })
        this.securityCodeField = this.securityCodeFrame.getByRole('textbox', { name: 'Security code' })
        this.payButon = page.locator("button[class='adyen-checkout__button adyen-checkout__button--pay']")

    }

    async clickChevron(): Promise<void> {
        await expect(this.chevron).toBeVisible({ timeout: 350000 });
        await this.chevron.click();
    }

    async validateSelectProduct(targetProduct: string): Promise<boolean> {
        const productNameLabel = await this.productName.innerText();
        if(productNameLabel.toLowerCase()===targetProduct.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    async validateTotalPrice(price: string): Promise<boolean> {
        await expect(this.totalPrice).toBeVisible({ timeout: 350000 });
        const totalPriceText = await this.totalPrice.innerText();
        if(totalPriceText.toLowerCase()===price.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    async validatePickUpLocation(location: string): Promise<boolean> {
        await this.storeLocation.isVisible();
        const storeLocationText = await this.storeLocation.innerText();
        if(storeLocationText.toLowerCase().includes(location.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
    
    async clickContinueAsAGuestButton(): Promise<void> {
        await expect(this.continueAsAGuestButton).toBeVisible({ timeout: 350000 });
        await this.continueAsAGuestButton.click();
    }

    async completeUserDetails(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
        await this.fillText(this.firstNameField, firstName);
        await this.fillText(this.lastNameField, lastName);
        await this.fillText(this.emailAddressField, email);
        await this.fillText(this.phoneNumberField, phone);
    }

    async validateFirstNameIsRequired(): Promise<void> {
        await this.firstNameField.click();
        await this.firstNameField.clear();
        await this.firstNameField.blur();
        await expect(this.firstNameRequiredAlert).toBeVisible();
    }

    async validateLastNameIsRequired(): Promise<void> {
        await this.lastNameField.click();
        await this.lastNameField.clear();
        await this.lastNameField.blur();
        await expect(this.lastNameRequiredAlert).toBeVisible();
    }

    async validatePhoneNumberRequires04Prefix(invalidPhoneNumber: string): Promise<void> {
        await this.fillText(this.phoneNumberField, invalidPhoneNumber);
        await this.phoneNumberField.blur();
        await expect(this.phoneNumberAlert).toBeVisible();
    }

    async validatePhoneNumberAccepts04Prefix(validPhoneNumber: string): Promise<void> {
        await this.fillText(this.phoneNumberField, validPhoneNumber);
        await this.phoneNumberField.blur();
        await expect(this.phoneNumberAlert).toBeHidden();
    }

    async validateInvalidEmailAddress(invalidEmail: string): Promise<void> {
        await this.fillText(this.emailAddressField, invalidEmail);
        await this.emailAddressField.blur();
        await expect(this.invalidEmailAddressAlert).toBeVisible();
    }

    async validateValidEmailAddress(validEmail: string): Promise<void> {
        await this.fillText(this.emailAddressField, validEmail);
        await this.emailAddressField.blur();
        await expect(this.invalidEmailAddressAlert).toBeHidden();
    }

    async isAddPaymentMethodDisabled(): Promise<boolean> {
        return await this.addPaymentMethod.isDisabled()
    }

    async clickAddPaymentMethod(): Promise<void> {
        await expect(this.addPaymentMethod).toBeEnabled();
        await this.addPaymentMethod.click();
    }

    async clickManualCardEntryButton(): Promise<void> {
        await expect(this.manualCardEntryButton).toBeVisible();
        await this.manualCardEntryButton.click();
    }

    async enterCardDetails(cardNumber: string, expiryDate: string, securityCode: string): Promise<void> {

        await this.cardNumberFrame
            .getByRole('textbox', { name: 'Card number' })
            .fill(cardNumber);

        await this.expiryDateFrame
            .getByRole('textbox', { name: 'Expiry date' })
            .fill(expiryDate);

        await this.securityCodeFrame
            .getByRole('textbox', { name: 'Security code' })
            .fill(securityCode);
    }

    async clickPayButton(): Promise<OrderConfirmationPage> {
        await expect(this.payButon).toBeEnabled();
        await Promise.all([
            this.page.waitForURL('/order-processing'),
             this.payButon.click()
        ])

        return new OrderConfirmationPage(this.page);
    }
}
