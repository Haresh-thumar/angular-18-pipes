import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take',
  standalone: true,
})
export class TakePipe implements PipeTransform {
  transform(input: any, quantity?: number): any {
    if (!isArray(input)) {
      return input;
    }
    return input.slice(0, quantity || 1);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
