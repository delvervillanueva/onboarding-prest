import { h } from "@stencil/core";
export class StdModalComponent {
    constructor() {
        this.size = 's';
    }
    render() {
        const containerSizeClasses = {
            s: 'lg:max-w-[25rem]',
            m: 'lg:max-w-[37.5rem]',
            l: 'lg:max-w-[50rem]'
        }[this.size];
        const dialogClasses = ['css-modal fixed inset-0 backdrop:bg-dark/50 bg-transparent z-20 focus:outline-none', this.modalClasses].join(' ').trim().replace(/\s+/g, ' ');
        const containerClasses = ['flex flex-col w-full mx-auto bg-white rounded-t-lg lg:rounded-lg shadow-modal overflow-hidden', containerSizeClasses, this.classes]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const footerClasses = ['flex flex-col lg:flex-row lg:flex-wrap gap-4 px-4 pt-4 pb-6 lg:px-6 lg:pt-6 lg:pb-8', this.size === 's' ? 'lg:justify-center' : 'lg:justify-end']
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("dialog", { key: 'c4a49f30a1774ad9f92891b88bb8a5762d220478', id: this.htmlId, open: this.show, class: dialogClasses }, h("div", { key: '19b7953576b0fe04fbb403baa4e90ca53fc5e25f', class: containerClasses }, !this.noHeader && (h("header", { key: 'b57d48f08c384917ebe29f7ee6ba59241e80046d', class: "flex justify-end p-2 lg:p-6" }, h("button", { key: '642a9a26b669e995389fa5468b8aea70f485b5ba', class: "flex justify-center items-center focus:outline-none", "data-modal-close": true, onClick: e => this.iconClick.emit(e) }, h("i", { key: 'a35d37c495c512af4483440617c5a90b8fa4b451', class: "icon-close text-2xl leading-none " })))), h("div", { key: '785015a07a811a67ee5c0a2fa0ccafe5d83a4660', class: ['px-4 pb-4 lg:px-6 lg:pb-6', this.noHeader ? 'pt-6 lg:pt-8' : '', this.noFooter ? 'pb-6 lg:pb-8' : '', this.classContent]
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ') }, h("slot", { key: 'e3cfb9927a27ec3558fcdf12fdd40b3aafeddc22' })), !this.noFooter && (h("footer", { key: '75626cc4f68c22edec1b8155460c6ee267eb101b', class: footerClasses }, h("slot", { key: '0e86398874d158a340b71d665620aeccb9511c35', name: "footer" }))))));
    }
    static get is() { return "std-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-modal.css"]
        };
    }
    static get properties() {
        return {
            "htmlId": {
                "type": "string",
                "attribute": "html-id",
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
            "size": {
                "type": "string",
                "attribute": "size",
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
                "defaultValue": "'s'"
            },
            "noHeader": {
                "type": "boolean",
                "attribute": "no-header",
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
            "noFooter": {
                "type": "boolean",
                "attribute": "no-footer",
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
            "modalClasses": {
                "type": "string",
                "attribute": "modal-classes",
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
            "classContent": {
                "type": "string",
                "attribute": "class-content",
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
            "show": {
                "type": "boolean",
                "attribute": "show",
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
    static get events() {
        return [{
                "method": "iconClick",
                "name": "iconClick",
                "bubbles": false,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=std-modal.js.map
