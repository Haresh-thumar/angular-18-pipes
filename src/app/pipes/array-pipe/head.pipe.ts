import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'head',
  standalone: true,
})
export class HeadPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }
    return input[0];
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
