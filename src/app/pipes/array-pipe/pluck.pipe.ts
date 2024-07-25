import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
  standalone: true,
})
export class PluckPipe implements PipeTransform {
  transform(input: any, key: string): any {
    if (!isArray(input) || !key) {
      return input;
    }

    return input.map((value: any) => {
      return getProperty(value, key);
    });
  }
}

export function getProperty(value: { [key: string]: any }, key: string): any {
  if (isNil(value) || !isObject(value)) {
    return undefined;
  }
  const keys: string[] = key.split('.');
  let result: any = value[keys.shift()!];
  for (const key of keys) {
    if (isNil(result) || !isObject(result)) {
      return undefined;
    }
    result = result[key];
  }
  return result;
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isNil(value: any): value is null | undefined {
  return value === null || typeof value === 'undefined';
}

export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}
