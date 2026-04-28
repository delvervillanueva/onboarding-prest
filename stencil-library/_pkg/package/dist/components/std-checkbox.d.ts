import type { Components, JSX } from "../types/components";

interface StdCheckbox extends Components.StdCheckbox, HTMLElement {}
export const StdCheckbox: {
    prototype: StdCheckbox;
    new (): StdCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
