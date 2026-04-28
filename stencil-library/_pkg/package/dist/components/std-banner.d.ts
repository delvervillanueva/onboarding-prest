import type { Components, JSX } from "../types/components";

interface StdBanner extends Components.StdBanner, HTMLElement {}
export const StdBanner: {
    prototype: StdBanner;
    new (): StdBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
