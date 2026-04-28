import type { Components, JSX } from "../types/components";

interface StdCollapseList extends Components.StdCollapseList, HTMLElement {}
export const StdCollapseList: {
    prototype: StdCollapseList;
    new (): StdCollapseList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
