import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TextService } from '../../../core/services/text.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePageComponent {
  private readonly router = inject(Router);
  readonly text = inject(TextService);

  readonly ariaHeader = this.text.getTextSignal('onboarding.welcome.aria.header');
  readonly ariaHero = this.text.getTextSignal('onboarding.welcome.aria.hero');
  readonly ariaRequirements = this.text.getTextSignal('onboarding.welcome.aria.requirements');
  readonly ariaRecommendation = this.text.getTextSignal('onboarding.welcome.aria.recommendation');

  readonly brandName = this.text.getTextSignal('onboarding.welcome.brand.name');
  readonly brandSubtitle = this.text.getTextSignal('onboarding.welcome.brand.subtitle');

  readonly titleLine1 = this.text.getTextSignal('onboarding.welcome.title.line1');
  readonly titleLine2 = this.text.getTextSignal('onboarding.welcome.title.line2');
  readonly titleAccent = this.text.getTextSignal('onboarding.welcome.title.accent');

  readonly bulletDni = this.text.getTextSignal('onboarding.welcome.bullets.dni');
  readonly bulletClients = this.text.getTextSignal('onboarding.welcome.bullets.clients');

  readonly infoText = this.text.getTextSignal('onboarding.welcome.info.text');
  readonly infoStrong = this.text.getTextSignal('onboarding.welcome.info.strong');

  readonly ctaStart = this.text.getTextSignal('onboarding.welcome.cta.start');

  start(): void {
    void this.router.navigateByUrl('/onboarding/initial-data');
  }
}

