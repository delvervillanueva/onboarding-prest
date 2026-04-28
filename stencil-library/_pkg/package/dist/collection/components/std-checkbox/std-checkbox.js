import { h } from "@stencil/core";
export class StdCheckboxComponent {
    constructor() {
        this.status = 'default';
    }
    onChange() {
        this.checked = !this.checked;
        this.changeEvent.emit({ value: this.value, checked: this.checked });
    }
    render() {
        const statusClasses = {
            default: 'text-alternative border-border-default hover:border-dark checked:bg-checkbox-checked checked:hover:text-alternative-dark',
            error: 'text-alternative border-error checked:bg-checkbox-checked hover:border-error'
        }[this.status];
        const checkboxClasses = [
            'w-6 h-6 rounded focus:ring-focus checked:bg-[length:12px_9px] cursor-pointer',
            this.readonly || this.disabled ? '' : statusClasses,
            this.readonly && 'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:bg-checkbox-readonly checked:border-border-disabled checked:hover:border-border-disabled',
            this.disabled && 'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:bg-checkbox-disabled checked:border-border-disabled checked:hover:border-border-disabled',
            this.classes
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const wrapperClasses = ['flex gap-2', this.readonly && 'pointer-events-none'].join(' ').trim().replace(/\s+/g, ' ');
        return (h("label", { key: '990ac63c879fce0787fdc936524e2a33c7b4152a', class: wrapperClasses }, h("input", { key: 'a17d4a64eed4c7e960117ff336004da99d9fba52', class: checkboxClasses, type: "checkbox", name: this.name, value: this.value, checked: this.checked, readonly: this.readonly, disabled: this.disabled, onChange: () => this.onChange(), onFocus: e => this.focusEvent.emit(e), onBlur: e => this.blurEvent.emit(e) }), this.label && h("span", { key: 'abbf10a9c9119bf6c6710f05ed246e3b8ec9835b', class: this.disabled && 'text-dark/[0.23]' }, this.label)));
    }
    static get is() { return "std-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-checkbox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-checkbox.css"]
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
                "mutable": true,
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
                    "original": "{ value: string; checked: boolean }",
                    "resolved": "{ value: string; checked: boolean; }",
                    "references": {}
                }
            }, {
                "method": "focusEvent",
                "name": "focusEvent",
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
//# sourceMappingURL=std-checkbox.js.map
