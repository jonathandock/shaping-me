import { Component, computed, input, output, signal } from '@angular/core';
import { LoginData, LoginTypeEnum } from '../../models/login.models';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-login-form',
  styleUrl: './login-form.component.css',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public readonly loginType = input<'signin' | 'signup'>();
  public readonly signup = output<LoginData>();

  public submitLabel = computed<string>(() =>
    this.loginType() === LoginTypeEnum.SIGNIN ? 'Sign in' : 'Sign up',
  );

  public loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  public loginForm = form(this.loginModel, (schemaPath) => {
    // required fields
    required(schemaPath.email, { message: 'Email is required' });
    required(schemaPath.password, { message: 'Password is required' });
    // formatting errors
    email(schemaPath.email, { message: 'Enter a valid email address' });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    // Perform login logic here
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    this.signup.emit(credentials);
  }
}
