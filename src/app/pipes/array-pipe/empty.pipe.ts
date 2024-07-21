import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty',
  standalone: true,
})
export class EmptyPipe implements PipeTransform {
  transform(input: any): any {
    return empty(input);
  }
}

export function empty(value: any): boolean {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length === 0;
  }
  return !value;
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
