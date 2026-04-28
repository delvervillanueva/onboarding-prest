import { h } from "@stencil/core";
export class StdHelpertextComponent {
    render() {
        const statusHelperClasses = {
            default: 'text-soft',
            error: 'text-error',
            warning: 'text-warning',
            success: 'text-success',
            info: 'text-info'
        }[this.status];
        const helperTextClasses = ['flex gap-1 text-sm', this.disabled ? 'text-dark/[0.23]' : statusHelperClasses].join(' ').trim();
        return (h("p", { key: '9e864e2d62f4488d525d43ffbb1a05e8c5e8e24f', class: helperTextClasses }, this.status !== 'default' && h("std-support-icons", { key: 'ac015fd101ad7cd0c3d6d7fdaecc6a73bc140ac8', classes: "min-w-5-sl w-5 h-5", type: this.status }), h("span", { key: '8aced2a1551aafdf1ef9429414e033c0c51e6955' }, this.label)));
    }
    static get is() { return "std-helpertext"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-helpertext.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-helpertext.css"]
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
                "reflect": false
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=std-helpertext.js.map
