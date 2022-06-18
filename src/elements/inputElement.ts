import { htmlElement } from './builder/elementBuilder';
import { ContainsInput } from './properties/containInput';

type Input = ContainsInput;

const properties = [ContainsInput];

export function createInputElement(selector: string): Input {
  return htmlElement(selector, properties);
}
