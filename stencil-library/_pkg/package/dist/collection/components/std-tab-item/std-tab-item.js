import { h } from "@stencil/core";
export class StdTabItem {
    render() {
        const tabItemClasses = [
            'css-tab-pane',
            'hidden',
            this.active && 'is-active',
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("div", { key: '0de85cb2feafe2314790ec12fe1b07b448c6b5a9', class: tabItemClasses }, h("slot", { key: '8b90c4f3c9b5851ef92d3f7cfe07c3e2df0f6bfc' })));
    }
    static get is() { return "std-tab-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-tab-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-tab-item.css"]
        };
    }
    static get properties() {
        return {
            "active": {
                "type": "boolean",
                "attribute": "active",
                "mutable": true,
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
//# sourceMappingURL=std-tab-item.js.map
