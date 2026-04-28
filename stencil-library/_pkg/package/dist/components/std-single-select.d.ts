import type { Components, JSX } from "../types/components";

interface StdSingleSelect extends Components.StdSingleSelect, HTMLElement {}
export const StdSingleSelect: {
    prototype: StdSingleSelect;
    new (): StdSingleSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
