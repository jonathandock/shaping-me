import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  imports: [LoginFormComponent],
  selector: 'app-signup',
  styleUrl: './signup.page.css',
  templateUrl: './signup.page.html',
})
export class SignupPage {}
