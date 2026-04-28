import type { Components, JSX } from "../types/components";

interface StdAutocomplete extends Components.StdAutocomplete, HTMLElement {}
export const StdAutocomplete: {
    prototype: StdAutocomplete;
    new (): StdAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
