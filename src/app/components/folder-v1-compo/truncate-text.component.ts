import { Component } from '@angular/core';
import { TruncateTextPipe } from '../../pipes/folder-v1-pipe/truncate-text.pipe';

@Component({
  selector: 'app-TruncateText',
  standalone: true,
  imports: [TruncateTextPipe],
  template: `
    <!-------------- Truncate Text Pipe ---------------->
    <div class="three">
      <h1 class="heading">Truncate Text Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Truncate Text Pipe</p>
      <h4>{{ truncateString | truncateText : 10 }}</h4>
    </div>
  `,
})
export class AppTruncateTextComponent {
  truncateString: string = 'hello, how are you ? are you fine ';
}
