import { BasePage } from '../../../src/framework/basePage';
import PwService from '../../../src/framework/pwService';
import { Response } from '@playwright/test';
import { createInputElement } from '../../../src/elements/inputElement';
import { createButtonElement } from '../../../src/elements/buttonElement';

const URL = 'https://www.saucedemo.com/';

export const selectors = {
  userNameField: ' [id="user-name"]',
  passwordField: '[id="password"]',
  loginButton: '[id="login-button"]'
};

class LoginPage extends BasePage {
  userNameField = createInputElement(selectors.userNameField);
  passwordField = createInputElement(selectors.passwordField);
  loginButton = createButtonElement(selectors.loginButton);

  goTo(): Promise<null | Response> {
    return PwService.Instance.BrowserUtils.goTo(URL);
  }

  getUrl(): string {
    return URL;
  }

  async login(userName: string, password: string): Promise<void> {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

export const loginPage = new LoginPage();
