import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastPipe',
  standalone: true,
})
export class LastPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    // Returns undefined if empty
    return input[input.length - 1];
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
