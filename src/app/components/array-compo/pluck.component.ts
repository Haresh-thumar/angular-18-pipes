import { Component } from '@angular/core';
import { PluckPipe } from '../../pipes/array-pipe/pluck.pipe';

@Component({
  selector: 'app-pluck',
  standalone: true,
  imports: [PluckPipe],
  template: `
    <!-------------- Pluck Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Pluck Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(value of items | pluck:'details.value'; track value){
          <li>{{ value }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppPluckComponent {
  items = [
    { name: 'Item 1', details: { value: 3 } },
    { name: 'Item 2', details: { value: 1 } },
    { name: 'Item 3', details: { value: 2 } },
  ];
}
