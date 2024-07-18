import { Component } from '@angular/core';
import { JsonPrettyPrintPipe } from '../../pipes/folder-v1-pipe/json-pretty-print.pipe';

@Component({
  selector: 'app-JsonPrettyPrint',
  standalone: true,
  imports: [JsonPrettyPrintPipe],
  template: `
    <!-------------- json-pretty-print Pipe ---------------->
    <div class="three">
      <h1 class="heading">json-pretty-print Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">JSON Pretty Print Pipe</p>
      <pre>{{ jsonData | jsonPrettyPrint }}</pre>
    </div>
  `,
})
export class AppJsonPrettyPrintComponent {
  jsonData: any = { name: 'John', age: 30, city: 'New York' };
}
