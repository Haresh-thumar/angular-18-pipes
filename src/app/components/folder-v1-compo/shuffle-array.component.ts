import { Component } from '@angular/core';
import { ShuffleArrayPipe } from '../../pipes/folder-v1-pipe/shuffle-array.pipe';

@Component({
  selector: 'app-shuffleArray',
  standalone: true,
  imports: [ShuffleArrayPipe],
  template: `
    <!-------------- Shuffle Array Pipe ---------------->
    <div class="three">
      <h1 class="heading">Shuffle Array Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Shuffle Array Pipe</p>
      <ul>
        @for(item of shuffleArr | shuffleArray; track item){
        <li>{{ item }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppShuffleArrayComponent {
  shuffleArr: number[] = [1, 2, 3, 4, 5];
}
