import type { Components, JSX } from "../types/components";

interface StdTabItem extends Components.StdTabItem, HTMLElement {}
export const StdTabItem: {
    prototype: StdTabItem;
    new (): StdTabItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
