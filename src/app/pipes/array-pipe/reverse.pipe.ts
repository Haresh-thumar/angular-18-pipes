import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }
    return [...input].reverse();
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
