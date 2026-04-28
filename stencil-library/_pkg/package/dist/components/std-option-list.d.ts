import type { Components, JSX } from "../types/components";

interface StdOptionList extends Components.StdOptionList, HTMLElement {}
export const StdOptionList: {
    prototype: StdOptionList;
    new (): StdOptionList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
