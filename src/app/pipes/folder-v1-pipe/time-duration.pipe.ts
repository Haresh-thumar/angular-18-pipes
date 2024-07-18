import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration',
  standalone: true,
})
export class TimeDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value || value <= 0) return '';

    const now = new Date();
    const targetTime = new Date(now.getTime());

    targetTime.setMinutes(targetTime.getMinutes() - value);
    const elapsedMinutes = Math.floor(
      Math.abs(now.getTime() - targetTime.getTime()) / 60000
    );

    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} ${
        elapsedMinutes === 1 ? 'minute' : 'minutes'
      } ago`;
    } else {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const remainingMinutes = elapsedMinutes % 60;

      if (remainingMinutes === 0) {
        return `${elapsedHours} ${elapsedHours === 1 ? 'hour' : 'hours'} ago`;
      } else {
        return `${elapsedHours} ${
          elapsedHours === 1 ? 'hour' : 'hours'
        } ${remainingMinutes} ${
          remainingMinutes === 1 ? 'minute' : 'minutes'
        } ago`;
      }
    }
  }
}
