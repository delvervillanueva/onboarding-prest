import type { Components, JSX } from "../types/components";

interface StdModalNative extends Components.StdModalNative, HTMLElement {}
export const StdModalNative: {
    prototype: StdModalNative;
    new (): StdModalNative;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
