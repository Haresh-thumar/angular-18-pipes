import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GenderPipe } from '../../pipes/folder-v1-pipe/gender.pipe';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [GenderPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  template: `
    <!-------------- Mr & Miss Gender Pipe ---------------->
    <div class="three">
      <h1 class="heading">Mr & Miss Gender Pipe</h1>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Course Fee</th>
        </tr>
      </thead>
      <tbody>
        @for(student of students; track students){
        <tr>
          <td>{{ student.ID | uppercase }}</td>
          <td>{{ student.Name | gender : student.Gender }}</td>
          <td>{{ student.DOB }}</td>
          <td>{{ student.Gender | lowercase }}</td>
          <td>{{ student.CourseFee | currency : 'USD' : true }}</td>
        </tr>
        }
      </tbody>
    </table>
  `,
})
export class AppGenderComponent {
  students: any[] = [
    {
      ID: 'std101',
      Name: 'Rakesh Rout',
      DOB: '8-12-1988',
      Gender: 'Male',
      CourseFee: 1234.56,
    },
    {
      ID: 'std102',
      Name: 'Anurag Mohanty',
      DOB: '14-10-1989',
      Gender: 'Male',
      CourseFee: 6666.0,
    },
    {
      ID: 'std103',
      Name: 'Priyanka Dewangan',
      DOB: '24-7-1992',
      Gender: 'Female',
      CourseFee: 6543.15,
    },
    {
      ID: 'std104',
      Name: 'Hina Sharma',
      DOB: '19-8-1990',
      Gender: 'Female',
      CourseFee: 9000.5,
    },
    {
      ID: 'std105',
      Name: 'Sambit Satapathy',
      DOB: '12-4-1991',
      Gender: 'Male',
      CourseFee: 9876.54,
    },
  ];
}
