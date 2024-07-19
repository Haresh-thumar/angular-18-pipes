import { Component } from '@angular/core';
import { FormatDatePipe } from '../../pipes/aggregate-pipe/format-date.pipe';

@Component({
  selector: 'app-formatDate',
  standalone: true,
  imports: [FormatDatePipe],
  template: `
    <!-------------- Format Date Pipe ---------------->
    <div class="three">
      <h1 class="heading">Format Date Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Format Date Pipe</p>
      <h4>
        Formatted Date 1 ({{ date1 }}):
        <b>{{ date1 | formatdate : 'MMMM Do YYYY' }}</b>
      </h4>
      <h4>
        Formatted Date 2 ({{ date2 }}):
        <b>{{ date2 | formatdate : 'dddd, MMMM Do YYYY, h:mm:ss a' }}</b>
      </h4>
      <h4>
        Formatted Date 3 ({{ date3 }}):
        <b>{{ date3 | formatdate : 'YYYY-MM-DD HH:mm' }}</b>
      </h4>
    </div>
  `,
})
export class AppFormatDateComponent {
  date1 = '2024-07-17';
  date2 = '1995-12-25T12:34:56Z';
  date3 = new Date('2023-05-10T08:30:00');
}
