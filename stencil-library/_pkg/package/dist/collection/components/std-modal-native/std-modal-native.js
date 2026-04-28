import { h } from "@stencil/core";
export class StdModalNativeComponent {
    constructor() {
        this.size = 's';
    }
    async openDialog() {
        if (this.dialogElement) {
            this.dialogElement.showModal();
            this.dialogElement.focus();
            this.dialogElement.blur();
        }
    }
    async closeDialog() {
        this.dialogElement && this.dialogElement.close();
    }
    handleShowChange(newValue) {
        newValue ? this.openDialog() : this.closeDialog();
    }
    handleScroll(ev) {
        if (ev.code === 'Escape') {
            !this.closeableEsc ? ev.preventDefault() : this.closeDialog();
        }
    }
    componentDidLoad() {
        if (this.show) {
            this.openDialog();
        }
    }
    render() {
        const containerSizeClasses = {
            s: 'lg:max-w-[25rem]',
            m: 'lg:max-w-[37.5rem]',
            l: 'lg:max-w-[50rem]'
        }[this.size];
        const containerClasses = ['flex flex-col w-full mx-auto bg-white rounded-t-lg lg:rounded-lg shadow-modal overflow-hidden', containerSizeClasses, this.classes]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const dialogClasses = ['css-modal-native fixed inset-0 backdrop:bg-dark/50 bg-transparent z-20 focus:outline-none', this.modalClasses].join(' ').trim().replace(/\s+/g, ' ');
        const footerClasses = ['flex flex-col lg:flex-row lg:flex-wrap gap-4 px-4 pt-4 pb-6 lg:px-6 lg:pt-6 lg:pb-8', this.size === 's' ? 'lg:justify-center' : 'lg:justify-end']
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("dialog", { key: '4fcf0acfa9e343a28306f5cd2e13284e4e6d3887', ref: el => (this.dialogElement = el), class: dialogClasses }, h("div", { key: '7c947fbc15d8eaf4a5b7f0da952a589273dbb962', class: containerClasses }, !this.noHeader && (h("header", { key: '313df3007f4347e97e9a81e98b5a0818cb076b36', class: "flex justify-end p-2 lg:p-6" }, h("button", { key: '6a52681383646255392c5e001c8db98e4a73dd10', class: "flex justify-center items-center focus:outline-none", "data-modal-close": true, onClick: e => this.iconClick.emit(e) }, h("i", { key: '50285ae000857c0e8e1cd45561e6d84ac3df45e0', class: "icon-close text-2xl leading-none " })))), h("div", { key: '27863e8cdbded9ca836b1639dc926a701cb2f454', class: ['px-4 pb-4 lg:px-6 lg:pb-6', this.noHeader ? 'pt-6 lg:pt-8' : '', this.noFooter ? 'pb-6 lg:pb-8' : '', this.classContent]
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ') }, h("slot", { key: '59fe03548698d81bdfddb34d8b80badcdc15b402' })), !this.noFooter && (h("footer", { key: '6878aaa596887d1d873a3f3b6a13d9a100aab636', class: footerClasses }, h("slot", { key: 'b992519828a1d3c5716888d7ad52a2e06566aa0b', name: "footer" }))))));
    }
    static get is() { return "std-modal-native"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-modal-native.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-modal-native.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "closeableEsc": {
                "type": "boolean",
                "attribute": "closeable-esc",
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
    static get methods() {
        return {
            "openDialog": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeDialog": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "show",
                "methodName": "handleShowChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleScroll",
                "target": "document",
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=std-modal-native.js.map
