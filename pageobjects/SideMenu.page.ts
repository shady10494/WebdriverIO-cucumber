class SideMenuPage {
  ///////////////////// Define elements ///////////////////////////

  get openMenuButton() {
    return $('//android.view.ViewGroup[@content-desc="open menu"]');
  }

  get loginOption() {
    return $('//android.view.ViewGroup[@content-desc="menu item log in"]');
  }

  ///////////////////// Define methods for actions ///////////////////////////

  // This method opens side menu and select login option
  async openLoginPage() {
    await this.openMenuButton.waitForDisplayed({ timeout: 5000 });
    await this.openMenuButton.click();
    await this.loginOption.waitForDisplayed({ timeout: 5000 });
    await this.loginOption.click();
  }
}

export const sideMenuPage = new SideMenuPage();
