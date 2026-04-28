import type { Components, JSX } from "../types/components";

interface StdFooter extends Components.StdFooter, HTMLElement {}
export const StdFooter: {
    prototype: StdFooter;
    new (): StdFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
