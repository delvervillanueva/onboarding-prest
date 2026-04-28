import type { Components, JSX } from "../types/components";

interface StdStepper extends Components.StdStepper, HTMLElement {}
export const StdStepper: {
    prototype: StdStepper;
    new (): StdStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
