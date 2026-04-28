import type { Components, JSX } from "../types/components";

interface StdInput extends Components.StdInput, HTMLElement {}
export const StdInput: {
    prototype: StdInput;
    new (): StdInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
