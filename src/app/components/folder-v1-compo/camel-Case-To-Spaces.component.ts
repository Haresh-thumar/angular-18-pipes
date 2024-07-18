import { Component } from '@angular/core';
import { CamelCaseToSpacesPipe } from '../../pipes/folder-v1-pipe/camel-case-to-spaces.pipe';

@Component({
  selector: 'app-camelCaseToSpaces',
  standalone: true,
  imports: [CamelCaseToSpacesPipe],
  template: `
    <!-------------- Camel-Case-To-Spaces Pipe ---------------->
    <div class="three">
      <h1 class="heading">Camel-Case-To-Spaces Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <h4>{{ nameString1 | camelCaseToSpaces }}</h4>
      <h4>{{ nameString2 | camelCaseToSpaces }}</h4>
    </div>
  `,
})
export class AppCamelCaseToSpacesComponent {
  nameString1: string = 'camelCaseExample';
  nameString2: string = 'findCamelCaseSpace';
}
