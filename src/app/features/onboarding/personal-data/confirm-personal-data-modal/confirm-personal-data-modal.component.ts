import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, output } from '@angular/core';
import { TextService } from '../../../../core/services/text.service';

@Component({
  selector: 'app-confirm-personal-data-modal',
  standalone: true,
  templateUrl: './confirm-personal-data-modal.component.html',
  styleUrl: './confirm-personal-data-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmPersonalDataModalComponent {
  private readonly text = inject(TextService);

  readonly documentNumber = input<string>('');
  readonly email = input<string>('');
  readonly phoneNumber = input<string>('');

  readonly confirm = output<void>();
  readonly edit = output<void>();

  readonly ariaLabel = this.text.getTextSignal('onboarding.personalData.confirmModal.aria');
  readonly title = this.text.getTextSignal('onboarding.personalData.confirmModal.title');
  readonly body = this.text.getTextSignal('onboarding.personalData.confirmModal.body');
  readonly cardTitle = this.text.getTextSignal('onboarding.personalData.confirmModal.cardTitle');
  readonly ctaConfirm = this.text.getTextSignal('onboarding.personalData.confirmModal.ctaConfirm');
  readonly ctaEdit = this.text.getTextSignal('onboarding.personalData.confirmModal.ctaEdit');

  readonly labelDni = this.text.getTextSignal('onboarding.personalData.fields.dni.label');
  readonly labelEmail = this.text.getTextSignal('onboarding.personalData.fields.email.label');
  readonly labelPhone = this.text.getTextSignal('onboarding.personalData.fields.phone.label');
}

