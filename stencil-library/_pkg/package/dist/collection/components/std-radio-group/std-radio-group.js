import { h } from "@stencil/core";
export class StdRadioGroup {
    constructor() {
        this.classesContainer = '';
        this.value = '';
        this.items = [];
        this.name = '';
        this.readonly = false;
        this.disabled = false;
        this.white = false;
        this.status = 'default';
        this.classes = '';
        this.classesRadio = '';
    }
    watchSelectedValue(newValue) {
        this.value = newValue;
    }
    handleChange(event) {
        const input = event.target;
        this.value = input.value;
        this.changeEvent.emit(this.value);
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
        const containerClasses = [this.classesContainer].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: '2aba6dc403212e47d157053825bfcb76efd6f644', class: containerClasses }, this.items &&
            this.items.length > 0 &&
            this.items.map((item, index) => [
                h("label", { key: index, class: wrapperClasses }, h("input", { class: checkboxClasses, type: "radio", name: this.name, value: item.value, checked: this.value === item.value, readonly: this.readonly, disabled: this.disabled, onChange: event => this.handleChange(event) }), item.label && h("span", { class: this.disabled ? 'text-dark/[0.23]' : '' }, item.label)),
                h("slot", null)
            ])));
    }
    static get is() { return "std-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-radio-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-radio-group.css"]
        };
    }
    static get properties() {
        return {
            "classesContainer": {
                "type": "string",
                "attribute": "classes-container",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "{\n    value: string;\n    label: string;\n  }[]",
                    "resolved": "{ value: string; label: string; }[]",
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "false"
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
                "reflect": false,
                "defaultValue": "false"
            },
            "status": {
                "type": "string",
                "attribute": "status",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'error'",
                    "resolved": "\"default\" | \"error\"",
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
                "reflect": false,
                "defaultValue": "''"
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
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchSelectedValue"
            }];
    }
}
//# sourceMappingURL=std-radio-group.js.map
