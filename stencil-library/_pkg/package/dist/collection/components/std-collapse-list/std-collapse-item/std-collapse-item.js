import { h } from "@stencil/core";
export class StdCollapseItemComponent {
    render() {
        const classItem = [`text-dark text-base font-sans border-b border-alternative-medium pl-12 py-2 pr-4 `, this.isActive ? 'font-bold' : 'font-normal']
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return h("li", { key: '4a035570e8c9637ec7025712e49ee3a625ab0920', class: classItem }, this.text);
    }
    static get is() { return "std-collapse-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-collapse-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-collapse-item.css"]
        };
    }
    static get properties() {
        return {
            "isActive": {
                "type": "boolean",
                "attribute": "is-active",
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
            "text": {
                "type": "string",
                "attribute": "text",
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
//# sourceMappingURL=std-collapse-item.js.map
