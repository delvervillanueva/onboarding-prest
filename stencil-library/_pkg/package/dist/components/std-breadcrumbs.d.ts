import type { Components, JSX } from "../types/components";

interface StdBreadcrumbs extends Components.StdBreadcrumbs, HTMLElement {}
export const StdBreadcrumbs: {
    prototype: StdBreadcrumbs;
    new (): StdBreadcrumbs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
