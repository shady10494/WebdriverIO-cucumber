class ProductsPage {
    // Define element locators
    get productsLabel() {
        return $('//android.widget.TextView[@text="Products"]');
    }
 
    private getLabelWithMessage(message: string): string {
        return `//android.widget.TextView[@text="${message}"]`;
    }

    // Define methods for assertions
    async isProductsPageDisplayed() {
        return await this.productsLabel.waitForDisplayed({timeout:5000}).then(async()=> {
            return await this.productsLabel.isDisplayed();
        })
    }

    async isWarningMessageDisplayed(message : string) {
        return await $(this.getLabelWithMessage(message)).waitForDisplayed({timeout: 5000}).then(async ()=>{
            return await $(this.getLabelWithMessage(message)).isDisplayed();
        })
    }
}

export const productsPage = new ProductsPage();