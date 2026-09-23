import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { LoginData } from '../../models/login.models';
import { SupabaseService } from '../../../../core/supabase/supabase.service';

@Component({
  imports: [LoginFormComponent],
  selector: 'app-signup',
  styleUrl: './signup.page.css',
  templateUrl: './signup.page.html',
})
export class SignupPage {
  public readonly supabaseService = inject(SupabaseService);

  public async onSignup(credentials: LoginData): Promise<void> {
    try {
      await this.supabaseService.signup(credentials.email, credentials.password);
    } catch (error) {
      alert('Could not sign up user');
    }
  }
}
