import { h } from "@stencil/core";
import { setCssVariableValueDeprecated } from "../../utils/utils";
export class StdTableThComponent {
    componentDidLoad() {
        this.setVariant();
    }
    setVariant() {
        let cssVars;
        cssVars = [{ key: 'display', value: 'flex' }];
        setCssVariableValueDeprecated(this.el, 'slot', cssVars);
    }
    render() {
        return (h("div", { key: 'e4bfb32cc930173fc790ab9be8022e8122d9e5fd', class: "relative overflow-x-auto" }, h("div", { key: '5ae770fbdb35a81a2edc425100f05650706b69cc', class: "flex items-center justify-end gap-6" }, h("div", { key: 'ab107c90759c2c3dbd436f266a8739f185309c1c' }, h("i", { key: 'ca2305395de4b2c3dcdfc7b951116c78271b61f9', class: "icon-chefron-left text-2xl leading-none" })), h("ul", { key: 'b9af9fa41788c39afa9f4ada936b5155af7b5260', class: "flex items-center gap-2" }, h("li", { key: '08024367e50b50831bde4d213c13963dfa2fade4', class: "text-base font-bold" }, "1"), h("li", { key: '172ca3a40e4b38041546ebf7f088cfa01414bf4c' }, "..."), h("li", { key: '274a04f3559d862c4cbf730930693b2972a60696' })), h("div", { key: 'a8f135db2262bafd956978e3ebbe87f9e50b84cb' }, h("i", { key: '82638b4b49d5e75b53e08ec923cd0be78415d971', class: "icon-chevron-right text-2xl leading-none" }))), h("table", { key: 'd03050159ebb1b7ad58911d638fc8f88bb1401d5', class: "w-full text-sm text-left" }, h("thead", { key: '3ce4136970a0e17934c86d291a5a49160ab11242', class: "bg-alternative-light h-16" }, h("tr", { key: '3f3399dff268a8e165c99c699caaa819756869c1', class: "border-b border-alternative-medium" }, h("slot", { key: '255b83f6c85c9579cc242b440572cb2740ffaf44', name: "tableTh" }))), h("tbody", { key: '6d18259d09e68e43c7cf9dfa5f671f5fec0dc50f' }, h("slot", { key: '160d87c6db6cf54f4d7f95c900e59806df4e0b85', name: "tableBody" })))));
    }
    static get is() { return "std-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-table.css"]
        };
    }
    static get properties() {
        return {
            "titleTh": {
                "type": "string",
                "attribute": "title-th",
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
    static get states() {
        return {
            "label": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-table.js.map
