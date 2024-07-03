const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require("../Pages/login");
const adminPage = require("../Pages/adminpage");

Given(/^I am on the login page$/, async () => {
    await browser.maximizeWindow();
    await loginPage.openApplication();
});

When(/^Enter (.*) and (.*)$/, async (username, password) => {
    await loginPage.enterUsernameAndPassword(username, password);
});

When(/^Click on the Login button$/, async () => {
    await loginPage.clickOnLoginButton();
});

When(/^click on the Admin panel button$/, async () => {
    await adminPage.clickOnAdminButton();
});

When(/^fill all required input fields on the admin page$/, async () => {
   await adminPage.fillingMandatoryInputInAdminPage()
});

When(/^click on the search button$/, async () => {
   await adminPage.clickOnSearchButton();
});

Then(/^the search detail should be visible in the admin table$/, async () => {
    await adminPage.verifyingSearchEmployeeDetails();
});