import { Component } from '@angular/core';
import { ColorContrastPipe } from '../../pipes/folder-v1-pipe/color-contrast.pipe';

@Component({
  selector: 'app-colorContrast',
  standalone: true,
  imports: [ColorContrastPipe],
  template: `
    <!-------------- color-Contrast Pipe ---------------->
    <div class="three">
      <h1 class="heading">color-Contrast Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <div
        class="p-3"
        [style.background-color]="'orangeRed'"
        [style.color]="'orangeRed' | colorContrast"
      >
        Text with contrast
      </div>
    </div>
  `,
})
export class AppColorContrastComponent {}
