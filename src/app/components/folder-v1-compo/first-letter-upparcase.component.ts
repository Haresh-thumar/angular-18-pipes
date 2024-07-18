import { Component } from '@angular/core';
import { FirstLetterUpparcasePipe } from '../../pipes/folder-v1-pipe/first-letter-upparcase.pipe';

@Component({
  selector: 'app-FirstLetterUpparcase',
  standalone: true,
  imports: [FirstLetterUpparcasePipe],
  template: `
    <!-------------- First-Letter-Upparcase Pipe ---------------->
    <div class="three">
      <h1 class="heading">First-Letter-Upparcase Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Only First Letter Uppercase Pipe</p>
      <h4>{{ firstLetter | firstLetterUpparcase }}</h4>
    </div>
  `,
})
export class AppFirstLetterUpparcaseComponent {
  firstLetter: string = 'hello world, how area you !';
}
