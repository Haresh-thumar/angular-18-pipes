import { Component } from '@angular/core';
import { CreditCardMaskPipe } from '../../pipes/folder-v1-pipe/credit-card-mask.pipe';

@Component({
  selector: 'app-CreditCardMask',
  standalone: true,
  imports: [CreditCardMaskPipe],
  template: `
    <!-------------- Credit-Card-Mask Pipe ---------------->
    <div class="three">
      <h1 class="heading">Credit-Card-Mask Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <h4 class="mb-0">{{ creditCardNumber | creditCardMask }}</h4>
    </div>
  `,
})
export class AppCreditCardMaskComponent {
  creditCardNumber: string = '2131313133123174098';
}
