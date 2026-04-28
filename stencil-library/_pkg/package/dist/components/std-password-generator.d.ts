import type { Components, JSX } from "../types/components";

interface StdPasswordGenerator extends Components.StdPasswordGenerator, HTMLElement {}
export const StdPasswordGenerator: {
    prototype: StdPasswordGenerator;
    new (): StdPasswordGenerator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
