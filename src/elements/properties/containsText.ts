import PwService from '../../framework/pwService';
import { BaseProperty } from './baseProperty';

export class ContainsText extends BaseProperty {
  constructor(selector: string) {
    super(selector);
  }

  public innerText(): Promise<string> {
    return PwService.Instance.HtmlUtils.innerText(this.selector);
  }

  public waitForText(expectedText: string): void {
    console.log(
      `Waiting for from ${expectedText} text to be present in ${this.selector}`
    );
  }
}
