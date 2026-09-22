import { inject, Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Service()
export class SupabaseService {
  private supabase = inject(SupabaseClient);

  public constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
}
