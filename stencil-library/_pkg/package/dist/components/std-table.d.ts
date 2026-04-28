import type { Components, JSX } from "../types/components";

interface StdTable extends Components.StdTable, HTMLElement {}
export const StdTable: {
    prototype: StdTable;
    new (): StdTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
