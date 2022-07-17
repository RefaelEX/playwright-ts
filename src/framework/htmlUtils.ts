import { FrameLocator, Locator, Page } from '@playwright/test';

export default class HtmlUtils {
  private page: Page;
  private inIframe: FrameLocator;

  constructor(page: Page) {
    this.page = page;
  }

  public inFrame(frameSelector: string): void {
    if (this.inIframe) {
      this.inIframe = this.inIframe.frameLocator(frameSelector);
      return;
    }
    this.inIframe = this.page.frameLocator(frameSelector);
  }

  public backToMainFrame() {
    this.inIframe = null;
  }

  public getLocator(selector: string): Locator {
    if (!this.inIframe) {
      return this.page.locator(selector).first();
    }
    return this.inIframe.locator(selector).first();
  }

  public click(selector: string): Promise<void> {
    return this.getLocator(selector).click();
  }

  public fill(selector: string, text: string): Promise<void> {
    return this.getLocator(selector).fill(text);
  }

  public clear(selector: string): Promise<void> {
    return this.fill(selector, '');
  }

  public innerText(selector: string): Promise<string> {
    return this.getLocator(selector).innerText();
  }

  public selectOption(selector: string, options: string[]): Promise<Array<string>> {
    return this.getLocator(selector).selectOption(options);
  }

  public getInputValue(selector: string): Promise<string> {
    return this.getLocator(selector).inputValue();
  }

  public getAttribute(selector: string, name: string): Promise<string> {
    return this.getLocator(selector).getAttribute(name);
  }

  public getCssProperty(selector: string, cssProperty: string): Promise<string> {
    return this.getLocator(selector).evaluate((elem, cssProperty) => {
      return window.getComputedStyle(elem).getPropertyValue(cssProperty);
    }, cssProperty);
  }

  public isDisabled(selector: string): Promise<boolean> {
    return this.getLocator(selector).isDisabled();
  }
}
