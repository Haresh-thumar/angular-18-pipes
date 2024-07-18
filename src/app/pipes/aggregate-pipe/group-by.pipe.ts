import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
  standalone: true,
})
export class GroupByPipe implements PipeTransform {
  transform(input: any, prop: string): Array<any> {
    if (!isArray(input)) {
      return input;
    }

    const arr: { [key: string]: Array<any> } = {};

    for (const value of input) {
      const field: any = getProperty(value, prop);

      if (isUndefined(arr[field])) {
        arr[field] = [];
      }

      arr[field].push(value);
    }

    return Object.keys(arr).map((key) => ({ key, value: arr[key] }));
  }
}

export function getProperty(obj: any, prop: string): any {
  return prop
    .split('.')
    .reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}
