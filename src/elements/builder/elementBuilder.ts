import { BaseProperty } from '../properties/baseProperty';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function htmlElementBuilder(constructors: any[]): any {
  const tmpElement = class Element extends BaseProperty {
    constructor(selector: string) {
      super(selector);
    }
  };

  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(tmpElement.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
    });
  });

  return tmpElement;
}

export function htmlElement<T extends typeof BaseProperty>(
  selector: string,
  properties: T[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  const htmlElement = htmlElementBuilder(properties);
  return new htmlElement(selector);
}
