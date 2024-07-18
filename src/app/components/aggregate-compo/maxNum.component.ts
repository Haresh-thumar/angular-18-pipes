import { Component } from '@angular/core';
import { MaxNumPipe } from '../../pipes/aggregate-pipe/max-num.pipe';

@Component({
  selector: 'app-maxNum',
  standalone: true,
  imports: [MaxNumPipe],
  template: `
    <!-------------- MaxNum Pipe ---------------->
    <div class="three">
      <h1 class="heading">Max Number</h1>
    </div>

    <div>
      <h3>Max Numbers</h3>
      <ul>
        @for(number of maxNumbers; track number){
        <li>{{ number }}</li>
        }
      </ul>
      <p>The maximum number is: {{ maxNumbers | maxNum }}</p>
    </div>
  `,
})
export class AppMaxNumComponent {
  maxNumbers = [10, 23, 45, 67, 89, 34, 22, 55];
}
