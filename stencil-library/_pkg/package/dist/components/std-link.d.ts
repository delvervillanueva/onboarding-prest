import type { Components, JSX } from "../types/components";

interface StdLink extends Components.StdLink, HTMLElement {}
export const StdLink: {
    prototype: StdLink;
    new (): StdLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
