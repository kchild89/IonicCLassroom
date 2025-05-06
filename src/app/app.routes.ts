import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail',
    loadComponent: () => import('./tabs1/detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'detail',
    loadComponent: () => import('./tabs1/detail/detail.page').then( m => m.DetailPage)
  },
];
