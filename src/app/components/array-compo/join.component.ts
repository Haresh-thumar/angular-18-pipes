import { Component } from '@angular/core';
import { JoinPipe } from '../../pipes/array-pipe/join.pipe';

@Component({
  selector: 'app-Join',
  standalone: true,
  imports: [JoinPipe],
  template: `
    <!-------------- Join Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Join Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <div>
          <h3>{{ items | joins : ', ' }}</h3>
        </div>
      </div>
    </div>
  `,
})
export class AppJoinComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
}
