import { Component } from '@angular/core';
import { HeadPipe } from '../../pipes/array-pipe/head.pipe';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [HeadPipe],
  template: `
    <!-------------- Head Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Head Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <div>
          <h1>First Item: {{ items | head }}</h1>
        </div>
      </div>
    </div>
  `,
})
export class AppHeadComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
}
