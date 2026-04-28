import { h } from "@stencil/core";
// Component ui-box: Deprecated
export class UiBoxComponent {
    render() {
        const boxClasses = ['rounded-lg flex flex-col gap-5 p-6 border border-alternative-medium lg:flex-1', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: '6056133b5040a6c332930f49138c8255aa541e12', class: boxClasses }, h("div", { key: '85147ca7348d5f024e793a92361354522426d7ab', class: "flex items-center justify-between" }, h("h3", { key: 'd68e20dec768df79f15b774d7f7f75feb971d60b', class: "relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-primary text-dark text-lg font-bold flex items-center gap-2" }, this.label), this.link && h("std-link", { key: 'db447d4501ebecffe432b6adee8fa70757817d6e', label: this.labelLink, icon: this.iconLink, "icon-position": "left", classes: this.classesLink })), h("div", { key: '6c69483c052d8a94671cd34bc6ad87f2c15f2f96' }, h("slot", { key: '7219193363fdfc5d2987ad2776567831ec81c02d' }))));
    }
    static get is() { return "ui-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-box.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-box.css"]
        };
    }
    static get properties() {
        return {
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
            },
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
            "labelLink": {
                "type": "string",
                "attribute": "label-link",
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
            "iconLink": {
                "type": "string",
                "attribute": "icon-link",
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
            "link": {
                "type": "boolean",
                "attribute": "link",
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
            "classesLink": {
                "type": "string",
                "attribute": "classes-link",
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
//# sourceMappingURL=ui-box.js.map
