import { Component } from '@angular/core';
import { GroupByPipe } from '../../pipes/aggregate-pipe/group-by.pipe';

@Component({
  selector: 'app-GroupBy',
  standalone: true,
  imports: [GroupByPipe],
  template: `
    <!-------------- GroupBy Pipe ---------------->
    <div class="three">
      <h1 class="heading">GroupByPipe</h1>
    </div>

    @for(group of items | groupBy : 'category'; track group){
    <div>
      <h3>{{ group.key }}</h3>
      <ul>
        @for(item of group.value; track item){
        <li>{{ item.name }}</li>
        }
      </ul>
    </div>
    }
  `,
})
export class AppGroupByComponent {
  items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Banana', category: 'Fruit' },
    { name: 'Carrot', category: 'Vegetable' },
    { name: 'Tomato', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
  ];
}
