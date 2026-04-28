import { h } from "@stencil/core";
export class StdImageComponent {
    render() {
        const imgClasses = ['w-full h-full object-cover object-center', this.imageClasses].join(' ').trim().replace(/\s+/g, ' ');
        return (h("picture", { key: '8b2bb3f58b68a448688c0055e7c92a1b635e225e', class: this.classes }, this.srcDesktop && h("source", { key: '96eec158305d4e37df95a89f43606ee2484d859c', srcSet: this.srcDesktop, media: "(min-width: 1024px)" }), this.srcTablet && h("source", { key: '5a0fe2aa0592ea676fd89fbd77fe3914c627c245', srcSet: this.srcTablet, media: "(min-width: 768px)" }), h("img", { key: '56ddb44e759dbc68369844f58556695cd7603ca2', class: imgClasses, src: this.src, alt: this.alt })));
    }
    static get is() { return "std-image"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-image.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-image.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "attribute": "src",
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
            "srcTablet": {
                "type": "string",
                "attribute": "src-tablet",
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
            "alt": {
                "type": "string",
                "attribute": "alt",
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
            "srcDesktop": {
                "type": "string",
                "attribute": "src-desktop",
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
            },
            "imageClasses": {
                "type": "string",
                "attribute": "image-classes",
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
//# sourceMappingURL=std-image.js.map
