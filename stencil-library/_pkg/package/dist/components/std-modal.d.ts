import type { Components, JSX } from "../types/components";

interface StdModal extends Components.StdModal, HTMLElement {}
export const StdModal: {
    prototype: StdModal;
    new (): StdModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
