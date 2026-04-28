import { h } from "@stencil/core";
export class StdUploadLoaderComponent {
    constructor() {
        this.status = 'loading';
        this.disabled = false;
    }
    onClickCancel(event) {
        this.cancelFlow.emit(event);
    }
    render() {
        const defaulMessage = {
            loading: 'Cargando...',
            success: 'Carga exitosa',
            error: 'Carga fallida. Intenta cargar el archivo nuevamente.'
        }[this.status];
        const uploadClasses = ['css-upload-loader shadow-button p-4 flex justify-between items-center gap-4', this.classes, this.disabled ? 'disabled' : '']
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("div", { key: '40e689df8b2bfa385e75f2a2f53e4a1ca630170b', class: uploadClasses }, h("div", { key: '1b8e808ed9c7a1e2ad0bcce624c523cae0450c34', class: "flex-1 flex items-center gap-4" }, this.status === 'loading' && !this.progress && (h("svg", { key: '3646022d39af1d71af3e1d2fa6f89eb62412c96b', class: "animate-svg", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, h("circle", { key: 'd083884bdd5322bf376626c0626a4d6f89f7b25a', class: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "#e80000", "stroke-width": "4" }), h("path", { key: 'e8d617ae92c7fc19eb6d2edfd13234ad3148971b', class: "opacity-75", fill: "#e80000", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }))), this.status === 'loading' && this.progress && h("std-small-rounded-progress", { key: 'd09bf5a4c799de8845d82e6274101202872ec548', progress: this.progress.toString() }), this.status === 'success' && !this.disabled && h("std-support-icons", { key: '52c47ff60fe2d9cec82f871b9543604ad3bc5910', type: "success", class: "w-6 h-6 " }), this.status === 'success' && this.disabled && h("i", { key: 'b09e2256232c5e1a9ad368344b386a4e4ad0482d', class: "icon-checkmark-in-a-circle text-2xl text-labeldisabled" }), this.status === 'error' && h("std-support-icons", { key: '10e130b0ebf1607b7954f88aa94f6217bb62339f', type: "error", class: "w-6 h-6" }), h("div", { key: '60e8a9994233b286387ae889c8be2ddbd29e8a24', class: "flex-1 flex flex-col gap-1" }, h("p", { key: 'a5634be8db59189ace45ad8c8ce480c1afedced4', class: `text-sm font-bold css-upload-loader-text ` }, this.nameFile), h("p", { key: '91b6eb54ef37fda725808f20be429624ef10c5c6', class: `text-sm css-upload-loader-text  ${this.status === 'error' ? 'text-error' : ''}` }, this.textStatus || defaulMessage)), h("button", { key: '702f5e50f3cd70baee93946ef0c1b643b59dfa77', onClick: e => this.onClickCancel(e), class: "shrink-0 leading-none" }, h("i", { key: 'e48cf26864afa6943defcca8152e3cadb4b8a44f', class: "icon-close text-2xl leading-none" })))));
    }
    static get is() { return "std-upload-loader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-upload-loader.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-upload-loader.css"]
        };
    }
    static get properties() {
        return {
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
            "nameFile": {
                "type": "string",
                "attribute": "name-file",
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
            "textStatus": {
                "type": "string",
                "attribute": "text-status",
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
                "reflect": false,
                "defaultValue": "'loading'"
            },
            "progress": {
                "type": "string",
                "attribute": "progress",
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
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "cancelFlow",
                "name": "cancelFlow",
                "bubbles": true,
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
//# sourceMappingURL=std-upload-loader.js.map
