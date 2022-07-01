const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contentpanel = page.locator('.contentpanel');
  }

  async goto() {
    await this.page.goto('https://automationteststore.com/index.php?rt=checkout/cart');
  }

  async validateCartIsEmpty() {
    await expect(this.contentpanel).toBeVisible();
  }
}