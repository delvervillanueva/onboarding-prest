import type { Components, JSX } from "../types/components";

interface StdCollapse extends Components.StdCollapse, HTMLElement {}
export const StdCollapse: {
    prototype: StdCollapse;
    new (): StdCollapse;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
