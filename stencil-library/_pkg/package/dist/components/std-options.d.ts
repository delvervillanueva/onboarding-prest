import type { Components, JSX } from "../types/components";

interface StdOptions extends Components.StdOptions, HTMLElement {}
export const StdOptions: {
    prototype: StdOptions;
    new (): StdOptions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
