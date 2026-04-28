import type { Components, JSX } from "../types/components";

interface StdSelect extends Components.StdSelect, HTMLElement {}
export const StdSelect: {
    prototype: StdSelect;
    new (): StdSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
