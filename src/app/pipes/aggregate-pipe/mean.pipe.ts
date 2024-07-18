import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mean',
  standalone: true,
})
export class MeanPipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    const count = input.length;

    if (count === 0) {
      return undefined;
    }

    return sum(input) / count;
  }
}

function sum(input: any[]): number {
  return input.reduce((acc, val) => acc + val, 0);
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
