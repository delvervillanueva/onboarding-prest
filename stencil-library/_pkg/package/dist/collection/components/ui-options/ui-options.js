import { h } from "@stencil/core";
// Component ui-options: Deprecated
export class UiOptionsComponent {
    constructor() {
        this.closable = false;
        this.closableItem = false;
    }
    onCloseItem() {
        if (this.closableItem) {
            this.isOpen = false;
        }
    }
    async close() {
        this.isOpen = false;
    }
    checkForClickOutside(ev) {
        const path = ev.composedPath();
        if (this.isOpen && !path.includes(this.optionsElement) && this.closable) {
            this.isOpen = false;
        }
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
    }
    render() {
        return (h("div", { key: '47c0961271c71263c589ef2ba39950e7f5e9e552', ref: el => (this.optionsElement = el), class: `css-options w-12 h-16 bg-primary text-white js-collapse flex items-center flex-row-reverse relative cursor-pointer ${this.isOpen ? 'is-open' : ''}` }, h("div", { key: 'b38a0dfdb1b6e4dfa0a9eb2281a881c93fe6a41a', class: "css-collapse-header js-collapse-header w-full h-full flex items-center justify-center", onClick: () => this.toggleCollapse() }, h("i", { key: '0f4f021e3faeedd5fc67ae047db7e6fd43e04a15', class: "icon-3-dots-vertical text-2xl leading-none show-icon" }), h("i", { key: '61ea5fe0d70e53a26277016b63ee728ce2bee329', class: "icon-close text-2xl leading-none hidden hidden-icon" })), h("div", { key: 'b3920d68ec3653e5e7e8378ad0c1b6a23821f195', class: "css-options-body js-collapse-body hidden absolute top-0 right-12 h-full bg-primary items-center" }, h("ul", { key: '8aa273cfb800a1c362a17c1133fa6cb307ab90f6', class: "flex items-center h-full", onClick: () => this.onCloseItem() }, h("slot", { key: '1c24eb0cbfa6951e321dbf68f5eab91547fc42c4' })))));
    }
    static get is() { return "ui-options"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-options.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-options.css"]
        };
    }
    static get properties() {
        return {
            "closable": {
                "type": "boolean",
                "attribute": "closable",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "closableItem": {
                "type": "boolean",
                "attribute": "closable-item",
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
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get methods() {
        return {
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "checkForClickOutside",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ui-options.js.map
