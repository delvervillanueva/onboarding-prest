import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'onboarding/welcome' },
  {
    path: 'onboarding',
    children: [
      {
        path: 'welcome',
        loadComponent: () =>
          import('./features/onboarding/welcome/welcome-page.component').then((m) => m.WelcomePageComponent)
      },
      {
        path: 'initial-data',
        loadComponent: () =>
          import('./features/onboarding/initial-data/initial-data-page.component').then(
            (m) => m.InitialDataPageComponent
          )
      }
    ]
  },
  { path: '**', redirectTo: 'onboarding/welcome' }
];
