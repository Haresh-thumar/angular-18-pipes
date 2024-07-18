import { Component } from '@angular/core';
import { SumPipe } from '../../pipes/aggregate-pipe/sum.pipe';

@Component({
  selector: 'app-Sum',
  standalone: true,
  imports: [SumPipe],
  template: `
    <!-------------- Sum Pipe ---------------->
    <div class="three">
      <h1 class="heading">Sum Number</h1>
    </div>

    <div>
      <h3>Max Numbers</h3>
      <ul>
        @for(number of sumNumbers; track number){
        <li>{{ number }}</li>
        }
      </ul>
      <p>The numbers of Sum is: {{ sumNumbers | sum }}</p>
    </div>
  `,
})
export class AppSumComponent {
  sumNumbers = [10, 23, 45, 67, 89, 34, 22, 55];
}
