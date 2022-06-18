import { htmlElement } from './builder/elementBuilder';
import { Selectable } from './properties/selectable';

type Select = Selectable;

const properties = [Selectable];

export function createSelectElement(selector: string): Select {
  return htmlElement(selector, properties);
}
