import type { Components, JSX } from "../types/components";

interface UiOptions extends Components.UiOptions, HTMLElement {}
export const UiOptions: {
    prototype: UiOptions;
    new (): UiOptions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
