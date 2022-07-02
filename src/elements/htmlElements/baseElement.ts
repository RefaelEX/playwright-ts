import { ContainsText } from '../properties/containsText';
import { htmlElement } from '../builder/elementBuilder';
import { Disablement } from '../properties/disablement';
import { CommonsProperties } from '../properties/commonsProperties';

interface BaseElement extends ContainsText, Disablement, CommonsProperties {}

const properties = [ContainsText, CommonsProperties, Disablement];

export function createBaseElement(selector: string): BaseElement {
  return htmlElement(selector, properties);
}
