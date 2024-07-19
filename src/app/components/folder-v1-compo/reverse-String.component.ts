import { Component } from '@angular/core';
import { ReverseStringPipe } from '../../pipes/folder-v1-pipe/reverse-string.pipe';

@Component({
  selector: 'app-reverseString',
  standalone: true,
  imports: [ReverseStringPipe],
  template: `
    <!-------------- Reverse String Pipe ---------------->
    <div class="three">
      <h1 class="heading">Reverse String Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Reverse String Pipe</p>
      <h4>{{ reverseString | reverseString }}</h4>
    </div>
  `,
})
export class AppReverseStringComponent {
  reverseString: string = 'hello world, how area you !';
}
