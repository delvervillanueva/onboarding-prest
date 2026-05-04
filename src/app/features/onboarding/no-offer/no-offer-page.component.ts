import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { TextService } from '../../../core/services/text.service';

@Component({
  selector: 'app-no-offer-page',
  standalone: true,
  templateUrl: './no-offer-page.component.html',
  styleUrl: './no-offer-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoOfferPageComponent {
  private readonly text = inject(TextService);
  private readonly location = inject(Location);

  /** Set from onboarding state when the applicant name is known (shown before the headline). */
  readonly applicantDisplayName = signal<string>('');

  readonly ariaPage = this.text.getTextSignal('onboarding.noOffer.aria.page');
  readonly headline = this.text.getTextSignal('onboarding.noOffer.headline');
  readonly bodyPrimary = this.text.getTextSignal('onboarding.noOffer.body.primary');
  readonly bodySecondary = this.text.getTextSignal('onboarding.noOffer.body.secondary');
  readonly ctaBack = this.text.getTextSignal('onboarding.noOffer.cta.back');
  readonly illustrationAlt = this.text.getTextSignal('onboarding.noOffer.illustration.alt');

  readonly greetingLine = computed(() => {
    const name = this.applicantDisplayName().trim();
    if (name.length > 0) {
      return this.text.getText('onboarding.noOffer.greeting.withName', { userName: name });
    }
    return this.text.getText('onboarding.noOffer.greeting.fallback');
  });

  goBack(): void {
    this.location.back();
  }
}
