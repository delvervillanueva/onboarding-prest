import { h } from "@stencil/core";
export class StdHeadingComponent {
    render() {
        return (h("h3", { key: '6dd9339cd94ab6487cd466bb12d89fe5077cef67', class: "text-2xl leading-8 text-dark font-bold" }, this.label));
    }
    static get is() { return "std-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-heading.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-heading.css"]
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
            }
        };
    }
}
//# sourceMappingURL=std-heading.js.map
