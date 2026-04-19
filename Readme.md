# WebpageAutomation

Playwright test automation framework for the KFC web ordering flow.

## Tech Stack

- Playwright Test
- TypeScript
- Page Object Model
- dotenv environment configuration
- Playwright HTML report
- Allure report output

## Project Structure

```text
WebpageAutomation/
├── env/
│   ├── .env.DEV
│   └── .env.UAT
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   └── pagefixture.ts
│   ├── constants/
│   │   ├── endpoints.ts
│   │   └── fixedValues.ts
│   ├── data/
│   │   ├── fieldValidationData.json
│   │   ├── storeDetails.json
│   │   └── userDetail.json
│   ├── pages/
│   │   ├── basePage.ts
│   │   ├── homePage.ts
│   │   ├── menuPage.ts
│   │   ├── productPage.ts
│   │   ├── myCartPage.ts
│   │   ├── checkoutPage.ts
│   │   └── orderConfirmationPage.ts
│   └── tests/
│       └── orderProcessTest.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── Readme.md
└── tsconfig.json
```

Generated folders after test/report runs:

```text
allure-report/
playwright-report/
test-results/
../reports/allure-result/
```

## Framework Overview

This framework uses the Page Object Model pattern.

- Test files live in `src/tests`.
- Page actions and locators live in `src/pages`.
- Shared Playwright fixtures live in `src/config/pagefixture.ts`.
- Environment selection is handled by `src/config/env.ts`.
- API endpoint constants, such as the Google Maps script URL, live in `src/constants/endpoints.ts`.
- Test data is stored in JSON files under `src/data`.
- Guest field validation data is stored in `src/data/fieldValidationData.json`.
- Browser projects are configured in `playwright.config.ts`.

The main order flow test is:

```text
src/tests/orderProcessTest.spec.ts
```

The tests use page objects such as `HomePage`, `MenuPage`, `ProductPage`, `MyCartPage`, `CheckoutPage`, and `OrderConfirmationPage` through custom fixtures.

## Prerequisites

Install the following before running the tests:

- Node.js
- npm
- Git
- Google Chrome, for the configured `chromium` project

Check versions:

```bash
node -v
npm -v
git --version
```

## Clone the Repository

```bash
git clone https://github.com/DaemonTitan/WebpageAutomation.git
cd WebpageAutomation
```

## Install Dependencies

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

If you only want to install the browsers used by this framework:

```bash
npx playwright install chromium firefox webkit
```

## Environment Configuration

The framework loads the environment file based on the `TEST_ENV` variable.

Available files:

```text
env/.env.UAT
env/.env.DEV
```

Example:

```text
BASE_URL = "https://au-uat.pwa.kfc.dev"
```

Default environment:

```text
UAT
```

That means this command:

```bash
npx playwright test
```

uses:

```text
env/.env.UAT
```

To run against DEV:

```bash
TEST_ENV=DEV npx playwright test
```

To run against UAT explicitly:

```bash
TEST_ENV=UAT npx playwright test
```

## Run Tests

Run all tests on all configured browsers:

```bash
npx playwright test
```

Run the order process test only:

```bash
npx playwright test src/tests/orderProcessTest.spec.ts
```

Run only Chromium:

```bash
npx playwright test --project=chromium
```

Run the order process test on Chromium:

```bash
npx playwright test src/tests/orderProcessTest.spec.ts --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run with Playwright UI mode:

```bash
npx playwright test --ui
```

Run with debug mode:

```bash
npx playwright test --debug
```

## Reports

The Playwright HTML report is configured in `playwright.config.ts`.

Open the latest HTML report:

```bash
npx playwright show-report
```

Report output folder:

```text
playwright-report/
```

Allure result output is configured in `playwright.config.ts`. Depending on the reporter configuration and local runs, results may be written to:

```text
../reports/allure-result
allure-results/
```

Generate an Allure HTML report from the configured result folder:

```bash
npx allure-commandline generate ../reports/allure-result --clean -o allure-report
```

If your local run produced `allure-results/` instead, generate from that folder:

```bash
npx allure-commandline generate allure-results --clean -o allure-report
```

Open the generated Allure report:

```bash
npx allure-commandline open allure-report
```

Generated report output folder:

```text
allure-report/
```

## Useful Commands

Show Playwright help:

```bash
npx playwright test --help
```

Run tests with trace enabled:

```bash
npx playwright test --trace on
```

Open a trace file:

```bash
npx playwright show-trace path/to/trace.zip
```

Run a specific test by title:

```bash
npx playwright test -g "Order process"
```

## Test Data

Store and product test data is stored in:

```text
src/data/storeDetails.json
```

Example:

```json
{
  "storeLocation": "Dee Why",
  "selectMenu": "SIDES & DESSERTS",
  "selectProduct": "4 Dipping Sauces",
  "totalPrice": "$2.00"
}
```

User and payment test data is stored in:

```text
src/data/userDetail.json
```

## Page Object Usage

Page objects keep locators and page actions separate from the test file.

Example:

```ts
await homePage.clickSetLocationButton();
await homePage.selectPickUp();
await homePage.enterSearchQuery(storeData.storeLocation);
await homePage.selectTargetLocation(storeData.storeLocation);
await homePage.selectTargetStoreFromList(storeData.storeLocation);
await homePage.clickViewMenuButton();
```

Fixtures are configured in:

```text
src/config/pagefixture.ts
```

This allows tests to use page objects directly:

```ts
test('Order process', async ({ homePage, menuPage, productPage }) => {
  await homePage.clickSetLocationButton();
  await homePage.selectPickUp();
  await homePage.enterSearchQuery('Dee Why');
  await homePage.selectTargetLocation('Dee Why');
  await homePage.selectTargetStoreFromList('Dee Why');
  await homePage.clickViewMenuButton();
  await menuPage.selectSideMenu('SIDES & DESSERTS');
  await menuPage.selectProduct('4 Dipping Sauces');
  await productPage.clickAddToOrderButton();
});
```

## Playwright Configuration

Main configuration file:

```text
playwright.config.ts
```

Current settings include:

- Test directory: `src/tests`
- Parallel execution enabled
- CI retries enabled
- HTML report enabled
- Allure result output enabled
- Trace on first retry
- Screenshot only on failure
- Video retained on failure
- Browser projects: Chromium, Firefox, WebKit

## Troubleshooting

If browsers are missing, run:

```bash
npx playwright install
```

If an element is not ready, avoid fixed waits like:

```ts
await page.waitForTimeout(2000);
```

Prefer Playwright auto-waiting:

```ts
await expect(locator).toBeVisible();
await expect(locator).toBeEnabled();
await expect(locator).toBeEditable();
```

If a locator matches multiple elements, make it more specific:

```ts
await page.getByTestId('store-name').first().waitFor({ state: 'visible' });
```

or:

```ts
await page.getByTestId('store-card').filter({ hasText: 'Dee Why' }).click();
```

If the UAT or DEV site shows an application error page, confirm the same flow manually in a browser. That usually means the test environment or backend is unavailable, not that Playwright failed to wait.
