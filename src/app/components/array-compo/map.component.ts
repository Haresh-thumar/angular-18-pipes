import { Component } from '@angular/core';
import { MapPipe } from '../../pipes/array-pipe/map.pipe';

@Component({
  selector: 'app-Map',
  standalone: true,
  imports: [MapPipe],
  template: `
    <!-------------- Map Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Map Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(item of items | mapPipe : multiplyByTwo; track item){
          <li>{{ item }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppMapComponent {
  items = [1, 2, 3, 4, 5];
  multiplyByTwo = (item: number) => item * 2;
}
