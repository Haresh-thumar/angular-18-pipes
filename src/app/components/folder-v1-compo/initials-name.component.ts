import { Component } from '@angular/core';
import { InitialsNamePipe } from '../../pipes/folder-v1-pipe/initials-name.pipe';

@Component({
  selector: 'app-InitialsName',
  standalone: true,
  imports: [InitialsNamePipe],
  template: `
    <!-------------- Initials-Name Pipe ---------------->
    <div class="three">
      <h1 class="heading">Initials-Name Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Initials Pipe</p>
      <h4>
        {{ name1 }} - <b>{{ name1 | initialsName }}</b>
      </h4>
      <h4>
        {{ name2 }} - <b>{{ name2 | initialsName }}</b>
      </h4>
      <h4>
        {{ name3 }} - <b>{{ name3 | initialsName }}</b>
      </h4>
    </div>
  `,
})
export class AppInitialsNameComponent {
  name1: string = 'John Doe';
  name2: string = 'Henry George';
  name3: string = 'Oliver Leo';
}
