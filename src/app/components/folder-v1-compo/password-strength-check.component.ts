import { Component } from '@angular/core';
import { PasswordStrengthCheckPipe } from '../../pipes/folder-v1-pipe/password-strength-check.pipe';

@Component({
  selector: 'app-passwordStrengthCheck',
  standalone: true,
  imports: [PasswordStrengthCheckPipe],
  template: `
    <!-------------- Password Strength Check Pipe ---------------->
    <div class="three">
      <h1 class="heading">Password Strength Check Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <p class="text-primary fw-bold">Password Strength Check Pipe</p>
      <h4>
        {{ password1 }} - <b>{{ password1 | passwordStrengthCheck }}</b>
      </h4>
      <h4>
        {{ password2 }} - <b>{{ password2 | passwordStrengthCheck }}</b>
      </h4>
      <h4>
        {{ password3 }} - <b>{{ password3 | passwordStrengthCheck }}</b>
      </h4>
    </div>
  `,
})
export class AppPasswordStrengthCheckComponent {
  password1: string = '123';
  password2: string = 'Pass123';
  password3: string = 'StrongPassword123';
}
