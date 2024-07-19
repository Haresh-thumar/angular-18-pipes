import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaults',
  standalone: true,
})
export class DefaultsPipe implements PipeTransform {
  transform(input: any, defaults: any): any {
    if (!isObject(defaults)) {
      return input;
    }

    if (isNil(input)) {
      return defaults;
    }

    if (isArray(input)) {
      return input.map((item: any) => {
        if (isObject(item)) {
          return Object.assign({}, defaults, item);
        }

        if (isNil(item)) {
          return defaults;
        }

        return item;
      });
    }

    if (isObject(input)) {
      return Object.assign({}, defaults, input);
    }

    return input;
  }
}

export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object' && !isArray(value);
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isNil(value: any): boolean {
  return value === null || value === undefined;
}
