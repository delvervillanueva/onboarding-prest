import type { Components, JSX } from "../types/components";

interface StdSupportIcons extends Components.StdSupportIcons, HTMLElement {}
export const StdSupportIcons: {
    prototype: StdSupportIcons;
    new (): StdSupportIcons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
