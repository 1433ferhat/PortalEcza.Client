import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layouts/layouts'),
    children: [
      {
        path: '',
        redirectTo: 'my/listings',
        pathMatch: 'full',
      },
      {
        path: 'my',
        children: [
          {
            path: 'listings',
            loadComponent: () => import('./pages/my/listings/listings'),
          },
        ],
      },
      {
        path: 'listings',
        loadComponent: () => import('./pages/listings/listings'),
      },
    ],
  },
  
];
