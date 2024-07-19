import { Component } from '@angular/core';
import { PrintObjKeyPipe } from '../../pipes/objects-pipe/printObjkeys.pipe';

@Component({
  selector: 'app-printObjKeys',
  standalone: true,
  imports: [PrintObjKeyPipe],
  template: `
    <!-------------- print Object Keys Pipe ---------------->
    <div class="three">
      <h1 class="heading">Print Object Keys Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Print Object Keys Pipe</p>
      <ul>
        @for(key of userSettings | printObjKey; track key){
        <li>{{ key }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppPrintObjKeysComponent {
  userSettings = {
    theme: 'dark',
    notifications: true,
    language: 'en',
    timezone: 'GMT',
  };
}
