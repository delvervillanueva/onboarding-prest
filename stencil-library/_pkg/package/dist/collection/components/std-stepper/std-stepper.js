import { h } from "@stencil/core";
export class StdStepperComponent {
    componentWillLoad() {
        this.steps = this.el.querySelectorAll('[step]').length;
    }
    render() {
        return (h("section", { key: '2fe4fbee3460c400e49fd40986b38edf32cb4b39', class: `flex flex-col gap-6 bg-alternative-light px-4 lg:px-6 py-8 ${this.classes}` }, h("div", { key: '88a04eb5680c34651ebca69721edce5a8e9ed1c6', class: "flex flex-col gap-4 max-w-4xl mx-auto text-center" }, this.label && h("h1", { key: '233c067e1587b28a3a5401c9a8a78c80e0e1697b', class: "text-3xl font-bold" }, this.label), this.description && h("p", { key: 'af2296a18626894b2f70f08cf83d8d8a54cdd5fd' }, this.description)), h("ul", { key: 'a52443f0f328e098cf9989bffc0e293a202e8f46', class: "flex flex-col lg:flex-row gap-1 lg:gap-0 w-full max-w-4xl mx-auto" }, h("slot", { key: 'de73587823f3f87f355d0b439867c5b3c68e190c' }))));
    }
    static get is() { return "std-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-stepper.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-stepper.css"]
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-stepper.js.map
