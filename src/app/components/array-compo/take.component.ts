import { Component } from '@angular/core';
import { TakePipe } from '../../pipes/array-pipe/take.pipe';

@Component({
  selector: 'app-Take',
  standalone: true,
  imports: [TakePipe],
  template: `
    <!-------------- Take Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Take Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(value of items | take: quantity; track value){
          <li>{{ value }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppTakeComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity = 5;
}
