import { h } from "@stencil/core";
export class StdTab {
    constructor() {
        this.titleBox = '';
        this.label = '';
        this.description = '';
        this.status = '';
        this.typeButton = '';
        this.labelButton = '';
        this.disabled = false;
    }
    render() {
        const generatorClasses = ['flex flex-col lg:flex-row lg:justify-between gap-4', this.status].join(' ').trim().replace(/\s+/g, ' ');
        const onButtonClick = (e) => {
            e.preventDefault();
            this.clickButtonEvent.emit(e);
        };
        return (h("div", { key: 'b8c2e7656c739c7b76757aa1f3008c3f88a48161', class: "rounded-lg flex flex-col gap-5 p-6 border border-alternative-medium lg:flex-1" }, h("div", { key: '39cc9fb61cec79b44860e6cc908712805c08eb84', class: "flex items-center justify-between flex-wrap gap-2" }, h("h3", { key: 'afadc5108d4b4b4078833a9e91613a5f386a3228', class: "relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[2px] after:bg-primary text-dark text-lg font-bold flex items-center gap-2" }, this.titleBox)), h("div", { key: '7a4ed0fdec5f00cdd5788ebf6210d6b54872d7d7' }, h("div", { key: 'dcbe5299fb51328b35c479e4c6a1a481a5689672', class: generatorClasses }, h("div", { key: '02d908c4a11f614ecf4157c0c9aabcdf9aa2d1ce', class: "flex gap-2" }, h("std-support-icons", { key: '0d9eba16e3b189718c9bd17a0271d8772b68bb2e', type: this.status, classes: "password-generator" }), h("div", { key: '94a2fcea27b9e38e2c1613b8abfa361aa92681b7', class: "flex flex-col lg:pt-2 gap-1" }, h("p", { key: '3e98b5561be9be3703063871f39e7a60b14e179c', class: "text-dark text-2xl font-bold" }, this.label), h("p", { key: '303ec627ce6a2c1d23e11c986ed4ae982b6a239a', class: "text-dark text-base" }, this.description))), h("div", { key: 'c02101164a3b3f1d244c3693c12eaf84527f72c1' }, h("std-button", { key: '6072499c1ffce84ae587a2757bfe3f3b54dec4dc', onClick: (e) => onButtonClick(e), classes: "w-full lg:w-auto", type: this.typeButton, label: this.labelButton, disabled: this.disabled }), " ")))));
    }
    static get is() { return "std-password-generator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-password-generator.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-password-generator.css"]
        };
    }
    static get properties() {
        return {
            "titleBox": {
                "type": "string",
                "attribute": "title-box",
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "typeButton": {
                "type": "string",
                "attribute": "type-button",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "labelButton": {
                "type": "string",
                "attribute": "label-button",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
    static get events() {
        return [{
                "method": "clickButtonEvent",
                "name": "clickButtonEvent",
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
//# sourceMappingURL=std-password-generator.js.map
