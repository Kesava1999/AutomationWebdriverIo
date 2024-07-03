const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require("../Pages/login");

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

Then(/^verifying dashboard is displaying or not$/, async () => {
    await loginPage.validatingDashboardHeadingVisibility();
});
