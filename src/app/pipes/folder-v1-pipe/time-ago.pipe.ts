import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

    if (seconds < 60) {
      return 'just now';
    }

    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    let counter: number;
    for (const interval in intervals) {
      counter = Math.floor(seconds / intervals[interval]);
      if (counter > 0) {
        if (counter === 1) {
          return counter + ' ' + interval + ' ago'; // singular (1 day ago)
        } else {
          return counter + ' ' + interval + 's ago'; // plural (2 days ago)
        }
      }
    }

    return value;
  }
}
