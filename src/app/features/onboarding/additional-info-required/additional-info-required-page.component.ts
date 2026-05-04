import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { TextService } from '../../../core/services/text.service';

const DEFAULT_NEAREST_AGENCY_FINDER_URL = 'https://www.santanderconsumer.com.pe/personas/ubicacion';

@Component({
  selector: 'app-additional-info-required-page',
  standalone: true,
  templateUrl: './additional-info-required-page.component.html',
  styleUrl: './additional-info-required-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdditionalInfoRequiredPageComponent {
  private readonly text = inject(TextService);
  private readonly location = inject(Location);

  /** Set from onboarding state when the applicant name is known (shown before the headline). */
  readonly applicantDisplayName = signal<string>('');

  /**
   * Nearest-agency finder URL (default: Santander Consumer Perú “Ubícanos”).
   * Replace via `nearestAgencyFinderUrl.set(...)` if the host supplies a different link.
   */
  readonly nearestAgencyFinderUrl = signal<string>(DEFAULT_NEAREST_AGENCY_FINDER_URL);

  readonly agencyFinderHref = computed(() => this.nearestAgencyFinderUrl().trim());

  readonly ariaPage = this.text.getTextSignal('onboarding.additionalInfoRequired.aria.page');
  readonly headline = this.text.getTextSignal('onboarding.additionalInfoRequired.headline');
  readonly body = this.text.getTextSignal('onboarding.additionalInfoRequired.body');
  readonly agencyLinkLabel = this.text.getTextSignal('onboarding.additionalInfoRequired.agencyLink.label');
  readonly ctaBack = this.text.getTextSignal('onboarding.additionalInfoRequired.cta.back');
  readonly illustrationAlt = this.text.getTextSignal('onboarding.additionalInfoRequired.illustration.alt');

  readonly greetingLine = computed(() => {
    const name = this.applicantDisplayName().trim();
    if (name.length > 0) {
      return this.text.getText('onboarding.additionalInfoRequired.greeting.withName', { userName: name });
    }
    return this.text.getText('onboarding.additionalInfoRequired.greeting.fallback');
  });

  goBack(): void {
    this.location.back();
  }

  onAgencyFinderClick(event: Event): void {
    if (this.agencyFinderHref().length === 0) {
      event.preventDefault();
    }
  }
}
