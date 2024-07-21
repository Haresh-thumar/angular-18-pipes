import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drops',
  standalone: true,
})
export class DropPipe implements PipeTransform {
  transform(input: any, quantity?: number): any {
    if (!isArray(input)) {
      return input;
    }

    return input.slice(quantity || 1, input.length);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
