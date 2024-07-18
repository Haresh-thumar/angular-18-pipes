import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianPhoneNumberFormat',
  standalone: true,
})
export class IndianPhoneNumberFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Remove all non-digit characters
    value = value.replace(/\D/g, '');

    // Check if the number is of valid length
    if (value.length !== 10) return value;

    // Format the number as per Indian phone number convention (XXX-XXXXXXX)
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
}
