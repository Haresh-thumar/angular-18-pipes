import { Component } from '@angular/core';
import { IndianPhoneNumberFormatPipe } from '../../pipes/folder-v1-pipe/indian-phone-number-format.pipe';

@Component({
  selector: 'app-IndianPhoneNumberFormat',
  standalone: true,
  imports: [IndianPhoneNumberFormatPipe],
  template: `
    <!-------------- indian-phone-number-format Pipe ---------------->
    <div class="three">
      <h1 class="heading">indian-phone-number-format Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Indian Phone Number Formatter Pipe</p>
      <h4>{{ indianPhoneNumber | indianPhoneNumberFormat }}</h4>
    </div>
  `,
})
export class AppIndianPhoneNumberFormatComponent {
  indianPhoneNumber: string = '9856345769';
}
