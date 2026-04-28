import { h } from "@stencil/core";
export class StdOptionsBtnComponent {
    render() {
        const statusClasses = {
            disabled: 'text-labeldisabled'
        }[this.status];
        const iconClasses = ['i-selector text-2xl leading-none ', `icon-${this.icon}`, statusClasses].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'c86a97befd41479d2a6e9e997034973f4dc72488', class: "h-full flex items-center" }, h("a", { key: '585fc3b0061f22e43ad0895a534f2f5f97ce8e00', href: this.href, class: "flex items-center text-sm leading-5 font-bold whitespace-nowrap cursor-pointer text-alternative" }, h("div", { key: 'b721943171080ba06101e870a4cbff8ff101fd71', class: "group relative " }, this.icon && h("i", { key: '19d38200e8c2549f12b40bf4a3d43286ea5d7bf2', class: iconClasses }), this.tooltips && (h("std-tooltip", { key: 'ba5e00a13e4d1392e362dfb9c6184e1f7438868b', position: this.tooltipPosition, classes: "std-options", class: "t-selector hidden" }, h("slot", { key: 'c6b07dfa2b68380b929a9922523a7f10c8dd7e76' }))), this.label && h("span", { key: 'cde6e30b7af3a55c4014ced2036bbeb22acccd87', class: this.classes }, this.label, " ")))));
    }
    static get is() { return "std-options-btn"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-options-btn.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-options-btn.css"]
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
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
            "tooltips": {
                "type": "boolean",
                "attribute": "tooltips",
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
            "tooltipPosition": {
                "type": "string",
                "attribute": "tooltip-position",
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
            "status": {
                "type": "string",
                "attribute": "status",
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
            "classes": {
                "type": "string",
                "attribute": "classes",
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
}
//# sourceMappingURL=std-options-btn.js.map
