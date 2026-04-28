import type { Components, JSX } from "../types/components";

interface StdTextArea extends Components.StdTextArea, HTMLElement {}
export const StdTextArea: {
    prototype: StdTextArea;
    new (): StdTextArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
