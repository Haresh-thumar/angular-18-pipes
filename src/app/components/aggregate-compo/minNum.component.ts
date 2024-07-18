import { Component } from '@angular/core';
import { MinNumPipe } from '../../pipes/aggregate-pipe/min-num.pipe';

@Component({
  selector: 'app-minNum',
  standalone: true,
  imports: [MinNumPipe],
  template: `
    <!-------------- MinNum Pipe ---------------->
    <div class="three">
      <h1 class="heading">Min Number</h1>
    </div>

    <div>
      <h3>Max Numbers</h3>
      <ul>
        @for(number of minNumbers; track number){
        <li>{{ number }}</li>
        }
      </ul>
      <p>The minimum number is: {{ minNumbers | minNum }}</p>
    </div>
  `,
})
export class AppMinNumComponent {
  minNumbers = [10, 23, 45, 67, 89, 34, 22, 55];
}
