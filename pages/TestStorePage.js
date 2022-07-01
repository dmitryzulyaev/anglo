const { expect } = require('@playwright/test');

exports.TestStorePage = class TestStorePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://automationteststore.com/');
  }

  async validatePage() {
    await expect(this.page).toHaveTitle('A place to practice your automation skills!');
  }

  async validateUserIsGuest() {
    await expect(this.page).locator('#customer_menu_top > li > a').toHaveText('Login or register');
  }
}