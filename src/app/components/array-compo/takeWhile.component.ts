import { Component } from '@angular/core';
import { TakeWhilePipe } from '../../pipes/array-pipe/take-while.pipe';

@Component({
  selector: 'app-TakeWhile',
  standalone: true,
  imports: [TakeWhilePipe],
  template: `
    <!-------------- TakeWhile Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">TakeWhile Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(value of items | takeWhile: predicate; track value){
          <li>{{ value }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppTakeWhileComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Predicate function to stop when a number is greater than 5
  predicate = (item: number) => item <= 5;
}
