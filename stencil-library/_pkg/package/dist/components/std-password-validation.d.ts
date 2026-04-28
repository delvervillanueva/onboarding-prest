import type { Components, JSX } from "../types/components";

interface StdPasswordValidation extends Components.StdPasswordValidation, HTMLElement {}
export const StdPasswordValidation: {
    prototype: StdPasswordValidation;
    new (): StdPasswordValidation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
