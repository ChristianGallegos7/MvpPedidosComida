import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/client/menu/menu').then(m => m.Menu)
  }
];
