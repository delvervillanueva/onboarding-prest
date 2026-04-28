import type { Components, JSX } from "../types/components";

interface StdImage extends Components.StdImage, HTMLElement {}
export const StdImage: {
    prototype: StdImage;
    new (): StdImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
