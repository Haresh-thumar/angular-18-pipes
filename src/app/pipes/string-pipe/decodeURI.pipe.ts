import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeURI',
  standalone: true,
})
export class DecodeURIPipe implements PipeTransform {
  transform(input: any) {
    if (typeof input !== 'string') {
      return input;
    }

    return decodeURIComponent(input);
  }
}
