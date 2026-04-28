import { h } from "@stencil/core";
export class StdBoxUserComponent {
    render() {
        const boxUserClasses = ['flex flex-col lg:flex-row items-center gap-3 css-box-user', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'de80569753acfa2484c82d5491573d5aa0b6bf44', class: boxUserClasses }, h("div", { key: '128c797884b17cd14af8f07814520a7b233bf018', class: "bg-white border border-neutral lg:border-none lg:bg-primary w-16 lg:w-10 h-16 lg:h-10 font-bold text-alternative lg:text-white rounded-full flex items-center justify-center text-3xl lg:text-base" }, "SA"), h("div", { key: 'c2eaa7d48fda7cc16ade4480cc510309d809f57b', class: "text-center lg:text-left hidden-collapse" }, h("p", { key: '183f5633bc4f80154eb3cee602453d6bdaf1d519', class: "font-bold text-dark" }, "Hola, ", this.name), h("p", { key: 'd682cb5a84ed71a989861c553f3f050fb37898c9', class: "text-soft font-bold text-xs" }, this.rol))));
    }
    static get is() { return "std-box-user"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-box-user.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-box-user.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
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
            "rol": {
                "type": "string",
                "attribute": "rol",
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
}
//# sourceMappingURL=std-box-user.js.map
