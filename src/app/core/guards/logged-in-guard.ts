import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from '../supabase/supabase.service';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = async (_route, _state) => {
  const router = inject(Router);
  const supabaseService = inject(SupabaseService);
  const isLoggedIn = await supabaseService.isLoggedIn();
  return isLoggedIn ? true : router.createUrlTree(['/login']);
};
