import type { Components, JSX } from "../types/components";

interface UiOptionsBtn extends Components.UiOptionsBtn, HTMLElement {}
export const UiOptionsBtn: {
    prototype: UiOptionsBtn;
    new (): UiOptionsBtn;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
