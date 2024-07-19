import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printObjKey',
  standalone: true,
})
export class PrintObjKeyPipe implements PipeTransform {
  transform(input: any): any {
    if (!isObject(input)) {
      return input;
    }

    return Object.keys(input);
  }
}

export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
