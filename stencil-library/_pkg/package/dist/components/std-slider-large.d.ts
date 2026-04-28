import type { Components, JSX } from "../types/components";

interface StdSliderLarge extends Components.StdSliderLarge, HTMLElement {}
export const StdSliderLarge: {
    prototype: StdSliderLarge;
    new (): StdSliderLarge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
