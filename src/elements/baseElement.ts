import { ContainsText } from './properties/containsText';
import { htmlElement } from './builder/elementBuilder';
import { Disablement } from './properties/disablement';

interface BaseElement extends ContainsText, Disablement {}

const properties = [ContainsText];

export function createBaseElement(selector: string): BaseElement {
  return htmlElement(selector, properties);
}
