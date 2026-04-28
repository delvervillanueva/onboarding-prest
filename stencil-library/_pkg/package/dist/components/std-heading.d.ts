import type { Components, JSX } from "../types/components";

interface StdHeading extends Components.StdHeading, HTMLElement {}
export const StdHeading: {
    prototype: StdHeading;
    new (): StdHeading;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
