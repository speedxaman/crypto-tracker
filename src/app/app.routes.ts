import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'converter',
    loadComponent: () => import('./features/converter/converter/converter.component').then(m => m.ConverterComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
