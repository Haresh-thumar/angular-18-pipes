import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { DeepPipe } from '../../pipes/array-pipe/deep.pipe';

@Component({
  selector: 'app-deep',
  standalone: true,
  imports: [JsonPipe, DeepPipe],
  template: `
    <!-------------- Deep Pipe ---------------->
    <div class="three">
      <div class="three">
        <h1 class="heading">Deep Pipe</h1>
      </div>
      <div class="card p-3 mb-4">
        <p class="text-primary fw-bold">Deep Pipe</p>
        <div>
          <pre>Original Data: {{ datas | json }}</pre>
          <pre>Deep Wrapped Data: {{ datas | deep | json }}</pre>
        </div>
      </div>
    </div>
  `,
})
export class AppDeepComponent {
  datas: any = { name: 'Angular', type: 'Framework' };
}
