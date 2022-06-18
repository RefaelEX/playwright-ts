import { Locator } from '@playwright/test';
import PwService from '../../framework/pwService';

export class BaseProperty {
  protected selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public getAttribute(name: string): Promise<string> {
    return PwService.Instance.HtmlUtils.getAttribute(this.selector, name);
  }

  public getCssProperty(cssProperty: string): Promise<string> {
    return PwService.Instance.HtmlUtils.getCssProperty(
      this.selector,
      cssProperty
    );
  }

  public getLocator(): Locator {
    return PwService.Instance.HtmlUtils.getLocator(this.selector);
  }
}
