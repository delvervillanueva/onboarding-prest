import type { Components, JSX } from "../types/components";

interface StdRange extends Components.StdRange, HTMLElement {}
export const StdRange: {
    prototype: StdRange;
    new (): StdRange;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
