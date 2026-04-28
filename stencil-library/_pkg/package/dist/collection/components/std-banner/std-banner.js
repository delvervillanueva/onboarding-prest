import { h } from "@stencil/core";
export class StdBannerComponent {
    onBackClick(event) {
        if (this.href) {
            return window.navigateTo(this.href);
        }
        event.preventDefault();
        this.clickBack.emit(event);
    }
    render() {
        return (h("div", { key: '0dd52323fd301cf3937a113c580a07e7b4bd0a40', class: "bg-alternative-light flex flex-col w-full py-4 pl-4 pr-12 lg:py-6 lg:pl-7 lg:pr-20 rounded-2xl relative overflow-hidden gap-4 lg:gap-6" }, h("slot", { key: '74442c634e229cdc78a97ceba5296be3ac0e1671' }), h("div", { key: 'de0449040895d46245a83c65ee726a477bfe634d', class: "flex items-center justify-between w-full" }, h("h2", { key: '6a4512a3e53af1a5aa665baaf1d62925243a01bc', class: "text-lg lg:text-3xl font-bold text-dark flex items-center gap-2 cursor-default" }, this.back && (h("a", { key: '6e3b8eac00d2dbbe587f5c39b911a79979ae5b6d', onClick: e => this.onBackClick(e) }, h("i", { key: '1d3704cc5c8c3df761c83a4bdcd01012d112b1df', class: "icon-arrow-left-2px text-alternative text-xl leading-none cursor-pointer flex" }))), this.label), h("std-image", { key: 'c40c480cd06dc720cd4ee438b38b10050c5e9ba2', classes: "block w-20 h-20 lg:w-40 lg:h-40 absolute bottom-0 lg:bottom-[-47px] right-4 lg:right-6", imageClasses: "aspect-[3/1] lg:aspect-auto", src: "assets/images/svg/buildings.svg", srcDesktop: "assets/images/svg/buildings.svg", alt: "Alt" }))));
    }
    static get is() { return "std-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-banner.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "back": {
                "type": "boolean",
                "attribute": "back",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "href": {
                "type": "string",
                "attribute": "href",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "clickBack",
                "name": "clickBack",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=std-banner.js.map
