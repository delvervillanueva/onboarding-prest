import { h } from "@stencil/core";
export class StdAutoComplete {
    constructor() {
        this.suggestions = [];
        this.icon = 'search';
        this.disabled = false;
        this.cacheItems = false;
        this.interactiveState = null;
        // for input
        this.disabledAsReadonly = false;
        this.status = 'default';
        this.selectedItem = null;
        this.isVisible = false; // Dropdown visibility
        this.inputValue = ''; // Current input value
    }
    async setSelectedValue(selectedItem) {
        let valueToEmit;
        if (this.valueProp) {
            this.selectedItem = typeof selectedItem === 'object' ? selectedItem : this.suggestions.find(item => item[this.valueProp] === selectedItem);
            valueToEmit = this.selectedItem ? this.selectedItem[this.valueProp] : selectedItem;
        }
        else {
            this.selectedItem = selectedItem;
            valueToEmit = selectedItem;
        }
        this.inputValue = this.selectedItem ? this.displayText(this.selectedItem) : selectedItem;
        this.changeEvent.emit(this.inputValue); // notify std-input about the change
        this.selectedEvent.emit(valueToEmit);
    }
    handleInputChange(event) {
        const input = event.target;
        const newValue = input.value;
        if (this.inputValue !== newValue) {
            this.inputValue = newValue;
            this.changeEvent.emit(this.inputValue); // Emit the updated input value
            this.isVisible = true; // Ensure dropdown visibility
        }
    }
    displayText(item) {
        if (!item)
            return '';
        if (typeof item === 'string')
            return item;
        const displayText = item[this.displayProp];
        if (!displayText) {
            throw new Error(`std-autocomplete | Property '${this.displayProp}' does not exist on : ${JSON.stringify(this.suggestions)}`);
        }
        return String(displayText);
    }
    altDisplayText(item) {
        if (!item)
            return '';
        if (typeof item === 'string')
            return item;
        const displayText = this.altDisplayFn ? this.altDisplayFn(item) : item[this.altDisplayProp];
        if (!displayText) {
            throw new Error(`std-autocomplete | Property '${this.altDisplayProp}' does not exist on : ${JSON.stringify(this.suggestions)}`);
        }
        return String(displayText);
    }
    toggleVisible() {
        if (!this.cacheItems)
            return;
        this.isVisible = !this.isVisible;
    }
    onInputBlur(selectedItem) {
        this.blurEvent.emit(selectedItem);
    }
    checkForClickOutside(ev) {
        const path = ev.composedPath();
        const inputElement = this.inputElement && !path.includes(this.inputElement);
        if (this.isVisible) {
            if (!this.cacheItems || inputElement) {
                this.isVisible = false;
                return;
            }
        }
    }
    render() {
        return (h("div", { key: 'dc7fac5dfaeb8f6bef417095db78068df9be945d', class: "relative" }, h("div", { key: 'bd7bbc3fc6581c49e930a74f564e632f33fe4fad', onClick: () => this.toggleVisible(), ref: el => (this.inputElement = el) }, h("std-input", { key: 'adb7b49ef0a857bd99133236ca4372e011b1b8f8', label: this.label, icon: this.icon, value: this.inputValue, placeholder: this.placeholder, maxlength: this.maxLength, minlength: this.minLength, disabled: this.disabled, readonly: this.readonly, onBlur: e => this.onInputBlur(e), onInput: event => this.handleInputChange(event), helperText: this.helperText, status: this.status, disabledAsReadonly: this.disabledAsReadonly })), this.interactiveState === 'loading' && this.isVisible && (h("div", { key: '0bc40393b396294b681e82bc057234b1fa60b61c', class: "absolute top-[77px] inset-x-0 w-full shadow-modal bg-white rounded-md px-1 z-10" }, h("div", { key: 'e9839ac58dce816955146be20284387c1004dcd7', class: "flex justify-center w-full h-[112px] pt-2" }, h("std-small-loader", { key: '66ad1d9be9da713f1c8135d51c228ddfb2edc2f3', classes: "w-8-sl h-8-sl animate-spin-sl" })))), this.interactiveState === 'error' && this.isVisible && (h("div", { key: '6d9360f3cd85d217e1280d0664067fac3114be35', class: "absolute top-[77px] inset-x-0 w-full shadow-modal bg-white rounded-md px-1 z-10" }, h("div", { key: '35df7c265625f6ec38291cc0d4da8fb25804d75c', class: "flex gap-2 p-4" }, h("i", { key: '0933826207365537faca84b30cae9edf513f57d2', class: "icon-alert text-primary text-2xl" }), h("div", { key: '76fabf00f72ec48085495b019dc11f6eff05940b' }, h("p", { key: '138f657ae88e9201cd66ad83e64059b1a0773eab', class: "text-dark text-base" }, "Error al cargar los resultados."), h("p", { key: '4adc6879afa2bfa9dfb9da2380d411d128e0ec0d', class: "text-dark text-base" }, "Por favor, int\u00E9ntalo nuevamente."))))), this.interactiveState === 'void' && this.isVisible && (h("div", { key: '5e8f1e52b02c6b75af64f6e5db97eec0ebf778a0', class: " absolute top-[77px] inset-x-0 w-full shadow-modal bg-white rounded-md px-1 z-10" }, h("div", { key: '4c8525013066eb57df5007d174a873f312025087', class: "flex items-center gap-2 p-4" }, h("i", { key: '730e93bd1a091ed23f400b74a6af6e58c5e4ef74', class: "icon-warning-in-a-circle text-primary text-2xl" }), h("p", { key: 'd9689cef130e48be3f4900247ff716dd6ea812c6', class: "text-dark text-base" }, "No se encontraron coincidencias.")))), h("div", { key: 'd36e7c26eedd7318a753a4861a253ed7e599c102', class: "absolute top-full inset-x-0 w-full shadow-modal bg-white rounded-md px-1 z-10" }, this.isVisible && this.suggestions.length > 0 && !this.interactiveState && (h("ul", { key: 'e8eb0363eadfa635c2a5b99fb9eb58a3266f141f', class: "w-full flex flex-col gap-1 py-1 max-h-[216px] overflow-y-auto" }, this.suggestions.map(item => (h("li", { onClick: () => this.setSelectedValue(item), class: "flex justify-between items-center gap-2 rounded hover:bg-alternative-light p-3 transition-all duration-300 cursor-pointer" }, this.displayProp && !this.altDisplayProp && !this.altDisplayFn && h("span", { class: "text-base text-dark" }, this.displayText(item)), (this.altDisplayProp || this.altDisplayFn) && (h("div", { class: "flex flex-col" }, h("span", { class: "text-lg text-dark font-headline font-bold" }, this.displayText(item)), h("span", { class: "text-sm text-dark" }, this.altDisplayText(item))))))))))));
    }
    static get is() { return "std-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-autocomplete.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-autocomplete.css"]
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
            "suggestions": {
                "type": "unknown",
                "attribute": "suggestions",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
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
                "defaultValue": "[]"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "defaultValue": "'search'"
            },
            "displayProp": {
                "type": "string",
                "attribute": "display-prop",
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
            "valueProp": {
                "type": "string",
                "attribute": "value-prop",
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
            "altDisplayProp": {
                "type": "string",
                "attribute": "alt-display-prop",
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
            "altDisplayFn": {
                "type": "unknown",
                "attribute": "alt-display-fn",
                "mutable": false,
                "complexType": {
                    "original": "Function",
                    "resolved": "Function",
                    "references": {
                        "Function": {
                            "location": "global",
                            "id": "global::Function"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
            "maxLength": {
                "type": "number",
                "attribute": "max-length",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            "minLength": {
                "type": "number",
                "attribute": "min-length",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
            "cacheItems": {
                "type": "boolean",
                "attribute": "cache-items",
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
            },
            "interactiveState": {
                "type": "string",
                "attribute": "interactive-state",
                "mutable": false,
                "complexType": {
                    "original": "null | 'loading' | 'error' | 'void'",
                    "resolved": "\"error\" | \"loading\" | \"void\"",
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
                "defaultValue": "null"
            },
            "disabledAsReadonly": {
                "type": "boolean",
                "attribute": "disabled-as-readonly",
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
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
                "defaultValue": "'default'"
            }
        };
    }
    static get states() {
        return {
            "selectedItem": {},
            "isVisible": {},
            "inputValue": {}
        };
    }
    static get events() {
        return [{
                "method": "changeEvent",
                "name": "changeEvent",
                "bubbles": false,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "selectedEvent",
                "name": "selectedEvent",
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
            }, {
                "method": "blurEvent",
                "name": "blurEvent",
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
            "setSelectedValue": {
                "complexType": {
                    "signature": "(selectedItem: any) => Promise<void>",
                    "parameters": [{
                            "name": "selectedItem",
                            "type": "any",
                            "docs": ""
                        }],
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
    static get listeners() {
        return [{
                "name": "click",
                "method": "checkForClickOutside",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=std-autocomplete.js.map
