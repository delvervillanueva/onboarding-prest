import type { Components, JSX } from "../types/components";

interface StdCollapseTotal extends Components.StdCollapseTotal, HTMLElement {}
export const StdCollapseTotal: {
    prototype: StdCollapseTotal;
    new (): StdCollapseTotal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
