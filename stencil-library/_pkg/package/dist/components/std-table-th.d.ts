import type { Components, JSX } from "../types/components";

interface StdTableTh extends Components.StdTableTh, HTMLElement {}
export const StdTableTh: {
    prototype: StdTableTh;
    new (): StdTableTh;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
