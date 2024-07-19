import { Pipe, type PipeTransform } from '@angular/core';
import moment from 'moment';
@Pipe({
  name: 'age',
  standalone: true,
})
export class AgeCalculationPipe implements PipeTransform {
  transform(value: string | Date): number | null {
    if (!value) return null;
    return moment().diff(moment(value), 'years');
  }
}
