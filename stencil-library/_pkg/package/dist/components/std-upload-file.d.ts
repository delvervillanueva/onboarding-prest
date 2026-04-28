import type { Components, JSX } from "../types/components";

interface StdUploadFile extends Components.StdUploadFile, HTMLElement {}
export const StdUploadFile: {
    prototype: StdUploadFile;
    new (): StdUploadFile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
