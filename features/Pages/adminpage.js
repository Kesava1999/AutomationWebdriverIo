const { expect } = require('@wdio/globals');
const data = require("../../data/data.json");
class AdminPage{
    get adminButton(){
        return $("//span[text()='Admin']")
    }
    get userNameInputField(){
        return $("//label[text()='Username']/../..//input")
    }
    get userRoleSelectOption(){
        return $("//label[text()='User Role']/../..//div[contains(text(),'Select')]")
    }
    get employeeNameInput(){
        return $("//input[contains(@placeholder,'Type for hints')]")
    }
    get employeeStatus(){
        return $("//label[text()='Status']/../..//div[contains(text(),'Select')]")
    }
    get setEmployeeName(){
        return $("(//div[contains(@class,'oxd-grid-item--gutters')])[3]")
    }
    get employeedetailsTable(){
        return $("//div[@class='orangehrm-container']")
    }
    async clickOnAdminButton(){
        await this.adminButton().click();
    }
    async fillingMandatoryInputInAdminPage(){
        await this.userNameInputField().setValue(data.adminPageData.userName);
        await this.userRoleSelectOption().selectByVisibleText(data.adminPageData.employeeStatus);
        await this.userNameInputField().setValue(data.adminPageData.employeeName);
        await this.setEmployeeName().click();
        await this.employeeStatus().selectByVisibleText(data.adminPageData.employeeStatus);
    }
    async clickOnSearchButton(){
        await this.clickOnSearchButton().click();
    }
    async verifyingSearchEmployeeDetails(){
        await expect(this.employeedetailsTable()).toBeDisplayed();l
    }
}
module.exports = new AdminPage();