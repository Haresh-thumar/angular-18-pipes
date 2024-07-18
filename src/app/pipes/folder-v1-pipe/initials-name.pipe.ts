import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialsName',
  standalone: true,
})
export class InitialsNamePipe implements PipeTransform {
  transform(fullName: string): string {
    if (!fullName) return '';
    const nameParts = fullName.split(' ');
    return nameParts.map((part) => part.charAt(0).toUpperCase()).join('');
  }
}
