import { h } from "@stencil/core";
export class StdCollapseListComponent {
    constructor() {
        this.showLabel = true;
    }
    async toogleLabel(status) {
        this.showLabel = status === undefined ? !this.showLabel : status;
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
    }
    render() {
        const iconClasses = ['text-primary cursor-pointer text-2xl leading-none', `icon-${this.icon}`].join(' ').trim();
        return (h("div", { key: 'a3a7e670a2bd54c610f9097373f08adf0457e323', class: `flex flex-col w-full css-collapse js-collapse ${this.isOpen ? 'is-open' : ''} hover:cursor-pointer ${this.isActive ? 'is-active' : ''}` }, h("div", { key: 'adb386cafa73ee427521115621cd95377396cfd8', class: "collapse-list-header css-collapse-header flex items-center justify-between js-collapse-header border-b border-alternative-medium px-4 py-2 relative group hover:border-dark", onClick: () => this.toggleCollapse() }, h("div", { key: '6148fbca0f17f6eb75527c56f197868758016acc', class: "flex items-center gap-3 lg:collapse-list group" }, h("i", { key: 'f42108e4e5ca549764beaa37cace93b61c02ec8d', class: iconClasses }), this.showLabel && h("p", { key: 'b6148077ebe5a2bea5c9399d684e1aae3169fc61', class: "text-dark font-normal collapse-list-title whitespace-nowrap" }, this.label), h("div", { key: 'b878082e680e82b74656355572a701ed9b48638b', class: "hidden show-collapse group-hover:block" }, !this.showLabel && (h("std-tooltip", { key: '56616130dad2c1d054999e1b189fec406ea48857', position: this.tooltipPosition, classes: "group-hover:block !p-6 !w-auto whitespace-nowrap css-tooltips" }, this.label)))), this.chevron && h("i", { key: 'a7c574f19588267afea808c2b47ddca051bd52c5', class: "icon-chevron-right lg:rotate-90 text-dark cursor-pointer text-2xl" })), h("div", { key: 'ed5ba4ea35edac3e1600c70c0af3848770dd61df', class: "css-collapse-body js-collapse-body hidden w-full" }, h("ol", { key: '4e1acdadeb3bdc9139cc193d84cea7cfe78ee9e6', class: "flex flex-col w-full list-none" }, h("slot", { key: '8d54e1535014ec3105ebf8d8839b65fcdcf02410' })))));
    }
    static get is() { return "std-collapse-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-collapse-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-collapse-list.css"]
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
            "tooltip": {
                "type": "string",
                "attribute": "tooltip",
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
            "chevron": {
                "type": "boolean",
                "attribute": "chevron",
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
            "isActive": {
                "type": "boolean",
                "attribute": "is-active",
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
            "isOpen": {
                "type": "boolean",
                "attribute": "is-open",
                "mutable": true,
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
            }
        };
    }
    static get states() {
        return {
            "showLabel": {}
        };
    }
    static get methods() {
        return {
            "toogleLabel": {
                "complexType": {
                    "signature": "(status?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "status",
                            "type": "boolean",
                            "docs": ""
                        }],
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
}
//# sourceMappingURL=std-collapse-list.js.map
