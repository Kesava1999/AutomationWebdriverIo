const { expect } = require('@wdio/globals');

class LoginPage {
    get userNameInput() {
        return $("//input[@placeholder='Username']");
    }

    get userPasswordInput() {
        return $("//input[@placeholder='Password']");
    }

    get loginButton() {
        return $("//button[text()=' Login ']");
    }

    get dashboardHeading() {
        return $("//h6[text()='Dashboard']");
    }

    async openApplication() {
        await browser.url(process.env.BASE_URL);
    }

    async enterUsernameAndPassword(username, password) {
        await this.userNameInput.setValue(username);
        await this.userPasswordInput.setValue(password);
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async validatingDashboardHeadingVisibility() {
        await expect(this.dashboardHeading).toBeDisplayed();
    }
}

module.exports = new LoginPage();
