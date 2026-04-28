import { h } from "@stencil/core";
// Component ui-options-btn: Deprecated
export class UiOptionsBtnComponent {
    render() {
        const iconClasses = ['text-2xl leading-none', `icon-${this.icon}`].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: '9468f6b402f34104005e5e668375c358adc723d2', class: "bg-primary text-white px-4" }, h("a", { key: '66f221951517cb76401f2ff7f8e9ae1148c68b7f', href: this.href, class: "flex items-center gap-2 text-base font-bold whitespace-nowrap" }, this.icon && h("i", { key: 'ce53a2bbf483432c747723e75ffeb1a426654866', class: iconClasses }), this.label)));
    }
    static get is() { return "ui-options-btn"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-options-btn.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-options-btn.css"]
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
            }
        };
    }
}
//# sourceMappingURL=ui-options-btn.js.map
