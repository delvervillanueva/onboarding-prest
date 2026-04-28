import type { Components, JSX } from "../types/components";

interface StdToast extends Components.StdToast, HTMLElement {}
export const StdToast: {
    prototype: StdToast;
    new (): StdToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
