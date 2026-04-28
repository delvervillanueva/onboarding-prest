import { h } from "@stencil/core";
export class StdInputComponent {
    constructor() {
        this.type = 'text';
        this.status = 'default';
        this.disabledAsReadonly = false;
        this.hideInput = false;
        this.chips = [];
        this.isEmail = (str) => {
            return new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$').test(str);
        };
    }
    componentWillLoad() {
        this.hasTooltip = !!this.el.querySelector("[slot='tooltip']");
    }
    onInputNativeChange(event) {
        this.nativeChangeEvent.emit(event);
    }
    onInputChanged(event) {
        if (this.hasChips) {
            return;
        }
        const target = event.target;
        this.value = target.value;
        if (this.cci) {
            this.value = this.formatCCI(this.value);
        }
        this.changeEvent.emit(this.value);
    }
    onInputFocus(event) {
        this.openTooltip = true;
        this.focusEvent.emit(event);
    }
    onInputBlur(event) {
        this.openTooltip = false;
        this.blurEvent.emit(event);
        const inputElement = event.target;
        this.processChips(inputElement);
    }
    onInputKeyDown(event) {
        this.keydownEvent.emit(event);
        const input = event.target.value;
        if (event.key !== 'Backspace' || input || !this.hasChips) {
            return;
        }
        const filteredArray = [...this.chips];
        filteredArray.pop();
        this.chips = filteredArray;
        this.changeEvent.emit(this.chips);
        this.hideInput = false;
    }
    onInputKeyUp(event) {
        this.keyupEvent.emit(event);
        const inputElement = event.target;
        this.processChips(inputElement, event.key);
    }
    existEmail(email) {
        return this.chips.find(chip => chip === email);
    }
    removeItemFromArray(chip) {
        const filteredArray = this.chips.filter(e => e !== chip);
        this.chips = filteredArray;
        this.changeEvent.emit(this.chips);
        this.hideInput = false;
    }
    processChips(inputElement, pressedKey) {
        if (!this.hasChips) {
            return;
        }
        const newValue = inputElement.value;
        this.value = newValue.replace(',', '').replace(';', '');
        inputElement.value = this.value;
        if (!this.value) {
            this.value = '';
            inputElement.value = this.value;
            return;
        }
        const validateEmail = this.isEmail(this.value);
        if (!validateEmail) {
            return;
        }
        if (this.existEmail(this.value)) {
            return;
        }
        if (pressedKey && !['Enter', 'NumpadEnter', ',', ';'].includes(pressedKey)) {
            return;
        }
        const chipsFormatted = [...this.chips, this.value];
        this.chips = chipsFormatted;
        this.changeEvent.emit(this.chips);
        if (this.chips.length >= Number(this.max)) {
            this.hideInput = true;
        }
        this.value = '';
        inputElement.value = this.value;
    }
    formatCCI(input) {
        let cciFormatted = input.replace(/\D/g, '');
        if (cciFormatted.length > 3) {
            cciFormatted = cciFormatted.replace(/^(\d{3})(\d)/, '$1-$2');
        }
        if (cciFormatted.length > 6) {
            cciFormatted = cciFormatted.replace(/^(\d{3})-(\d{3})(\d)/, '$1-$2-$3');
        }
        if (cciFormatted.length > 18) {
            cciFormatted = cciFormatted.replace(/^(\d{3})-(\d{3})-(\d{12})(\d)/, '$1-$2-$3-$4');
        }
        return cciFormatted;
    }
    showPlaceholder() {
        if (this.hasChips && this.chips.length > 0) {
            return '';
        }
        return this.placeholder;
    }
    isDisabledAsReadonly() {
        return this.disabledAsReadonly && this.disabled && !!this.value;
    }
    render() {
        var _a;
        const wrapperClasses = this.hasChips
            ? 'box-input-chip'
            : ['relative', this.hasTooltip && 'group', this.disabled && !this.isDisabledAsReadonly() && 'pointer-events-none'].join(' ').trim().replace(/\s+/g, ' ');
        const statusClasses = {
            default: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            success: 'border-border-default hover:border-dark focus:border-alternative focus:ring-alternative',
            error: 'border-error focus:border-error focus:ring-error'
        }[this.status];
        const typeClasses = {
            text: '',
            search: 'pl-12'
        }[this.type];
        const inputClasses = [
            'h-12 rounded-lg p-3 placeholder:text-soft text-ellipsis',
            this.readonly || this.disabled ? '' : statusClasses,
            (this.readonly || this.isDisabledAsReadonly()) && 'bg-dark/[0.06] border-transparent focus:border-transparent focus:ring-transparent',
            this.disabled && !this.isDisabledAsReadonly() && 'bg-dark/[0.06] text-dark/[0.23] border-transparent',
            this.icon && 'pr-12',
            typeClasses,
            this.classes,
            this.hasChips ? 'input-chips' : 'w-full',
            this.hideInput ? 'hidden' : ''
        ]
            .join(' ')
            .trim();
        let labelClasses = this.disabled && !this.isDisabledAsReadonly() ? 'text-dark/[0.23]' : '';
        labelClasses += ' relative';
        const iconClasses = [
            'absolute top-3 right-3 text-2xl leading-none',
            this.iconClass,
            !this.readonly && !this.disabled ? 'text-alternative' : '',
            (this.readonly || this.isDisabledAsReadonly()) && 'text-soft',
            this.disabled && !this.isDisabledAsReadonly() && 'text-dark/[0.23]',
            ,
            `icon-${this.icon}`
        ]
            .join(' ')
            .trim();
        const searchClasses = ['absolute top-3 left-3 text-2xl leading-none', this.disabled && !this.isDisabledAsReadonly() ? 'text-dark/[0.23]' : 'text-soft', `icon-search`]
            .join(' ')
            .trim();
        const autocompleteValue = this.type === 'password' ? 'new-password' : undefined;
        return (h("div", { key: 'af0cb8055b6540f725e51375057a348e52c40aca', class: "flex flex-col gap-1" }, this.label && (h("label", { key: '95a80cdeff65f6fe612d7a131c92abe01b390087', htmlFor: this.htmlId, class: labelClasses }, this.label, this.counter && !this.hasChips && this.maxlength && (h("span", { key: '0960c793b5591dae08097adf3e52dbbec9b3db44', class: "text-dark text-sm absolute right-1" }, ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0, "/", this.maxlength)), this.counter && this.hasChips && (h("span", { key: '4e77bd7e406ac6bc5f2b7bd89b2e238c7f331a55', class: "text-dark text-sm absolute right-1" }, this.chips.length || 0, "/", this.max)))), h("div", { key: 'd11d258a900e312a9c9e848565a83f3eb18dd856', class: wrapperClasses }, this.hasChips &&
            this.chips.map((chip, index) => (h("div", { key: index, class: "box-chips inline-flex items-center justify-center gap-4 bg-alternative-light rounded-[32px] border border-alternative-dark p-2 cursor-pointer" }, h("span", { class: "text-alternative font-bold text-sm" }, chip), h("i", { onClick: () => this.removeItemFromArray(chip), class: "icon-close text-alternative text-xl leading-none" })))), this.type === 'search' && h("i", { key: 'defa6353a97db5ab1ed093a67b9181f83768905c', class: searchClasses }), h("input", { key: '4fa974a0168d711a8a91dca2840f15028473a13a', class: inputClasses, type: this.type, id: this.htmlId, name: this.name, max: this.max, min: this.min, maxlength: this.maxlength, minlength: this.minlength, value: this.value, placeholder: this.showPlaceholder(), disabled: this.disabled, readonly: this.readonly, autocomplete: autocompleteValue, onInput: e => this.onInputChanged(e), onChange: e => this.onInputNativeChange(e), onBlur: e => this.onInputBlur(e), onFocus: e => this.onInputFocus(e), onKeyDown: e => this.onInputKeyDown(e), onKeyUp: e => this.onInputKeyUp(e) }), this.icon === 'loading' ? (h("svg", { class: "w-6 h-6 animate-spin-sl absolute top-3 right-3", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.6942 0.779908C13.8159 1.31862 13.4778 1.85397 12.9391 1.97565C6.68674 3.38779 2 9.04354 2 15.818C2 23.6621 8.27936 30.0002 16 30.0002C23.7206 30.0002 30 23.6621 30 15.818C30 9.04354 25.3133 3.38779 19.0609 1.97565C18.5222 1.85397 18.1841 1.31862 18.3058 0.779908C18.4275 0.241193 18.9628 -0.0968862 19.5016 0.0247874C26.6615 1.64191 32 8.10437 32 15.818C32 24.7438 24.8479 32.0002 16 32.0002C7.1521 32.0002 0 24.7438 0 15.818C0 8.10437 5.33855 1.64191 12.4984 0.0247874C13.0372 -0.0968862 13.5725 0.241193 13.6942 0.779908Z", fill: "#EC0000" }))) : (this.icon && h("i", { class: iconClasses, onClick: e => this.iconClick.emit(e) })), this.hasTooltip && this.openTooltip && (h("std-tooltip", { key: '3a2c1dbbf1db817c4f16e73a3a25ce3a096b53c9', position: this.tooltipPosition, classes: this.classesTooltips }, h("slot", { key: 'ce99f35e41f141492cc5a2115951ba4511542b6f', name: "tooltip" })))), this.helperText && h("std-helpertext", { key: '345f01b48ba43a5523699f7c9a5c189eeccf70cd', label: this.helperText, status: this.status, disabled: this.disabled && !this.isDisabledAsReadonly() })));
    }
    static get is() { return "std-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-input.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
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
                "defaultValue": "'text'"
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
                "reflect": false
            },
            "min": {
                "type": "any",
                "attribute": "min",
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
                "reflect": false
            },
            "maxlength": {
                "type": "number",
                "attribute": "maxlength",
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
            "minlength": {
                "type": "number",
                "attribute": "minlength",
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
            "tooltipPosition": {
                "type": "string",
                "attribute": "tooltip-position",
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
            "classesTooltips": {
                "type": "string",
                "attribute": "classes-tooltips",
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
            "cci": {
                "type": "boolean",
                "attribute": "cci",
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
            "iconClass": {
                "type": "string",
                "attribute": "icon-class",
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
            "hasChips": {
                "type": "boolean",
                "attribute": "has-chips",
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
            "chips": {
                "type": "unknown",
                "attribute": "chips",
                "mutable": true,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
            }
        };
    }
    static get states() {
        return {
            "hasTooltip": {},
            "openTooltip": {},
            "hideInput": {}
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
            }, {
                "method": "focusEvent",
                "name": "focusEvent",
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
            }, {
                "method": "keydownEvent",
                "name": "keydownEvent",
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
                "method": "keyupEvent",
                "name": "keyupEvent",
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-input.js.map
