import { h } from "@stencil/core";
export class StdNotificationsComponent {
    render() {
        return h("div", { key: '458c348cecfc3906b7533a8849ce5af60cb3247e', class: "css-notifications flex items-center justify-between bg-white rounded py-4 px-6 hover:bg-notifications group relative" }, h("p", { key: 'cce82e5ec0d613128fb20d0829f2d39772d1ba46', class: "css-notifications-title text-base text-dark font-bold font-headline mr-9" }, this.label), h("span", { key: 'e3740253ffa2497be7c4403f44bd73b31e734a2d', class: "flex items-center justify-center bg-primary rounded-full p-1 min-w-6 w-6 h-4 text-white text-xs" }, this.number), h("div", { key: '3d9922396b5348557afe9454778a92a3a94d1d8d', class: "hidden show-collapse" }, h("std-tooltip", { key: 'be1e785a90cfa6904ac835cf0c4cd86f7723ef72', position: this.tooltipPosition, innerHTML: this.label, classes: "group-hover:block !p-4 !w-auto whitespace-nowrap css-tooltips" })));
    }
    static get is() { return "std-notifications"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-notifications.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-notifications.css"]
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
            "number": {
                "type": "number",
                "attribute": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            }
        };
    }
}
//# sourceMappingURL=std-notifications.js.map
