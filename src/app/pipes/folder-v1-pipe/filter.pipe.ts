import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], searchValue: string, field: string): any[] {
    if (!values) return [];
    if (!searchValue) return values;

    return values.filter((data) => {
      return data[field].toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
