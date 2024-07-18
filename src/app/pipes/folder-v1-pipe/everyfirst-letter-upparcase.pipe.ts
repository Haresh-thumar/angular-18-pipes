import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'everyfirstLetterUpparcase',
  standalone: true,
})
export class EveryfirstLetterUpparcasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/\b\w/g, (first) => first.toUpperCase());
  }
}
