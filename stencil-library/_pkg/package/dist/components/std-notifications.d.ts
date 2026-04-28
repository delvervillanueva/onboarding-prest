import type { Components, JSX } from "../types/components";

interface StdNotifications extends Components.StdNotifications, HTMLElement {}
export const StdNotifications: {
    prototype: StdNotifications;
    new (): StdNotifications;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
