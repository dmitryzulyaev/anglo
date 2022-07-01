const { test, expect } = require('@playwright/test');
const { TestStorePage } = require('../pages/TestStorePage');

test('should validate availability of the Test Store', async ({ page }) => {
  const testStorePage = new TestStorePage(page);
  await testStorePage.goto();
  await testStorePage.validatePage();
});