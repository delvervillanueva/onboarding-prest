import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { TextService } from '../../../core/services/text.service';

@Component({
  selector: 'app-confirmed-offer-page',
  standalone: true,
  templateUrl: './confirmed-offer-page.component.html',
  styleUrl: './confirmed-offer-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmedOfferPageComponent {
  readonly text = inject(TextService);

  readonly ariaPage = this.text.getTextSignal('onboarding.confirmedOffer.aria.page');
  readonly titlePrefix = this.text.getTextSignal('onboarding.confirmedOffer.title.prefix');
  readonly titleAccent = this.text.getTextSignal('onboarding.confirmedOffer.title.accent');
  readonly description = this.text.getTextSignal('onboarding.confirmedOffer.description');
  readonly ctaStart = this.text.getTextSignal('onboarding.confirmedOffer.cta.start');
  readonly illustrationAlt = this.text.getTextSignal('onboarding.confirmedOffer.illustration.alt');

  /** Hand off to the host app or next system; identity verification lives outside this microfrontend. */
  start(): void {}
}
