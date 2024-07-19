import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printObjValue',
  standalone: true,
})
export class PrintObjKeyPipe implements PipeTransform {
  transform(input: any): any {
    if (input === null || typeof input !== 'object' || Array.isArray(input)) {
      return input;
    }

    return Object.keys(input).map((key) => input[key]);
  }
}
