import type { Components, JSX } from "../types/components";

interface UiRadioButton extends Components.UiRadioButton, HTMLElement {}
export const UiRadioButton: {
    prototype: UiRadioButton;
    new (): UiRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
