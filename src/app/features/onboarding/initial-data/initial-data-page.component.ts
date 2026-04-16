import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-initial-data-page',
  standalone: true,
  template: `
    <main style="padding: 24px; font-family: inherit;">
      <h1 style="margin: 0 0 8px;">Initial Data</h1>
      <p style="margin: 0;">Placeholder temporal para que el botón “Empezar” navegue.</p>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialDataPageComponent {}

