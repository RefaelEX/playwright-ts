import { htmlElement } from './builder/elementBuilder';
import { ContainsInput } from './properties/containInput';
import { ContainsText } from './properties/containsText';

interface Textarea extends ContainsText, ContainsInput {}

const properties = [ContainsText, ContainsInput];

export function createTextareaElement(selector: string): Textarea {
  return htmlElement(selector, properties);
}
