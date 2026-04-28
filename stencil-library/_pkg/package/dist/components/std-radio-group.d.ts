import type { Components, JSX } from "../types/components";

interface StdRadioGroup extends Components.StdRadioGroup, HTMLElement {}
export const StdRadioGroup: {
    prototype: StdRadioGroup;
    new (): StdRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
