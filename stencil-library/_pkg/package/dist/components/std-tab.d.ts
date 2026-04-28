import type { Components, JSX } from "../types/components";

interface StdTab extends Components.StdTab, HTMLElement {}
export const StdTab: {
    prototype: StdTab;
    new (): StdTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
