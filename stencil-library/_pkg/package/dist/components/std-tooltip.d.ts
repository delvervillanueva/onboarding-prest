import type { Components, JSX } from "../types/components";

interface StdTooltip extends Components.StdTooltip, HTMLElement {}
export const StdTooltip: {
    prototype: StdTooltip;
    new (): StdTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
