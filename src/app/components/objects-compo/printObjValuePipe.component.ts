import { Component } from '@angular/core';
import { PrintObjKeyPipe } from '../../pipes/objects-pipe/printObjValue.pipe';

@Component({
  selector: 'app-printObjValuePipe',
  standalone: true,
  imports: [PrintObjKeyPipe],
  template: `
    <!-------------- Print Obj Value Pipe ---------------->
    <div class="three">
      <h1 class="heading">Print Obj Value Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Print Obj Value Pipe</p>
      <ul>
        @for(value of userSettings | printObjValue; track value){
        <li>{{ value }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppToArrayComponent {
  userSettings = {
    theme: 'dark',
    notifications: true,
    language: 'en',
    timezone: 'GMT',
  };
}
