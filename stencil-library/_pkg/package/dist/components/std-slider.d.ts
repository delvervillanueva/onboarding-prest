import type { Components, JSX } from "../types/components";

interface StdSlider extends Components.StdSlider, HTMLElement {}
export const StdSlider: {
    prototype: StdSlider;
    new (): StdSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
