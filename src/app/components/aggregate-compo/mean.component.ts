import { Component } from '@angular/core';
import { MeanPipe } from '../../pipes/aggregate-pipe/mean.pipe';

@Component({
  selector: 'app-Mean',
  standalone: true,
  imports: [MeanPipe],
  template: `
    <!-------------- Mean Pipe ---------------->
    <div class="three">
      <h1 class="heading">Mean Number</h1>
    </div>

    <div>
      <h3>Max Numbers</h3>
      <ul>
        @for(number of meanNumbers; track number){
        <li>{{ number }}</li>
        }
      </ul>
      <p>The mean number is: {{ meanNumbers | mean }}</p>
    </div>
  `,
})
export class AppMeanComponent {
  meanNumbers = [10, 23, 45, 67, 89, 34, 22, 55];
}
