import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapPipe',
  standalone: true,
})
export class MapPipe implements PipeTransform {
  transform(input: any, fn: Function): any {
    if (!isArray(input) || !fn) {
      return input;
    }

    return input.map(fn);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
