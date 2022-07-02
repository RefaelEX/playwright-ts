import { htmlElement } from '../builder/elementBuilder';
import { CommonsProperties } from '../properties/commonsProperties';
import { ContainsInput } from '../properties/containInput';
import { ContainsText } from '../properties/containsText';

interface Textarea extends CommonsProperties, ContainsText, ContainsInput {}

const properties = [CommonsProperties, ContainsText, ContainsInput];

export function createTextareaElement(selector: string): Textarea {
  return htmlElement(selector, properties);
}
