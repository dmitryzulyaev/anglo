const { Given, When, Then } = require('@cucumber/cucumber');
const { test, expect } = require('@playwright/test');
const assert = require('assert');
const { CartPage } = require('../../pages/CartPage');
const { TestStorePage } = require('../../pages/TestStorePage');

Given('As a guest user', function () {
  const testStorePage = new TestStorePage(page);
   testStorePage.goto();
   testStorePage.validateUserIsGuest();
  return 'pending';
});

When('I am opening a cart', function () {
    const cartPage = new CartPage(page);
     cartPage.goto();
    return 'pending';
});

Then('it should be empty', function () {
  assert.equal( cartPage.validateCartIsEmpty(), true)
  return 'pending';
});
