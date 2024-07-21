import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DropPipe } from '../../pipes/array-pipe/drop.pipe';

@Component({
  selector: 'app-deep',
  standalone: true,
  imports: [JsonPipe, DropPipe],
  template: `
    <!-------------- Deep Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Deep Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <p class="text-primary fw-bold">Deep Pipe</p>
        <div>
          <p>Original Items: {{ items | json }}</p>
          <p>Item-after-Drop Pipe (default 1): {{ items | drops | json }}</p>
          <p>Items-after-drop Pipe (drop 2): {{ items | drops : 2 | json }}</p>
        </div>
      </div>
    </div>
  `,
})
export class AppDropComponent {
  items: number[] = [1, 2, 3, 4, 5, 6];
}
