import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../../../core/supabase/supabase.service';
import { LoginData } from '../../models/login.models';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  imports: [RouterLink, LoginFormComponent],
  selector: 'app-signin',
  styleUrl: './signin.page.css',
  templateUrl: './signin.page.html',
})
export class SigninPage {
  public readonly supabaseService = inject(SupabaseService);

  public async onSignin(credentials: LoginData): Promise<void> {
    try {
      await this.supabaseService.signin(credentials.email, credentials.password);
    } catch (error) {
      alert('Could not sign in user');
    }
  }
}
