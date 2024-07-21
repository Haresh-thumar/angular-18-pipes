import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FlattenPipe } from '../../pipes/array-pipe/flatten.pipe';

@Component({
  selector: 'app-flatten',
  standalone: true,
  imports: [FlattenPipe, JsonPipe],
  template: `
    <!-------------- Flatten Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Flatten Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <p class="text-primary fw-bold">Flatten Pipe</p>
        <p>Flattened array of arrays: {{ arrayOfArrays | flatten }}</p>
        <p>Flattened deep object: {{ deepObject | flatten }}</p>
        <p>Flattened nested array: {{ nestedArray | flatten }}</p>
      </div>
    </div>
  `,
})
export class AppFlattenComponent {
  arrayOfArrays = [[1, 2], [3, [4, 5]], [6]];
  deepObject = { __isDeepObject__: true, data: [[1, 2], [3, [4, 5]], [6]] };
  nestedArray = [1, [2, [3, [4]]]];
}
