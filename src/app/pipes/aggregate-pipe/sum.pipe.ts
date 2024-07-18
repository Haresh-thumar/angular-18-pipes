import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  standalone: true,
})
export class SumPipe implements PipeTransform {
  transform(input: any): any {
    return !isArray(input) ? input : sum(input);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

function sum(input: any[]): number {
  return input.reduce((acc, val) => acc + val, 0);
}
