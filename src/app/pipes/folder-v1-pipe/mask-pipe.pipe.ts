import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPipe',
  standalone: true,
})
export class MaskPipePipe implements PipeTransform {
  transform(
    value: string,
    visibleChars: number = 4,
    maskChar: string = '*'
  ): string {
    if (!value) return value;

    const maskedSection = value.slice(0, -visibleChars).replace(/./g, maskChar);
    const visibleSection = value.slice(-visibleChars);

    return maskedSection + visibleSection;
  }
}
