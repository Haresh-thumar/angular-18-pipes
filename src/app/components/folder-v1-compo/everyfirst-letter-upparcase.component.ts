import { Component } from '@angular/core';
import { EveryfirstLetterUpparcasePipe } from '../../pipes/folder-v1-pipe/everyfirst-letter-upparcase.pipe';

@Component({
  selector: 'app-EveryFirstLetterUppercase',
  standalone: true,
  imports: [EveryfirstLetterUpparcasePipe],
  template: `
    <!-------------- Every-First-Letter-Uppercase Pipe ---------------->
    <div class="three">
      <h1 class="heading">Every-First-Letter-Uppercase Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Every First Letter Uppercase Pipe</p>
      <h4>{{ everyFirstLetter | everyfirstLetterUpparcase }}</h4>
    </div>
  `,
})
export class AppEveryFirstLetterUppercaseComponent {
  everyFirstLetter: string = 'hello world, how area you !';
}
