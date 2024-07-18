import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActiveStatusPipe } from '../../pipes/folder-v1-pipe/active-status.pipe';

@Component({
  selector: 'app-Active-Status',
  standalone: true,
  imports: [NgClass, ActiveStatusPipe],
  template: `
    <!-------------- Active-Status Pipe ---------------->
    <div class="three">
      <h1 class="heading">Active-Status Pipe</h1>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        @for(item of objectArr; track item){
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>
            <span
              [ngClass]="item.active ? 'badge bg-success' : 'badge bg-danger'"
            >
              {{ item.active | activeStatus }}
            </span>
          </td>
        </tr>
        }
      </tbody>
    </table>
  `,
})
export class AppActiveStatusComponent {
  objectArr: any[] = [
    { id: 1, name: 'Rakesh Rout', active: true },
    { id: 2, name: 'Anurag Mohanty', active: false },
    { id: 3, name: 'Priyanka Dewangan', active: true },
    { id: 4, name: 'Hina Sharma', active: false },
    { id: 5, name: 'Sambit Satapathy', active: true },
    { id: 6, name: 'Rushika Pandya', active: true },
    { id: 7, name: 'Sndeep Jain', active: false },
    { id: 8, name: 'Mohit Sharma', active: false },
    { id: 9, name: 'Devangi Tripathi', active: true },
    { id: 10, name: 'Jignesh Dave', active: true },
  ];
}
