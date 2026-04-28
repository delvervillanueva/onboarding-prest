import type { Components, JSX } from "../types/components";

interface StdTag extends Components.StdTag, HTMLElement {}
export const StdTag: {
    prototype: StdTag;
    new (): StdTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
