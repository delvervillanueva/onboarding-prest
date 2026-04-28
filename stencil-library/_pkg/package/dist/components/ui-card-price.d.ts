import type { Components, JSX } from "../types/components";

interface UiCardPrice extends Components.UiCardPrice, HTMLElement {}
export const UiCardPrice: {
    prototype: UiCardPrice;
    new (): UiCardPrice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
