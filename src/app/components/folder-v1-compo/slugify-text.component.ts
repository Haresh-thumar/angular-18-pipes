import { Component } from '@angular/core';
import { SlugifyTextPipe } from '../../pipes/folder-v1-pipe/slugify-text.pipe';

@Component({
  selector: 'app-slugifyText',
  standalone: true,
  imports: [SlugifyTextPipe],
  template: `
    <!-------------- Slugify Text Pipe ---------------->
    <div class="three">
      <h1 class="heading">Slugify Text Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Slugify Text Pipe</p>
      <h3>{{ 'This is a Slug Example!' | slugifyText }}</h3>
    </div>
  `,
})
export class AppSlugifyTextComponent {
  shuffleArr: number[] = [1, 2, 3, 4, 5];
}
