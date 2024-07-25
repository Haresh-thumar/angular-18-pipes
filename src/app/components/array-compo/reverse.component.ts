import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/array-pipe/reverse.pipe';

@Component({
  selector: 'app-Reverse',
  standalone: true,
  imports: [ReversePipe],
  template: `
    <!-------------- Reverse Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Reverse Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(value of items | reverse; track value){
          <li>{{ value }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppReverseComponent {
  items = ['Apple', 'Banana', 'Cherry', 'Date'];
}
