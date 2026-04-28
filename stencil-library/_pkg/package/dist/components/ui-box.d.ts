import type { Components, JSX } from "../types/components";

interface UiBox extends Components.UiBox, HTMLElement {}
export const UiBox: {
    prototype: UiBox;
    new (): UiBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
