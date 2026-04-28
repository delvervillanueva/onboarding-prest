import type { Components, JSX } from "../types/components";

interface StdBox extends Components.StdBox, HTMLElement {}
export const StdBox: {
    prototype: StdBox;
    new (): StdBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
