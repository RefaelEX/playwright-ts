import { htmlElement } from '../builder/elementBuilder';
import { CommonsProperties } from '../properties/commonsProperties';
import { ContainsInput } from '../properties/containInput';

interface Input extends ContainsInput, CommonsProperties {}

const properties = [ContainsInput, CommonsProperties];

export function createInputElement(selector: string): Input {
  return htmlElement(selector, properties);
}
