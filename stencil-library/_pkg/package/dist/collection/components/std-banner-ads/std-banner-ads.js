import { h } from "@stencil/core";
export class StdBannerAdsComponent {
    constructor() {
        this.label = 'Mostrar banner';
        this.icon = 'chevron-down';
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        this.label = this.isOpen ? 'Ocultar banner' : 'Mostrar banner';
        this.icon = this.isOpen ? 'chevron-up' : 'chevron-down';
    }
    render() {
        return (h("div", { key: '94691af090593adf9031fab82d604aa27263de60', class: `css-collapse js-collapse hidden lg:flex flex-col gap-2 ${this.isOpen ? 'is-open' : ''}` }, h("div", { key: '3017b132ab89d003135873479a736fe40f2249cb', class: "js-collapse-header flex justify-end", onClick: () => this.toggleCollapse() }, h("div", { key: '4a9eb33d8889cde4116aa91ec037395f30f09a8a', class: "hidden-collapse block" }, h("std-button", { key: '128881e6b32f431bbc13cd0056872c724bba0de1', size: "s", type: "tertiary", label: this.label, icon: this.icon }))), h("div", { key: 'fb6d5cc7099dbf675173c50d2d6ed37d6f868a1e', class: "js-collapse-body css-collapse-body hidden" }, h("slot", { key: '5493f5b4c44e3bde716c0cc168c09f0320e8633f' }))));
    }
    static get is() { return "std-banner-ads"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-banner-ads.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-banner-ads.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "label": {},
            "icon": {}
        };
    }
}
//# sourceMappingURL=std-banner-ads.js.map
