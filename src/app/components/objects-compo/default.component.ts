import { Component } from '@angular/core';
import { DefaultsPipe } from '../../pipes/objects-pipe/defaults.pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-Defaults',
  standalone: true,
  imports: [DefaultsPipe, JsonPipe],
  template: `
    <!-------------- Defaults Pipe ---------------->
    <div class="three">
      <h1 class="heading">Defaults Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Defaults Pipe</p>
      <h6>
        Settings 1: {{ userSettings1 | defaults : defaultSettings | json }}
      </h6>
      <h6>
        Settings 2: {{ userSettings2 | defaults : defaultSettings | json }}
      </h6>
      <h6>
        Settings 3: {{ userSettings3 | defaults : defaultSettings | json }}
      </h6>
    </div>
  `,
})
export class AppDefaultsComponent {
  defaultSettings = { theme: 'dark', notifications: true, language: 'en' };
  userSettings1 = { theme: 'light', language: 'es' };
  userSettings2 = null;
  userSettings3 = [{ theme: 'light' }, null, { language: 'fr' }];
}
