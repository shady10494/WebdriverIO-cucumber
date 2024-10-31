import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { loginPage } from 'pageobjects/Login.page';
import {productsPage} from 'pageobjects/Products.page';
import {sideMenuPage} from 'pageobjects/SideMenu.page';


When('I login with {string} and {string}', async (username, password) => {
    await loginPage.login(username, password);
});

Given('I open login page', async () => {
    await sideMenuPage.openLoginPage();
});

Then('I should be directed to products page', async () => {
        const isDisplayed = await productsPage.isProductsPageDisplayed();
        expect(isDisplayed).to.be.true;
});

When('I should see a warning message {string}', async (message: string) => {
    const isDisplayed = await productsPage.isWarningMessageDisplayed(message);
    expect(isDisplayed).to.be.true;
});