import type { Components, JSX } from "../types/components";

interface UiDropdown extends Components.UiDropdown, HTMLElement {}
export const UiDropdown: {
    prototype: UiDropdown;
    new (): UiDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
