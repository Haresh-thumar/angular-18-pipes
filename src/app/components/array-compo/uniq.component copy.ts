import { Component } from '@angular/core';
import { UniqPipe } from '../../pipes/array-pipe/uniq.pipe';

@Component({
  selector: 'app-uniq',
  standalone: true,
  imports: [UniqPipe],
  template: `
    <!-------------- Uniq Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Uniq Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <ul>
          @for(item of flatArray | uniq; track item){
          <li>{{ item }}</li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class AppUniqComponent {
  flatArray = [1, 2, 2, 3, 4, 4, 5];
}
