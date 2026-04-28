import type { Components, JSX } from "../types/components";

interface StdStepperItem extends Components.StdStepperItem, HTMLElement {}
export const StdStepperItem: {
    prototype: StdStepperItem;
    new (): StdStepperItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
