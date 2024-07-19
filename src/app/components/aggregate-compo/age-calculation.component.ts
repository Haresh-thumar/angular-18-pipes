import { Component } from '@angular/core';
import { AgeCalculationPipe } from '../../pipes/aggregate-pipe/age-calculation.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-AgeCalculation',
  standalone: true,
  imports: [AgeCalculationPipe, DatePipe],
  template: `
    <!-------------- Age Calculation Pipe ---------------->
    <div class="three">
      <h1 class="heading">Age Calculation Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Age Calculation Pipe</p>
      <h4>
        Birth Date ({{ birthDate1 }}): <b>{{ birthDate1 | age }} years old</b>
      </h4>
      <h4>
        Birth Date ({{ birthDate2 }}): <b>{{ birthDate2 | age }} years old</b>
      </h4>
      <h4>
        Birth Date ({{ birthDate3 | date : 'yyyy-MM-dd' }}):
        <b>{{ birthDate3 | age }} years old</b>
      </h4>
    </div>
  `,
})
export class AppAgeCalculationComponent {
  birthDate1 = '1990-01-01';
  birthDate2 = '2000-05-15';
  birthDate3 = new Date('1985-10-20');
}
