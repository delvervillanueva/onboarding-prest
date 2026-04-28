import { h } from "@stencil/core";
export class StdBoxComponent {
    render() {
        const boxClasses = ['rounded-lg flex flex-col gap-5 p-6 border border-alternative-medium lg:flex-1', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'f07a4452a84c334f52a8757c5795077074dbb043', class: boxClasses }, h("div", { key: 'c2045066c2221ef66dd7c8e440c27cf9f37271c8', class: "flex items-center justify-between flex-wrap gap-2" }, h("h3", { key: '59c3f3d9a8240b6761d6aaae143b59cd14d9b305', class: "relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-primary text-dark text-lg font-bold flex items-center gap-2" }, this.label, this.tooltips && (h("std-tooltip", { key: 'd0f3882d8468e3b528306c6db8284b11538770f3', position: this.tooltipPosition, classes: "std-box", "classes-header": "group relative flex" }, this.html, h("div", { key: 'd6818dfc1c8ac3de616911e3cb8813a3dbba3ba9', slot: "html" }, h("div", { key: 'e4f78282d1800a470368a7a02e91ac5a8371fac9', class: "flex" }, h("i", { key: 'e6bdeca215fad34e8e672b934ba918afdf388c1e', class: "icon-information-in-a-circle-2px !text-primary text-xl leading-none" })))))), this.link && h("std-link", { key: 'f9946d81acdb34ae93d17e2cab7afae454cb69f0', label: this.labelLink, icon: this.iconLink, iconPosition: "left", classes: this.classesLink }), h("slot", { key: '8a82ad3065af9401fb692e55793b3c1700c75dc7', name: "actions" })), h("div", { key: '8fe2bad61f5aab1c508e463ce005db4027882784' }, h("slot", { key: '1af22adcb2bb03b8ccf3a06f3abf665465c01b3f' }))));
    }
    static get is() { return "std-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-box.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-box.css"]
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
            "html": {
                "type": "string",
                "attribute": "html",
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
//# sourceMappingURL=std-box.js.map
