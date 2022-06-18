import { Response } from '@playwright/test';
import { createBaseElement } from '../../src/elements/baseElement';
import { BasePage } from '../../src/framework/basePage';

export const selectors = {
  hElement: '#h1-id'
};

class Iframe01Page extends BasePage {
  public hElement = createBaseElement(selectors.hElement);

  goTo(): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}

export const iframe01Page = new Iframe01Page();
