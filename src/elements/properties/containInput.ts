import PwService from '../../framework/pwService';
import { BaseProperty } from './baseProperty';

export class ContainsInput extends BaseProperty {
  constructor(selector: string) {
    super(selector);
  }

  public clear(): Promise<void> {
    return PwService.Instance.HtmlUtils.clear(this.selector);
  }

  public fill(text: string): Promise<void> {
    return PwService.Instance.HtmlUtils.fill(this.selector, text);
  }

  public getValue(): Promise<string> {
    return PwService.Instance.HtmlUtils.getInputValue(this.selector);
  }
}
