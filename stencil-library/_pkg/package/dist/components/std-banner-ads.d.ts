import type { Components, JSX } from "../types/components";

interface StdBannerAds extends Components.StdBannerAds, HTMLElement {}
export const StdBannerAds: {
    prototype: StdBannerAds;
    new (): StdBannerAds;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
