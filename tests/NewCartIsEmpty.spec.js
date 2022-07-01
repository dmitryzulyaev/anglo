const { test, expect } = require('@playwright/test');
const { CartPage } = require('../pages/CartPage');

test('should validate that new cart is empty', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.goto();
  await cartPage.validateCartIsEmpty();
});


