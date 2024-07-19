import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formatdate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date, format: string): string | Date {
    if (!value) return '';
    return moment(value).format(format);
  }
}
