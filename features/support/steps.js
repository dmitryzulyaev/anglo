const { Given, When, Then } = require("@cucumber/cucumber");

Given("As a guest user", { timeout: 60 * 1000 }, async function () {
    await this.openUrl(' https://automationteststore.com/');
});

When("I am opening a cart", async function () {
    await this.page.click('#main_menu_top > li:nth-child(3) > a > span');
});

Then("it should be empty", async function () {
    await this.page.waitForSelector('.contentpanel');
});

