import { BasePage } from '../../../src/framework/basePage';
import PwService from '../../../src/framework/pwService';
import { Response } from '@playwright/test';
import { createBaseElement } from '../../../src/elements/htmlElements/baseElement';

const URL = 'https://www.saucedemo.com/inventory.html';

export const selectors = {
  inventoryContainerDiv: ' [id="inventory_container"]'
};

class InventoryPage extends BasePage {
  inventoryContainerDiv = createBaseElement(selectors.inventoryContainerDiv);

  goTo(): Promise<null | Response> {
    return PwService.Instance.BrowserUtils.goTo(URL);
  }

  getUrl(): string {
    return URL;
  }
}

export const inventoryPage = new InventoryPage();
