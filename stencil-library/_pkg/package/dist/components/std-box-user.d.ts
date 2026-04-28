import type { Components, JSX } from "../types/components";

interface StdBoxUser extends Components.StdBoxUser, HTMLElement {}
export const StdBoxUser: {
    prototype: StdBoxUser;
    new (): StdBoxUser;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
