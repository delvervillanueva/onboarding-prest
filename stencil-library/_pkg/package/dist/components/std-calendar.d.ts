import type { Components, JSX } from "../types/components";

interface StdCalendar extends Components.StdCalendar, HTMLElement {}
export const StdCalendar: {
    prototype: StdCalendar;
    new (): StdCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
