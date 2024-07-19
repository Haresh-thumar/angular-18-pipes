import { Component } from '@angular/core';
import { NumericalToRomanPipe } from '../../pipes/folder-v1-pipe/numerical-to-roman.pipe';

@Component({
  selector: 'app-NumericalToRoman',
  standalone: true,
  imports: [NumericalToRomanPipe],
  template: `
    <!-------------- Numerical-To-Roman Pipe ---------------->
    <div class="three">
      <h1 class="heading">Numerical-To-Roman Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Numerical to Roman Pipe</p>
      <h3>{{ 5 | numericalToRoman }}</h3>
      <h3>{{ 50 | numericalToRoman }}</h3>
      <h3>{{ 550 | numericalToRoman }}</h3>
      <h3>{{ 1987 | numericalToRoman }}</h3>
    </div>
  `,
})
export class AppNumericalToRomanComponent {}
