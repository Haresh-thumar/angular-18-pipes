import { Component } from '@angular/core';
import { SortArrayAscDescOrderPipe } from '../../pipes/folder-v1-pipe/sort-array-asc-desc-order.pipe';

@Component({
  selector: 'app-sortArrayAscDescOrder',
  standalone: true,
  imports: [SortArrayAscDescOrderPipe],
  template: `
    <!-------------- sort-array-asc-desc-order Pipe ---------------->
    <div class="three">
      <h1 class="heading">sort-array-asc-desc-order Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Sort Array in ASC & DESC Order Pipe</p>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          @for(item of items | sortArrayAscDescOrder : 'price' : 'desc'; track
          item){
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class AppSortArrayAscDescOrderComponent {
  items: any[] = [
    { name: 'Samsung', price: '23000' },
    { name: 'Nokia', price: '42000' },
    { name: 'Motorola', price: '29000' },
    { name: 'Sony', price: '23530' },
    { name: 'LG', price: '42620' },
    { name: 'Realme', price: '30000' },
    { name: 'Oppo', price: '16000' },
    { name: 'Vivo', price: '20500' },
    { name: 'Techno', price: '12300' },
  ];
}
