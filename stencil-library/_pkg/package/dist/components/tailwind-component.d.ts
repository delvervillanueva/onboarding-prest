import type { Components, JSX } from "../types/components";

interface TailwindComponent extends Components.TailwindComponent, HTMLElement {}
export const TailwindComponent: {
    prototype: TailwindComponent;
    new (): TailwindComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
