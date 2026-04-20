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
          import('./features/onboarding/personal-data/personal-data-page.component').then(
            (m) => m.PersonalDataPageComponent
          )
      },
      {
        path: 'confirmed-offer',
        loadComponent: () =>
          import('./features/onboarding/confirmed-offer/confirmed-offer-page.component').then(
            (m) => m.ConfirmedOfferPageComponent
          )
      }
    ]
  },
  { path: '**', redirectTo: 'onboarding/welcome' }
];
