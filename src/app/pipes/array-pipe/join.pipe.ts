import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joins',
  standalone: true,
})
export class JoinPipe implements PipeTransform {
  transform(input: any, character: string = ''): any {
    if (!isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}
