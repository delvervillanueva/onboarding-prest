import { h } from "@stencil/core";
export class StdPinInputComponent {
    constructor() {
        this.itemsNumber = 6;
        this.status = 'default';
        this.customLabel = false;
        this.classes = '';
        this.classesInput = '';
        this.values = Array(this.itemsNumber).fill('');
        this.inputs = [];
    }
    async setFocus() {
        this.inputs[0].focus();
    }
    async reset() {
        this.values = Array(this.itemsNumber).fill('');
        this.inputs.forEach(i => (i.value = ''));
        this.inputs[0].focus();
        this.changeEvent.emit(this.values.join(''));
    }
    componentDidLoad() {
        this.inputs = Array.from(this.el.shadowRoot.querySelectorAll('input'));
    }
    onInputChanged(event, index) {
        this.values[index] = event.target['value'] || '';
        this.changeEvent.emit(this.values.join(''));
        this.inputs[index].value.length == 1 && index < this.inputs.length - 1 && this.inputs[index + 1].focus();
    }
    onKeyDownEvent(event, index) {
        event.key === 'Backspace' && this.inputs[index].value.length == 0 && index > 0 && this.inputs[index - 1].focus();
    }
    onKeyPressEvent(event) {
        !/[0-9]/.test(event.key) && event.preventDefault();
    }
    onPasteEvent(event) {
        event.preventDefault();
        const paste = (event.clipboardData || window.clipboardData).getData('text');
        const digits = paste
            .split('')
            .filter((char) => /[0-9]/.test(char))
            .slice(0, this.itemsNumber);
        digits.forEach((digit, i) => i < this.inputs.length && (this.inputs[i].value = digit));
        !!digits.length && this.inputs[digits.length - 1].focus();
        digits.length < this.itemsNumber && this.inputs[digits.length].focus();
        this.values = digits;
        this.changeEvent.emit(digits.join(''));
    }
    render() {
        const inputStatusClasses = {
            default: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            success: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            error: 'border-error focus:border-error focus:ring-error'
        }[this.status];
        const inputDisabledClasses = 'bg-transparent border-transparent';
        const inputClasses = ['w-8 h-12 text-center rounded-lg px-1 py-3', !this.disabled && inputStatusClasses, this.disabled && inputDisabledClasses]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const disabledELementClasses = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-[1.375rem] rounded bg-border-default';
        const contentClass = ['flex flex-col gap-1 w-full max-w-[14.5rem] mx-auto'].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: '43fda05a2bc153129418d6bd2a931c9754b3619b', class: this.classes || contentClass }, !this.customLabel && h("label", { key: 'c99352b9c6ab50fa69d211397bfb0b845204a8c6' }, "Ingresa el c\u00F3digo"), this.customLabel && h("slot", { key: 'b7ab8480741e49a09ed4e2b5eb991249e92cdd2b', name: "label" }), h("div", { key: '94dd39b9dfdfe91a9035a7aaa73fe4400201418b', class: "flex justify-center gap-2" }, Array.from({ length: this.itemsNumber }).map((_, index) => (h("div", { class: "grow-0 relative" }, h("input", { class: this.classesInput || inputClasses, value: this.values[index], maxlength: "1", disabled: this.disabled, onInput: e => this.onInputChanged(e, index), onKeyDown: e => this.onKeyDownEvent(e, index), onKeyPress: e => this.onKeyPressEvent(e), onPaste: e => this.onPasteEvent(e) }), this.disabled && h("span", { class: disabledELementClasses }))))), h("slot", { key: '18ffe83a97039c07babb352c75bb1df27a9d0e42', name: "extra" })));
    }
    static get is() { return "std-pin-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-pin-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-pin-input.css"]
        };
    }
    static get properties() {
        return {
            "itemsNumber": {
                "type": "number",
                "attribute": "items-number",
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
                "reflect": false,
                "defaultValue": "6"
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
                "reflect": false
            },
            "customLabel": {
                "type": "boolean",
                "attribute": "custom-label",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "classesInput": {
                "type": "string",
                "attribute": "classes-input",
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
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "changeEvent",
                "name": "changeEvent",
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
    static get methods() {
        return {
            "setFocus": {
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
            "reset": {
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-pin-input.js.map
