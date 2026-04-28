import { h } from "@stencil/core";
// Component ui-card-price: Deprecated
export class UiRadioButtonComponent {
    constructor() {
        this.status = 'default';
    }
    onChange(event) {
        if (!this.readonly && !this.disabled) {
            this.changeEvent.emit(event);
        }
    }
    render() {
        const statusClasses = {
            default: 'text-alternative border-border-default checked:text-white checked:bg-radio-checked checked:border-alternative checked:hover:border-alternative',
            error: 'text-white border-error checked:bg-radio-error checked:border-error hover:border-error'
        }[this.status];
        const checkboxClasses = [
            'w-6 h-6 rounded-full outline-0 checked:bg-[length:13px] checked:border-[2px]',
            this.readonly || this.disabled ? '' : statusClasses,
            this.readonly && 'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:border-border-disabled checked:hover:border-border-disabled',
            this.disabled &&
                'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:bg-radio-checked-disabled checked:border-border-disabled checked:hover:border-border-disabled',
            this.classesRadio
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const wrapperClasses = ['flex gap-2', this.readonly && 'pointer-events-none', this.white && 'text-white', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("label", { key: 'fdb0119de618c1b4e1c289d45271525fa5ab9273', class: wrapperClasses }, h("input", { key: 'ac31e3fc858d028c97eea8b39776861fab698d3e', class: checkboxClasses, type: "radio", name: this.name, value: this.value, checked: this.checked, onChange: event => this.onChange(event), readonly: this.readonly, disabled: this.disabled }), this.label && h("span", { key: '4bc6d8c7e0dca47eb0951928bfb04ffd9fb7a097', class: this.disabled && 'text-dark/[0.23]' }, this.label)));
    }
    static get is() { return "ui-radio-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-radio-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-radio-button.css"]
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
            "value": {
                "type": "string",
                "attribute": "value",
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
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
            "white": {
                "type": "boolean",
                "attribute": "white",
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
            "classesRadio": {
                "type": "string",
                "attribute": "classes-radio",
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
}
//# sourceMappingURL=ui-radio-button.js.map
