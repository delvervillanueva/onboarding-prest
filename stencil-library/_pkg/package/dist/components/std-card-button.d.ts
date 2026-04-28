import type { Components, JSX } from "../types/components";

interface StdCardButton extends Components.StdCardButton, HTMLElement {}
export const StdCardButton: {
    prototype: StdCardButton;
    new (): StdCardButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
