import { htmlElement } from '../builder/elementBuilder';
import { Clickable } from '../properties/clickable';
import { CommonsProperties } from '../properties/commonsProperties';
import { ContainsText } from '../properties/containsText';
import { Disablement } from '../properties/disablement';

interface Button
  extends CommonsProperties,
    Clickable,
    ContainsText,
    Disablement {}

const properties = [Clickable, ContainsText, Disablement, CommonsProperties];

export function createButtonElement(selector: string): Button {
  return htmlElement(selector, properties);
}
