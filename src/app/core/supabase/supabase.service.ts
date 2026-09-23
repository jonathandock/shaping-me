import { inject, Service, signal } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Service()
export class SupabaseService {
  private supabase: SupabaseClient;

  public user = signal<User | null>(null);

  public constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    console.log('init supabase');
  }

  public async signup(email: string, password: string): Promise<void> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });
      this.user.set(data.user);
    } catch (error) {}
  }

  public async isLoggedIn(): Promise<boolean> {
    const user = await this.supabase.auth.getUser();
    console.log(user);
    return !!user.data.user;
  }
}
