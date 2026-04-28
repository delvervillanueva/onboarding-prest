import type { Components, JSX } from "../types/components";

interface StdDynamic extends Components.StdDynamic, HTMLElement {}
export const StdDynamic: {
    prototype: StdDynamic;
    new (): StdDynamic;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
