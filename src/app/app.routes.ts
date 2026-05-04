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
      },
      {
        path: 'no-offer',
        loadComponent: () =>
          import('./features/onboarding/no-offer/no-offer-page.component').then((m) => m.NoOfferPageComponent)
      },
      {
        path: 'additional-info-required',
        loadComponent: () =>
          import('./features/onboarding/additional-info-required/additional-info-required-page.component').then(
            (m) => m.AdditionalInfoRequiredPageComponent
          )
      }
    ]
  },
  { path: '**', redirectTo: 'onboarding/welcome' }
];
