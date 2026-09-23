import { Routes } from '@angular/router';
import { HomePage } from './containers/home/pages/home/home.page';
import { LoginPage } from './containers/login/pages/login/login.page';
import { loggedInGuard } from './core/guards/logged-in-guard';
import { SignupPage } from './containers/login/pages/signup/signup.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [loggedInGuard],
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
];
