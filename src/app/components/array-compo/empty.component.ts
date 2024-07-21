import { Component } from '@angular/core';
import { EmptyPipe } from '../../pipes/array-pipe/empty.pipe';

@Component({
  selector: 'app-deep',
  standalone: true,
  imports: [EmptyPipe],
  template: `
    <!-------------- Deep Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Deep Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <p class="text-primary fw-bold">Deep Pipe</p>
        <div>
          <p>Is empty-string-empty?: {{ emptyString | empty }}</p>
          <p>Is non-empty string empty?: {{ nonEmptyString | empty }}</p>
          <p>Is empty array empty?: {{ emptyArray | empty }}</p>
          <p>Is non-empty array empty?: {{ nonEmptyArray | empty }}</p>
          <p>Is empty object empty?: {{ emptyObject | empty }}</p>
          <p>Is non-empty object empty?: {{ nonEmptyObject | empty }}</p>
        </div>
      </div>
    </div>
  `,
})
export class AppEmptyComponent {
  emptyString: string = '';
  nonEmptyString: string = 'Hello';
  emptyArray: any[] = [];
  nonEmptyArray: any[] = [1, 2, 3];
  emptyObject: object = {};
  nonEmptyObject: object = { key: 'value' };
}
