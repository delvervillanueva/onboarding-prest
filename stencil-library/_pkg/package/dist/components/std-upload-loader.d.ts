import type { Components, JSX } from "../types/components";

interface StdUploadLoader extends Components.StdUploadLoader, HTMLElement {}
export const StdUploadLoader: {
    prototype: StdUploadLoader;
    new (): StdUploadLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
