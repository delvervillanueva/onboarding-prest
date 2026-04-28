import type { Components, JSX } from "../types/components";

interface StdToggle extends Components.StdToggle, HTMLElement {}
export const StdToggle: {
    prototype: StdToggle;
    new (): StdToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
