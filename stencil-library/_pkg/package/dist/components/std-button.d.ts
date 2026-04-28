import type { Components, JSX } from "../types/components";

interface StdButton extends Components.StdButton, HTMLElement {}
export const StdButton: {
    prototype: StdButton;
    new (): StdButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
