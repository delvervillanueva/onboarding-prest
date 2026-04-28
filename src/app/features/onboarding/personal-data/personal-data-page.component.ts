import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  DestroyRef,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TextService } from '../../../core/services/text.service';
import { ConfirmPersonalDataModalComponent } from '../../../shared/modals/confirm-personal-data-modal/confirm-personal-data-modal.component';

/** Google reCAPTCHA v2 test key (always passes); replace with production site key. */
const RECAPTCHA_TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: Record<string, unknown>) => number;
      reset: (widgetId: number) => void;
    };
    onPersonalDataRecaptchaLoad?: () => void;
  }
}

@Component({
  selector: 'app-personal-data-page',
  standalone: true,
  imports: [ReactiveFormsModule, ConfirmPersonalDataModalComponent],
  templateUrl: './personal-data-page.component.html',
  styleUrl: './personal-data-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonalDataPageComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  readonly text = inject(TextService);

  private readonly recaptchaContainer = viewChild<ElementRef<HTMLElement>>('recaptchaContainer');

  private recaptchaWidgetId: number | null = null;

  readonly pepModalOpen = signal(false);
  readonly confirmPersonalDataModalOpen = signal(false);

  /**
   * std-radio-group shadow CSS only includes Tailwind gap-2 / gap-4 (not gap-3/5/6).
   * gap-4 ≈ 1rem between flex rows; with label+slot children the visible space between Sí/No is close to ~26–32px.
   */
  readonly radioGroupStackClasses = 'flex flex-col gap-4';

  readonly optionYes = this.text.getTextSignal('onboarding.personalData.options.yes');
  readonly optionNo = this.text.getTextSignal('onboarding.personalData.options.no');
  readonly yesNoRadioItems = computed(() => [
    { value: 'yes', label: this.optionYes() },
    { value: 'no', label: this.optionNo() }
  ]);

  readonly form = this.fb.nonNullable.group({
    documentNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    isPeruvianResident: ['', [Validators.required, Validators.pattern(/^(yes|no)$/)]],
    isPep: ['', [Validators.required, Validators.pattern(/^(yes|no)$/)]],
    acceptsDataPolicy: [false, Validators.requiredTrue],
    promoterCode: [''],
    captchaResponse: this.fb.control<string | null>(null, Validators.required)
  });

  readonly ariaPage = this.text.getTextSignal('onboarding.personalData.aria.page');
  readonly titlePrefix = this.text.getTextSignal('onboarding.personalData.title.prefix');
  readonly titleAccent1 = this.text.getTextSignal('onboarding.personalData.title.accent1');
  readonly titleMiddle = this.text.getTextSignal('onboarding.personalData.title.middle');
  readonly titleAccent2 = this.text.getTextSignal('onboarding.personalData.title.accent2');
  readonly labelDni = this.text.getTextSignal('onboarding.personalData.fields.dni.label');
  readonly placeholderDni = this.text.getTextSignal('onboarding.personalData.fields.dni.placeholder');
  readonly labelPhone = this.text.getTextSignal('onboarding.personalData.fields.phone.label');
  readonly placeholderPhone = this.text.getTextSignal('onboarding.personalData.fields.phone.placeholder');
  readonly labelEmail = this.text.getTextSignal('onboarding.personalData.fields.email.label');
  readonly placeholderEmail = this.text.getTextSignal('onboarding.personalData.fields.email.placeholder');
  readonly questionResident = this.text.getTextSignal('onboarding.personalData.questions.resident');
  readonly questionPepPrefix = this.text.getTextSignal('onboarding.personalData.questions.pepPrefix');
  readonly questionPepBold = this.text.getTextSignal('onboarding.personalData.questions.pepBold');
  readonly pepInfoAria = this.text.getTextSignal('onboarding.personalData.questions.pepInfoAria');
  readonly pepModalTitle = this.text.getTextSignal('onboarding.personalData.pepModal.title');
  readonly pepModalBody = this.text.getTextSignal('onboarding.personalData.pepModal.body');
  readonly pepModalClose = this.text.getTextSignal('onboarding.personalData.pepModal.close');
  readonly consentPart1 = this.text.getTextSignal('onboarding.personalData.consent.part1');
  readonly consentLink = this.text.getTextSignal('onboarding.personalData.consent.link');
  readonly consentPart2 = this.text.getTextSignal('onboarding.personalData.consent.part2');
  readonly labelPromoter = this.text.getTextSignal('onboarding.personalData.fields.promoter.label');
  readonly placeholderPromoter = this.text.getTextSignal('onboarding.personalData.fields.promoter.placeholder');
  readonly helperPromoter = this.text.getTextSignal('onboarding.personalData.fields.promoter.helper');
  readonly ctaContinue = this.text.getTextSignal('onboarding.personalData.cta.continue');
  readonly errorRequired = this.text.getTextSignal('onboarding.personalData.errors.required');
  readonly errorDni = this.text.getTextSignal('onboarding.personalData.errors.dni');
  readonly errorPhone = this.text.getTextSignal('onboarding.personalData.errors.phone');
  readonly errorEmail = this.text.getTextSignal('onboarding.personalData.errors.email');
  readonly errorYesNo = this.text.getTextSignal('onboarding.personalData.errors.yesNo');
  readonly errorPolicy = this.text.getTextSignal('onboarding.personalData.errors.policy');
  readonly errorCaptcha = this.text.getTextSignal('onboarding.personalData.errors.captcha');

  constructor() {
    this.form.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.cdr.markForCheck());
    afterNextRender(() => {
      void this.initRecaptcha();
    });
  }

  ngOnDestroy(): void {
    if (this.recaptchaWidgetId !== null && window.grecaptcha) {
      window.grecaptcha.reset(this.recaptchaWidgetId);
    }
  }

  documentNumberStatus(): 'default' | 'error' {
    const c = this.form.controls.documentNumber;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  phoneNumberStatus(): 'default' | 'error' {
    const c = this.form.controls.phoneNumber;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  emailStatus(): 'default' | 'error' {
    const c = this.form.controls.email;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  promoterStatus(): 'default' | 'error' {
    return 'default';
  }

  residentRadioStatus(): 'default' | 'error' {
    const c = this.form.controls.isPeruvianResident;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  pepRadioStatus(): 'default' | 'error' {
    const c = this.form.controls.isPep;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  checkboxPolicyStatus(): 'default' | 'error' {
    const c = this.form.controls.acceptsDataPolicy;
    return c.invalid && (c.dirty || c.touched) ? 'error' : 'default';
  }

  openPepInfo(): void {
    this.pepModalOpen.set(true);
    this.cdr.markForCheck();
  }

  closePepModal(): void {
    this.pepModalOpen.set(false);
    this.cdr.markForCheck();
  }

  openConfirmPersonalDataModal(): void {
    this.pepModalOpen.set(false);
    this.confirmPersonalDataModalOpen.set(true);
    this.cdr.markForCheck();
  }

  closeConfirmPersonalDataModal(): void {
    this.confirmPersonalDataModalOpen.set(false);
    this.cdr.markForCheck();
  }

  confirmPersonalData(): void {
    this.closeConfirmPersonalDataModal();
    this.submit();
  }

  editPersonalData(): void {
    this.closeConfirmPersonalDataModal();
  }

  closeOnBackdropClick(event: MouseEvent, modal: 'pep' | 'confirm'): void {
    const path = event.composedPath?.() ?? [];
    const dialog = path.find((n): n is HTMLDialogElement => n instanceof HTMLDialogElement);
    if (!dialog) {
      return;
    }
    // Clicking the native <dialog> backdrop targets the dialog itself.
    if (event.target === dialog) {
      modal === 'pep' ? this.closePepModal() : this.closeConfirmPersonalDataModal();
    }
  }

  onDocumentInput(value: unknown): void {
    const next = typeof value === 'string' ? value.replace(/\D/g, '').slice(0, 8) : '';
    this.form.controls.documentNumber.setValue(next);
    this.form.controls.documentNumber.markAsDirty();
    this.cdr.markForCheck();
  }

  onPhoneInput(value: unknown): void {
    const next = typeof value === 'string' ? value.replace(/\D/g, '').slice(0, 9) : '';
    this.form.controls.phoneNumber.setValue(next);
    this.form.controls.phoneNumber.markAsDirty();
    this.cdr.markForCheck();
  }

  onEmailInput(value: unknown): void {
    const next = typeof value === 'string' ? value : '';
    this.form.controls.email.setValue(next);
    this.form.controls.email.markAsDirty();
    this.cdr.markForCheck();
  }

  onPromoterInput(value: unknown): void {
    const next = typeof value === 'string' ? value : '';
    this.form.controls.promoterCode.setValue(next);
    this.form.controls.promoterCode.markAsDirty();
    this.cdr.markForCheck();
  }

  onResidentChange(value: unknown): void {
    const v = typeof value === 'string' ? value : '';
    this.form.controls.isPeruvianResident.setValue(v);
    this.form.controls.isPeruvianResident.markAsDirty();
    this.cdr.markForCheck();
  }

  onPepChange(value: unknown): void {
    const v = typeof value === 'string' ? value : '';
    this.form.controls.isPep.setValue(v);
    this.form.controls.isPep.markAsDirty();
    this.cdr.markForCheck();
  }

  onPolicyChange(event: Event): void {
    const custom = event as CustomEvent<{ checked?: boolean }>;
    const checked = !!custom.detail?.checked;
    this.form.controls.acceptsDataPolicy.setValue(checked);
    this.form.controls.acceptsDataPolicy.markAsDirty();
    this.cdr.markForCheck();
  }

  onFormSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.submit();
  }

  submitFromButton(): void {
    this.submit();
  }

  submit(): void {
    this.form.markAllAsTouched();
    this.cdr.markForCheck();
    if (this.form.invalid) {
      return;
    }
    const raw = this.form.getRawValue();
    const payload = {
      documentNumber: raw.documentNumber,
      phoneNumber: raw.phoneNumber,
      email: raw.email,
      isPeruvianResident: raw.isPeruvianResident === 'yes',
      isPep: raw.isPep === 'yes',
      acceptsDataPolicy: raw.acceptsDataPolicy,
      promoterCode: raw.promoterCode.trim() || null,
      captchaToken: raw.captchaResponse
    };
    // Wire onboarding evaluation / API next; payload is ready for the orchestration layer.
    void payload;
    void this.router.navigateByUrl('/onboarding/confirmed-offer');
  }

  private async initRecaptcha(): Promise<void> {
    const el = this.recaptchaContainer()?.nativeElement;
    if (!el) {
      return;
    }
    await this.loadRecaptchaScript();
    if (!window.grecaptcha) {
      return;
    }
    this.ngZone.run(() => {
      this.recaptchaWidgetId = window.grecaptcha!.render(el, {
        sitekey: RECAPTCHA_TEST_SITE_KEY,
        callback: (token: string) => {
          this.form.controls.captchaResponse.setValue(token);
          this.cdr.markForCheck();
        },
        'expired-callback': () => {
          this.form.controls.captchaResponse.setValue(null);
          this.cdr.markForCheck();
        }
      });
      this.cdr.markForCheck();
    });
  }

  private loadRecaptchaScript(): Promise<void> {
    return new Promise((resolve) => {
      if (window.grecaptcha) {
        resolve();
        return;
      }
      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-personal-data-recaptcha="1"]'
      );
      if (existing) {
        existing.addEventListener('load', () => resolve(), { once: true });
        return;
      }
      window.onPersonalDataRecaptchaLoad = () => resolve();
      const script = document.createElement('script');
      script.dataset['personalDataRecaptcha'] = '1';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onPersonalDataRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    });
  }
}
