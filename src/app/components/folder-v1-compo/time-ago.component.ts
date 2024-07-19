import { Component } from '@angular/core';
import { TimeAgoPipe } from '../../pipes/folder-v1-pipe/time-ago.pipe';

@Component({
  selector: 'app-timeAgo',
  standalone: true,
  imports: [TimeAgoPipe],
  template: `
    <!-------------- Time Ago Pipe ---------------->
    <div class="three">
      <h1 class="heading">Time Ago Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Time Ago Pipe</p>
      <h4>{{ todayDate | timeAgo }}</h4>
      <h4>{{ twoMonthAgo | timeAgo }}</h4>
      <h4>{{ oneYearAgo | timeAgo }}</h4>
      <h4>{{ fiveYearAgo | timeAgo }}</h4>
    </div>
  `,
})
export class AppTimeAgoComponent {
  todayDate = new Date();
  twoMonthAgo = '2024-03-10T12:34:56Z';
  oneYearAgo = '2023-05-10T12:34:56Z';
  fiveYearAgo = '2019-05-10T12:34:56Z';
}
