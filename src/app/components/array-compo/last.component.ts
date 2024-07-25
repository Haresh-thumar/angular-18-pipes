import { Component } from '@angular/core';
import { LastPipe } from '../../pipes/array-pipe/last.pipe';

@Component({
  selector: 'app-last',
  standalone: true,
  imports: [LastPipe],
  template: `
    <!-------------- Last Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Last Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <div>
          <h3>{{ items | lastPipe }}</h3>
        </div>
      </div>
    </div>
  `,
})
export class AppLastComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
}
