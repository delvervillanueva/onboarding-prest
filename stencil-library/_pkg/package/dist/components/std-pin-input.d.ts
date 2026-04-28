import type { Components, JSX } from "../types/components";

interface StdPinInput extends Components.StdPinInput, HTMLElement {}
export const StdPinInput: {
    prototype: StdPinInput;
    new (): StdPinInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
