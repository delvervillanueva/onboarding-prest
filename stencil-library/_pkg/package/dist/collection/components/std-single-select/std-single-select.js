import { h } from "@stencil/core";
export class StdSingleSelect {
    constructor() {
        this.items = [];
        this.placeholder = 'Select an option';
        this.disabled = false;
        this.status = 'default';
        this.disabledAsReadonly = false;
        this.deselected = false;
        this.searchable = false;
        this.selectedItem = null;
        this.isOpen = false;
        this.searchValue = '';
        this.filteredItems = [];
    }
    componentWillLoad() {
        this.filteredItems = this.items;
    }
    valueChanged(newValue) {
        this.setSelectedValue(newValue);
    }
    setFilteredItems() {
        this.filteredItems = this.items;
        this.setSelectedValue(this.valueRaw);
    }
    async setSelectedValue(selectedItem) {
        this.valueRaw = selectedItem;
        if (this.selectedItem === selectedItem) {
            if (this.deselected) {
                this.selectedItem = null;
                this.changeEvent.emit(null);
                return;
            }
            else {
                return;
            }
        }
        let valueToEmit;
        if (this.valueProp) {
            this.selectedItem = typeof selectedItem === 'object' ? selectedItem : this.filteredItems.find(item => item[this.valueProp] === selectedItem);
            valueToEmit = this.selectedItem ? this.selectedItem[this.valueProp] : selectedItem;
        }
        else {
            this.selectedItem = selectedItem;
            valueToEmit = selectedItem;
        }
        this.changeEvent.emit(valueToEmit);
    }
    onSelectBlur() {
        this.blurEvent.emit();
    }
    toggleDropdown() {
        if (!this.readonly && !this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    displayTextShow(item) {
        const displayText = item[this.displayShow];
        if (!displayText) {
            throw new Error(`std-single-select | Property '${this.displayShow}' does not exist on : ${JSON.stringify(this.items)}`);
        }
        return String(displayText);
    }
    displayText(item) {
        const displayText = item[this.displayProp];
        if (!displayText) {
            throw new Error(`std-single-select | Property '${this.displayProp}' does not exist on : ${JSON.stringify(this.items)}`);
        }
        return String(displayText);
    }
    altDisplayText(item) {
        const displayText = this.altDisplayFn ? this.altDisplayFn(item) : item[this.altDisplayProp];
        if (!displayText) {
            throw new Error(`std-single-select | Property '${this.altDisplayProp}' does not exist on : ${JSON.stringify(this.items)}`);
        }
        return String(displayText);
    }
    isDisabledAsReadonly() {
        return this.disabledAsReadonly && this.disabled && !!this.selectedItem;
    }
    handleInputChange(event) {
        const input = event.target;
        this.searchValue = input.value;
    }
    sanitizer(value) {
        if (typeof value !== 'string')
            return '';
        return String(value !== null && value !== void 0 ? value : '')
            .toLowerCase()
            .trim();
    }
    spliterLabel(indicator, object) {
        let valueFiler = ``;
        indicator.split('.').map(e => (valueFiler += object[e]));
        return valueFiler;
    }
    filterObject(object) {
        const spliter = Object.keys(this.items[0]).join('.');
        return this.spliterLabel(this.criteria || spliter, object);
    }
    get statusClasses() {
        return {
            default: 'border-border-default ',
            success: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            error: 'border-error focus:border-error focus:ring-error'
        }[this.status];
    }
    get selectClasses() {
        return [
            'relative !h-[46px] css-select w-full bg-white border rounded-lg',
            this.readonly || this.disabled ? 'border-transparent pointer-events-none' : this.statusClasses,
            this.classes
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
    }
    get labelClass() {
        return [this.labelClasses, this.disabled && !this.isDisabledAsReadonly() ? 'opacity-20 cursor-not-allowed' : ''].join(' ').trim();
    }
    get buttonClasses() {
        return [
            'inline-flex w-full items-center justify-between p-[6px] px-[11px] text-base rounded-lg',
            this.readonly || this.disabled ? ' bg-dark/[0.06]  cursor-not-allowed' : '',
            this.disabled && !this.isDisabledAsReadonly() ? 'text-dark/[0.23]' : '',
            !this.selectedItem ? 'text-soft font-normal' : ''
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
    }
    get iconClasses() {
        return [
            'icon-chevron-down text-2xl',
            !this.readonly && !this.disabled ? 'text-alternative' : '',
            (this.readonly || this.isDisabledAsReadonly()) && 'text-soft',
            this.disabled && !this.isDisabledAsReadonly() && 'text-dark/[0.23]'
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
    }
    checkForClickOutside(ev) {
        const path = ev.composedPath();
        const validateInput = this.menuElement && !path.includes(this.menuElement);
        const validateSingle = !this.menuElement && !path.includes(this.selectElement);
        if (this.isOpen && (validateInput || validateSingle)) {
            this.onSelectBlur();
            this.isOpen = false;
            return;
        }
    }
    watchPropHandler(newValue) {
        this.filteredItems = this.items.filter(e => {
            return this.sanitizer(this.filterObject(e)).includes(this.sanitizer(newValue));
        });
    }
    render() {
        return (h("div", { key: '64af4a5f0b797f92a502f8590a06e7da056510ac', class: "flex flex-col gap-1 w-full" }, this.label && h("p", { key: '95f00414f920af03becbaf23b6574330e36c9394', class: this.labelClass }, this.label), h("div", { key: '600293a1925aea21ded10bc3bbabc5c0599f4d53', class: this.selectClasses }, h("button", { key: '91f5e26c2697574bdce9d73dca62632787b2f3fc', ref: el => (this.selectElement = el), type: "button", class: this.buttonClasses, onClick: () => this.toggleDropdown() }, this.displayShow ? (h("span", { class: "text-ellipsis whitespace-nowrap overflow-hidden" }, (this.selectedItem && this.displayTextShow(this.selectedItem)) || this.placeholder)) : (h("span", { class: "text-ellipsis whitespace-nowrap overflow-hidden" }, (this.selectedItem && this.displayText(this.selectedItem)) || this.placeholder)), h("i", { key: '23b4530f5007421d9f5b2c932a9463d5ca1d659a', class: this.iconClasses })), this.isOpen && (h("div", { key: 'e241c4cb849cadd135efb8293c532efb2ec01589', class: "flex-col left-[-1px] w-[calc(100%+2px)] px-4 bg-white absolute top-[48px] z-10 shadow-modal rounded-md" }, this.searchable && (h("div", { key: 'dc195500ce083ba0305e8bd1edfcc235b11fb136', class: "py-4", ref: el => (this.menuElement = el) }, h("div", { key: 'f0d18ddcdd7933e5c1ef837aefc984f8c1e9f445', class: "flex flex-col gap-1" }, h("div", { key: '98cfbe28201f91ee77c3fc83a82e1fe56d3f28ab', class: "relative" }, h("i", { key: '7318d4a16c8650374fe403d716224644c7951017', class: "absolute top-3 left-3 text-2xl leading-none icon-search" }), h("input", { key: 'cc3f92e1ba408fabadf08b6b54c6bb43282fb3e5', class: "h-12 rounded-lg p-3 placeholder:text-soft pl-12 w-full border-border-default hover:border-dark focus:border-alternative focus:ring-alternative", type: "search", value: this.searchValue, placeholder: "Buscar", autocomplete: "off", onInput: e => this.handleInputChange(e) }))))), h("ul", { key: '9f5bdffdfc4bab3a3620ecd85198c128166cf668', class: "w-full flex flex-col gap-1 py-1 max-h-[216px] overflow-y-auto" }, this.filteredItems.map(item => (h("li", { class: `flex justify-between items-center gap-2 rounded hover:bg-alternative-light p-3 transition-all duration-300 cursor-pointer ${this.selectedItem === item ? 'bg-alternative-light font-bold' : ''}`, onClick: () => this.setSelectedValue(item) }, this.displayProp && !this.altDisplayProp && !this.altDisplayFn && h("span", { class: "text-base text-dark" }, this.displayText(item)), (this.altDisplayProp || this.altDisplayFn) && (h("div", { class: "flex flex-col" }, h("span", { class: "text-lg text-dark font-headline font-bold" }, this.displayText(item)), h("span", { class: "text-sm text-dark" }, this.altDisplayText(item)))), this.selectedItem === item && h("i", { class: "shrink-0 text-2xl leading-none text-alternative icon-checkmark" })))))))), this.helperText && h("std-helpertext", { key: '9a7616e7cee3a78e5c9f0d7f3a8dfed482edab30', label: this.helperText, status: this.status, disabled: this.disabled && !this.isDisabledAsReadonly() })));
    }
    static get is() { return "std-single-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-single-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-single-select.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": true,
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
                "defaultValue": "'Select an option'"
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
            "deselected": {
                "type": "boolean",
                "attribute": "deselected",
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
            "searchable": {
                "type": "boolean",
                "attribute": "searchable",
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
            "criteria": {
                "type": "string",
                "attribute": "criteria",
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
            "displayShow": {
                "type": "string",
                "attribute": "display-show",
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
                "type": "any",
                "attribute": "value",
                "mutable": true,
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
                "reflect": true
            },
            "selectedItem": {
                "type": "any",
                "attribute": "selected-item",
                "mutable": true,
                "complexType": {
                    "original": "any | null",
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
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "searchValue": {},
            "filteredItems": {},
            "valueRaw": {}
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
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "items",
                "methodName": "setFilteredItems"
            }, {
                "propName": "searchValue",
                "methodName": "watchPropHandler"
            }];
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
//# sourceMappingURL=std-single-select.js.map
