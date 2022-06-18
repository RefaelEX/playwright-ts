import PwService from '../../framework/pwService';
import { BaseProperty } from './baseProperty';

export class Selectable extends BaseProperty {
  constructor(selector: string) {
    super(selector);
  }

  public selectOption(options: string[]): Promise<Array<string>> {
    return PwService.Instance.HtmlUtils.selectOption(this.selector, options);
  }

  public getSelectedValue(): Promise<string> {
    return PwService.Instance.HtmlUtils.getInputValue(this.selector);
  }
}
