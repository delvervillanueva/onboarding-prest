import type { Components, JSX } from "../types/components";

interface StdSmallLoader extends Components.StdSmallLoader, HTMLElement {}
export const StdSmallLoader: {
    prototype: StdSmallLoader;
    new (): StdSmallLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
