import PwService from '../../framework/pwService';
import { BaseProperty } from './baseProperty';

export class Clickable extends BaseProperty {
  constructor(selector: string) {
    super(selector);
  }

  public async click(): Promise<void> {
    return PwService.Instance.HtmlUtils.click(this.selector);
  }
}
