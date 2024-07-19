import { Component } from '@angular/core';
import { OrdinalNumberPipe } from '../../pipes/folder-v1-pipe/ordinal-number.pipe';

@Component({
  selector: 'app-ordinalNumber',
  standalone: true,
  imports: [OrdinalNumberPipe],
  template: `
    <!-------------- Ordinal Number Pipe ---------------->
    <div class="three">
      <h1 class="heading">Ordinal Number Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Ordinal Number Pipe</p>
      <h4>{{ ordinamNum1 | ordinalNumber }}</h4>
      <h4>{{ ordinamNum2 | ordinalNumber }}</h4>
      <h4>{{ ordinamNum3 | ordinalNumber }}</h4>
      <h4>{{ ordinamNum4 | ordinalNumber }}</h4>
    </div>
  `,
})
export class AppOrdinalNumberComponent {
  ordinamNum1: number = 1;
  ordinamNum2: number = 22;
  ordinamNum3: number = 33;
  ordinamNum4: number = 7;
}
