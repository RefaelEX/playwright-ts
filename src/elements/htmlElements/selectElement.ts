import { htmlElement } from '../builder/elementBuilder';
import { CommonsProperties } from '../properties/commonsProperties';
import { Selectable } from '../properties/selectable';

interface Select extends CommonsProperties, Selectable {}

const properties = [CommonsProperties, Selectable];

export function createSelectElement(selector: string): Select {
  return htmlElement(selector, properties);
}
