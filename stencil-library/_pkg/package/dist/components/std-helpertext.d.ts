import type { Components, JSX } from "../types/components";

interface StdHelpertext extends Components.StdHelpertext, HTMLElement {}
export const StdHelpertext: {
    prototype: StdHelpertext;
    new (): StdHelpertext;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
