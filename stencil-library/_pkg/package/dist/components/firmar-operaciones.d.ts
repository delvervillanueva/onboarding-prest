import type { Components, JSX } from "../types/components";

interface FirmarOperaciones extends Components.FirmarOperaciones, HTMLElement {}
export const FirmarOperaciones: {
    prototype: FirmarOperaciones;
    new (): FirmarOperaciones;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
