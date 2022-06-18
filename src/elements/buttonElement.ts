import { Clickable } from './properties/clickable';
import { ContainsText } from './properties/containsText';
import { htmlElement } from './builder/elementBuilder';
import { Disablement } from './properties/disablement';

interface Button extends Clickable, ContainsText, Disablement {}

const properties = [Clickable, ContainsText, Disablement];

export function createButtonElement(selector: string): Button {
  return htmlElement(selector, properties);
}
