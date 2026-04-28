import { h } from "@stencil/core";
export class CustomSelect {
    constructor() {
        this.status = 'default';
        this.placeholder = '';
        this.multiple = false;
        this.selectedOption = '';
        this.disabled = false;
    }
    toggleDropdown() {
        if (!this.readonly && !this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    async handleSelection(option) {
        this.isOpen = false;
        this.selectedOption = option;
        this.selectionChanged.emit(option);
    }
    get labelClass() {
        return [this.labelClasses, this.disabled ? 'opacity-20 cursor-not-allowed' : ''].join(' ').trim();
    }
    get buttonClasses() {
        return [
            'inline-flex w-full items-center justify-between p-[6px] px-[11px] text-base rounded-lg',
            this.readonly || this.disabled ? 'bg-dark/[0.06] cursor-not-allowed' : '',
            !this.selectedOption ? 'text-soft font-normal' : ''
        ]
            .join(' ')
            .trim();
    }
    get iconClasses() {
        return ['icon-chevron-down text-alternative text-2xl', this.readonly || this.disabled ? 'text-soft' : ''].join(' ').trim();
    }
    checkForClickOutside(ev) {
        // Antigua forma de reconcer el target con shadow
        // const target = this.isShadow ? ev.composedPath()[0] : ev.target;
        const path = ev.composedPath();
        if (this.isOpen && !path.includes(this.selectElement)) {
            if (!this.multiple || (this.menuElement && this.multiple && !path.includes(this.menuElement))) {
                this.isOpen = false;
                return;
            }
        }
    }
    render() {
        const statusClasses = {
            default: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            success: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            error: 'border-error focus:border-error focus:ring-error'
        }[this.status];
        const selectClasses = [
            'relative !h-[46px] css-select w-full bg-white border rounded-lg',
            // this.readonly || this.disabled ? 'border-transparent pointer-events-none' : 'border-border-default',
            this.readonly || this.disabled ? 'border-transparent pointer-events-none' : statusClasses,
            this.classes
        ]
            .join(' ')
            .trim();
        // const iconCloseClasses = [' text-alternative text-2xl',`icon-${this.icon}`, this.readonly || this.disabled ? 'text-soft' : ''].join(' ').trim();
        return (h("div", { key: 'a793c3c8e57ddb0d9d1f517b658803e5d566f949', class: "flex flex-col gap-1 w-full" }, this.label && h("p", { key: '03bba8ed9ee97cf8cba33c6d43d9848b8222efb1', class: this.labelClass }, this.label), h("div", { key: '3bb534ff4bff0a0c388622846ef11c73a267c7ac', class: selectClasses }, h("button", { key: '9eb901134b59420996a7cc0ba4866fba72514bd6', ref: el => (this.selectElement = el), type: "button", class: this.buttonClasses, onClick: () => this.toggleDropdown() }, h("span", { key: '55a181d49e9230e56d94882d6974497da0139ce2', class: "text-ellipsis whitespace-nowrap overflow-hidden" }, this.selectedOption || this.placeholder), h("i", { key: '38fdc16ee75b4fb6154de6e92c8c5ac57e221cd4', class: this.iconClasses })), this.isOpen && (h("div", { key: '577c29a026391b5d34f941b084cf9c7ee894085d', class: "flex-col left-[-1px] w-[calc(100%+2px)] px-4 bg-white absolute top-[48px] z-10 shadow-modal rounded-md", ref: el => (this.menuElement = el) }, h("slot", { key: '389b76097b3afb03bdd6242fe7344a40cb96c850' })))), this.helperText && h("std-helpertext", { key: '152331cf8ba2c8a57af8aa91535d193a27eefe32', label: this.helperText, status: this.status, disabled: this.disabled })));
    }
    static get is() { return "std-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-select.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false,
                "defaultValue": "''"
            },
            "selectTitle": {
                "type": "string",
                "attribute": "select-title",
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
            "labelClasses": {
                "type": "string",
                "attribute": "label-classes",
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
            "multiple": {
                "type": "boolean",
                "attribute": "multiple",
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
            "selectedOption": {
                "type": "string",
                "attribute": "selected-option",
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
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "selectionChanged",
                "name": "selectionChanged",
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
            }, {
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
            "handleSelection": {
                "complexType": {
                    "signature": "(option: string) => Promise<void>",
                    "parameters": [{
                            "name": "option",
                            "type": "string",
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
//# sourceMappingURL=std-select.js.map
