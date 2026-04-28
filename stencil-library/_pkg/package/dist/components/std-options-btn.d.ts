import type { Components, JSX } from "../types/components";

interface StdOptionsBtn extends Components.StdOptionsBtn, HTMLElement {}
export const StdOptionsBtn: {
    prototype: StdOptionsBtn;
    new (): StdOptionsBtn;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
