import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxNum',
  standalone: true,
})
export class MaxNumPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    if (input.length === 0) {
      return undefined;
    }

    let max = input[0];

    input.forEach((value: any) => {
      if (max < value) {
        max = value;
      }
    });

    return max;
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
