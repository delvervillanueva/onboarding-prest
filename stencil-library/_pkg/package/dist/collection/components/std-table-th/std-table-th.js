import { h } from "@stencil/core";
export class StdTableThComponent {
    componentDidLoad() {
        this.positionClasses;
    }
    render() {
        // se agrego w-full para que el webcomponent tome el 100% del tamaño dado por el padre
        const contentClasses = ['flex items-center gap-1 w-full', this.positionClasses].join(' ').trim().replace(/\s+/g, ' ');
        return (h("th", { key: 'f32985e384687e7120aceccdfee17063addfd281', scope: "col", class: "px-6 py-3" }, h("div", { key: '355b577cafa988a7c1effbc231f509b7ce6829a9', class: contentClasses }, h("span", { key: '2fa5a24280ff5aa28dbfa64c7a8cd85c3365080d', class: "font-bold text-dark text-base leading-4" }, " ", this.titleTh), this.icon && (h("a", { key: '9c12af8a8c1c0c7dc7bcc6c0ad67fcd5ee8ddda6', href: this.href, class: "cursor-pointer" }, h("i", { key: '902cf388eeccfb6567e02fe1541c7c80b64f3184', class: "icon-arrow-down text-altenative text-base leading-none" }))))));
    }
    static get is() { return "std-table-th"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-table-th.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-table-th.css"]
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
            },
            "icon": {
                "type": "boolean",
                "attribute": "icon",
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
            "href": {
                "type": "string",
                "attribute": "href",
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
            "positionClasses": {
                "type": "string",
                "attribute": "position-classes",
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
//# sourceMappingURL=std-table-th.js.map
