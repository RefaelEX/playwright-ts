import PwService from '../../framework/pwService';
import { BaseProperty } from './baseProperty';

export class Disablement extends BaseProperty {
  constructor(selector: string) {
    super(selector);
  }

  public async isDisabled(): Promise<boolean> {
    return PwService.Instance.HtmlUtils.isDisabled(this.selector);
  }
}
