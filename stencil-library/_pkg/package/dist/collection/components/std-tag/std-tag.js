import { h } from "@stencil/core";
export class StdTagComponent {
    constructor() {
        this.type = 'neutral';
    }
    render() {
        const typeClasses = {
            neutral: 'bg-border-default text-white',
            primary: 'bg-info text-white',
            success: 'bg-success-light text-success',
            warning: 'bg-warning-light text-warning',
            alert: 'bg-error-light text-error',
            info: 'bg-info-light text-info',
        }[this.type];
        const tagClasses = ['rounded py-0.5 px-2 text-xs font-bold', typeClasses]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("span", { key: '07cc5b7182422bef06db850ce490c150a8605323', class: tagClasses }, this.label));
    }
    static get is() { return "std-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-tag.css"]
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
            "type": {
                "type": "string",
                "attribute": "type",
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
                "defaultValue": "'neutral'"
            }
        };
    }
}
//# sourceMappingURL=std-tag.js.map
