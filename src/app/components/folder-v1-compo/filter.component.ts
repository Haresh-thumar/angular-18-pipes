import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/folder-v1-pipe/filter.pipe';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, FilterPipe],
  template: `
    <!-------------- Filter Pipe ---------------->
    <div class="three">
      <h1 class="heading">Filter Pipe</h1>
    </div>

    <div>
      <input
        type="text"
        class="mb-3 form-control"
        [(ngModel)]="searchText"
        placeholder="Search by name"
      />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          @for(item of items | filterPipe : searchText : 'name'; track item){
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.city }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class AppFilterComponent {
  searchText: string = '';
  items = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Los Angeles' },
    { name: 'David', age: 40, city: 'Chicago' },
  ];
}
