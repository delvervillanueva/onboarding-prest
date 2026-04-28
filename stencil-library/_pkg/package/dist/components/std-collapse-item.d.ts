import type { Components, JSX } from "../types/components";

interface StdCollapseItem extends Components.StdCollapseItem, HTMLElement {}
export const StdCollapseItem: {
    prototype: StdCollapseItem;
    new (): StdCollapseItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
