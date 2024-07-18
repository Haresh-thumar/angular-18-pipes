import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeStatus',
  standalone: true,
})
export class ActiveStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Active' : 'DeActive';
  }
}
