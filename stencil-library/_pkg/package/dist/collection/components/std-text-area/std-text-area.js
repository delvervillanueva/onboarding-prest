import { h } from "@stencil/core";
export class StdTextAreaComponent {
    constructor() {
        this.status = 'default';
        this.max = 0;
        this.rows = 2;
    }
    onInputChanged(event) {
        const target = event.target;
        this.value = target.value;
        this.changeEvent.emit(this.value);
    }
    onInputNativeChange(event) {
        this.nativeChangeEvent.emit(event);
    }
    render() {
        var _a;
        const statusClasses = {
            default: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            success: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            error: 'border-error focus:border-error focus:ring-error'
        }[this.status];
        const textareaClasses = [
            'w-full rounded-lg p-3 placeholder:text-soft',
            this.readonly || this.disabled ? '' : statusClasses,
            this.readonly && 'bg-dark/[0.06] border-transparent focus:border-transparent focus:ring-transparent',
            this.disabled && 'bg-dark/[0.06] text-dark/[0.23] border-transparent',
            this.icon && 'pr-12',
            this.classes
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const labelClasses = this.disabled && 'text-dark/[0.23]';
        const iconClasses = [
            'absolute top-3 right-3 text-2xl leading-none',
            !this.readonly && !this.disabled ? 'text-alternative' : '',
            this.readonly && 'text-soft',
            this.disabled && 'text-dark/[0.23]',
            `icon-${this.icon}`
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("div", { key: '8d91b98433b604d35805b29a0ef0cb7535dc1a84', class: "flex flex-col gap-1 relative" }, this.label && (h("label", { key: '329783f2025ce3f5d60e3f39a81d994418a09802', htmlFor: this.htmlId, class: labelClasses }, this.label, this.counter && (h("span", { key: 'be82826e109aac6dffe6d125edb33011284ea5a1', class: "text-dark text-sm absolute right-1" }, ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0, "/", this.max)))), h("div", { key: '9320ac575fe0d2ea6520005476dc0c680b2b4436', class: "relative" }, h("textarea", { key: '1c97715529d3552b38d55d7b2ea23935dd4cada5', value: this.value, onInput: e => this.onInputChanged(e), onChange: e => this.onInputNativeChange(e), maxlength: this.max, rows: this.rows, class: textareaClasses, id: this.htmlId, name: this.name, placeholder: this.placeholder, disabled: this.disabled, readonly: this.readonly }, this.value), this.icon && h("i", { key: '7e53fbd67079699f1cd2f7f0b421318f626ad646', class: iconClasses })), this.helperText && h("std-helpertext", { key: '2f215039042da2daa8123934fa22c21dbf6940fc', label: this.helperText, status: this.status, disabled: this.disabled })));
    }
    static get is() { return "std-text-area"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-text-area.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-text-area.css"]
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
                "reflect": false
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
            "max": {
                "type": "any",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "defaultValue": "0"
            },
            "counter": {
                "type": "boolean",
                "attribute": "counter",
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
            "rows": {
                "type": "number",
                "attribute": "rows",
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
                "defaultValue": "2"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
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
            }, {
                "method": "nativeChangeEvent",
                "name": "nativeChangeEvent",
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
//# sourceMappingURL=std-text-area.js.map
