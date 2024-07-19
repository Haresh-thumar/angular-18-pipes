import { Component } from '@angular/core';
import { MaskPipePipe } from '../../pipes/folder-v1-pipe/mask-pipe.pipe';

@Component({
  selector: 'app-mask',
  standalone: true,
  imports: [MaskPipePipe],
  template: `
    <!-------------- Mask Pipe ---------------->
    <div class="three">
      <h1 class="heading">Mask Pipe</h1>
    </div>

    <div>
      <p>Original: {{ sampleText }}</p>
      <p>Masked: {{ sampleText | maskPipe }}</p>
      <p>Masked (visibleChars=6): {{ sampleText | maskPipe : 6 }}</p>
      <p>
        Masked (visibleChars=6, maskChar='#'):
        {{ sampleText | maskPipe : 6 : '#' }}
      </p>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Mask Number Pipe</p>
      <h3>{{ '759080846723' | maskPipe : 4 : '*' }}</h3>
    </div>
  `,
})
export class AppMaskComponent {
  sampleText = '1234567890';
}
