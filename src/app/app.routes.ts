import { Routes } from '@angular/router';
import { HomePage } from './containers/home/pages/home/home.page';
import { SigninPage } from './containers/login/pages/signin/signin.page';
import { loggedInGuard } from './core/guards/logged-in-guard';
import { SignupPage } from './containers/login/pages/signup/signup.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [loggedInGuard],
  },
  {
    path: 'signin',
    component: SigninPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
];
