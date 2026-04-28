import { h } from "@stencil/core";
export class StdSmallLoader {
    render() {
        return (h("svg", { key: '802327f8a514efb009ba532d2accdc0f0850be9e', class: this.classes, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '58e49d73b7f8f9a7a53b57b590b710504e97946f', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.6942 0.779908C13.8159 1.31862 13.4778 1.85397 12.9391 1.97565C6.68674 3.38779 2 9.04354 2 15.818C2 23.6621 8.27936 30.0002 16 30.0002C23.7206 30.0002 30 23.6621 30 15.818C30 9.04354 25.3133 3.38779 19.0609 1.97565C18.5222 1.85397 18.1841 1.31862 18.3058 0.779908C18.4275 0.241193 18.9628 -0.0968862 19.5016 0.0247874C26.6615 1.64191 32 8.10437 32 15.818C32 24.7438 24.8479 32.0002 16 32.0002C7.1521 32.0002 0 24.7438 0 15.818C0 8.10437 5.33855 1.64191 12.4984 0.0247874C13.0372 -0.0968862 13.5725 0.241193 13.6942 0.779908Z", fill: "#EC0000" })));
    }
    static get is() { return "std-small-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-small-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-small-loader.css"]
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
            }
        };
    }
}
//# sourceMappingURL=std-small-loader.js.map
