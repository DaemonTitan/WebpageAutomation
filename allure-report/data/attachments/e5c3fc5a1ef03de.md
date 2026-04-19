# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orderProcessTest.spec.ts >> Order process
- Location: src/tests/orderProcessTest.spec.ts:39:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.col-12.statusMessage')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 600000ms
  - waiting for locator('.col-12.statusMessage')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - generic [ref=e8]:
      - button "Close" [ref=e11] [cursor=pointer]: Go Back
      - generic [ref=e15] [cursor=pointer]:
        - img "help icon" [ref=e16]
        - text: Need Help?
    - generic [ref=e20]:
      - img "issue_img" [ref=e22]
      - generic [ref=e23]: THAT AIN’T RIGHT
      - generic [ref=e24]: Hmm, something didn’t work on checkout. Check your payment method details and try again.
      - button "Close" [ref=e26] [cursor=pointer]: Back to Cart
    - contentinfo [ref=e28]:
      - contentinfo [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]:
            - link "KFC LOGO" [ref=e33] [cursor=pointer]:
              - /url: /
              - img "KFC LOGO" [ref=e34]
            - generic [ref=e35]:
              - generic [ref=e36]:
                - heading "Menu" [level=2] [ref=e37]
                - list [ref=e38]:
                  - listitem [ref=e39]:
                    - link "Menu" [ref=e40] [cursor=pointer]:
                      - /url: /menu
                  - listitem [ref=e41]:
                    - link "Catering" [ref=e42] [cursor=pointer]:
                      - /url: /catering
                  - listitem [ref=e43]:
                    - link "Christmas Ordering" [ref=e44] [cursor=pointer]:
                      - /url: /start-order
                  - listitem [ref=e45]:
                    - link "Nutrition & Allergen Guide" [ref=e46] [cursor=pointer]:
                      - /url: /nutrition-allergen
                  - listitem [ref=e47]:
                    - link "Rewards" [ref=e48] [cursor=pointer]:
                      - /url: /promo-rewards
              - generic [ref=e49]:
                - heading "Support" [level=2] [ref=e50]
                - list [ref=e51]:
                  - listitem [ref=e52]:
                    - link "FAQ" [ref=e53] [cursor=pointer]:
                      - /url: /faq
                  - listitem [ref=e54]:
                    - link "Contact KFC" [ref=e55] [cursor=pointer]:
                      - /url: /contact-kfc
                  - listitem [ref=e56]:
                    - link "Promos & Rewards" [ref=e57] [cursor=pointer]:
                      - /url: /promos-rewards
              - generic [ref=e58]:
                - heading "KFC Australia" [level=2] [ref=e59]
                - list [ref=e60]:
                  - listitem [ref=e61]:
                    - link "About KFC Globalimg" [ref=e62] [cursor=pointer]:
                      - /url: https://global.kfc.com/
                      - text: About KFC Global
                      - img "img" [ref=e63]
                  - listitem [ref=e64]:
                    - link "Social Impact" [ref=e65] [cursor=pointer]:
                      - /url: /social-impact
                  - listitem [ref=e66]:
                    - link "Meet the Colonel" [ref=e67] [cursor=pointer]:
                      - /url: /meet-the-colonel
                  - listitem [ref=e68]:
                    - link "KFC Delivery Service" [ref=e69] [cursor=pointer]:
                      - /url: /delivery
                  - listitem [ref=e70]:
                    - link "Training" [ref=e71] [cursor=pointer]:
                      - /url: /training-brand-page-karen
                  - listitem [ref=e72]:
                    - link "Responsible Disclosure" [ref=e73] [cursor=pointer]:
                      - /url: https://bugcrowd.com/a19f4258-c79b-4a4f-a8bc-d924f85d5c53/external/report
              - generic [ref=e74]:
                - heading "Work With Us" [level=2] [ref=e75]
                - list [ref=e76]:
                  - listitem [ref=e77]:
                    - link "Restaurant Jobsimg" [ref=e78] [cursor=pointer]:
                      - /url: https://careers.kfc.com.au/
                      - text: Restaurant Jobs
                      - img "img" [ref=e79]
                  - listitem [ref=e80]:
                    - link "Corporate Jobsimg" [ref=e81] [cursor=pointer]:
                      - /url: https://careers.kfc.com.au/corporate
                      - text: Corporate Jobs
                      - img "img" [ref=e82]
            - generic [ref=e83]:
              - img "Find Store" [ref=e84] [cursor=pointer]
              - link "Find a KFC" [ref=e85] [cursor=pointer]:
                - /url: /
            - generic [ref=e87]:
              - link "Download on the App Store" [ref=e88] [cursor=pointer]:
                - /url: https://kfcau.app.link/BreC0MT6Vab
                - img "Download on the App Store" [ref=e89]
              - link "GET IT ON Google Play" [ref=e90] [cursor=pointer]:
                - /url: https://kfcau.app.link/wPrvMf6zRab
                - img "GET IT ON Google Play" [ref=e91]
          - generic [ref=e92]:
            - generic [ref=e95]:
              - list [ref=e96]:
                - listitem [ref=e97]:
                  - link "Privacy Policy" [ref=e98] [cursor=pointer]:
                    - /url: /privacy-policy
                - listitem [ref=e99]:
                  - link ".Terms of Use" [ref=e100] [cursor=pointer]:
                    - /url: /terms-conditions
                - listitem [ref=e101]:
                  - link ".Protected Disclosure" [ref=e102] [cursor=pointer]:
                    - /url: /protected-disclosure
                - listitem [ref=e103]:
                  - link ".Yum" [ref=e104] [cursor=pointer]:
                    - /url: https://www.yum.com/wps/portal/yumbrands/Yumbrands
                - listitem [ref=e105]:
                  - link ".Site Map" [ref=e106] [cursor=pointer]:
                    - /url: /sitemap
              - paragraph [ref=e107]: Copyright © KFC Australia. 2024 All Rights Reserved. build pwa-2601-0-3_3aa3ea5e
            - list [ref=e109]:
              - listitem [ref=e110]:
                - link "Instagram" [ref=e111] [cursor=pointer]:
                  - /url: https://www.instagram.com/kfcaustralia/?hl=en
                  - img "Instagram" [ref=e112]
              - listitem [ref=e113]:
                - link "Facebook" [ref=e114] [cursor=pointer]:
                  - /url: https://www.facebook.com/KFCAustralia/
                  - img "Facebook" [ref=e115]
              - listitem [ref=e116]:
                - link "Twitter" [ref=e117] [cursor=pointer]:
                  - /url: https://twitter.com/kfcaustralia?lang=en
                  - img "Twitter" [ref=e118]
              - listitem [ref=e119]:
                - link "Youtube" [ref=e120] [cursor=pointer]:
                  - /url: https://www.youtube.com/user/KFCAustralia
                  - img "Youtube" [ref=e121]
              - listitem [ref=e122]:
                - link "Snapchat" [ref=e123] [cursor=pointer]:
                  - /url: https://www.snapchat.com/add/kfcaustralia
                  - img "Snapchat" [ref=e124]
              - listitem [ref=e125]:
                - link "LinkedIn" [ref=e126] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/kfc-south-pacific/
                  - img "LinkedIn" [ref=e127]
  - log [ref=e129]
  - iframe
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from './basePage';
  3  | 
  4  | export class OrderConfirmationPage extends BasePage{
  5  |     private readonly confirmationMessage: Locator;
  6  | 
  7  |     constructor(page: Page) {
  8  |         super(page);
  9  |         this.confirmationMessage = page.locator('.col-12.statusMessage');
  10 |     }
  11 | 
  12 |     async waitForPageLoad(): Promise<void> {
> 13 |         await expect(this.confirmationMessage).toBeVisible({ timeout: 600000 });
     |                                                ^ Error: expect(locator).toBeVisible() failed
  14 |     }
  15 | 
  16 |     async confirmationMessageIsVisible(): Promise<void> {
  17 |         await this.waitForPageLoad();
  18 |     }
  19 | }
  20 | 
```