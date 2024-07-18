import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugifyText',
  standalone: true,
})
export class SlugifyTextPipe implements PipeTransform {
  transform(input: string): string {
    if (!input) return '';
    return input
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Remove consecutive hyphens
  }
}
