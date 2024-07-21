import { Component } from '@angular/core';
import { DecodeURIPipe } from '../../pipes/string-pipe/decodeURI.pipe';

@Component({
  selector: 'app-decodeURI',
  standalone: true,
  imports: [DecodeURIPipe],
  template: `
    <!-------------- DecodeURI Pipe ---------------->
    <div class="three">
      <h1 class="heading">DecodeURI Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">DecodeURI Pipe</p>
      <p>{{ encodedText | decodeURI }}</p>
    </div>
  `,
})
export class AppcDecodeURIComponent {
  encodedText: string = 'https%3A%2F%2Fexample.com%2Fsome%20path';
}
