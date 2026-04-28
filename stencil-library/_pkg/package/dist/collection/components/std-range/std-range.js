import { h, forceUpdate } from "@stencil/core";
export class StdRangeComponent {
    constructor() {
        this.isOpen = false;
        this.isErrorInitial = false;
        this.isErrorFinal = false;
    }
    componentWillLoad() {
        // this.initialValueInput = this.initialValue;
        // this.finalValueInput = this.finalValue;
    }
    componentDidLoad() {
        this.updateRangeSliders();
    }
    formatCurrency(value) {
        const convert = Number(value);
        if (isNaN(convert))
            return '';
        return new Intl.NumberFormat().format(convert).toString();
    }
    updateRangeSliders() {
        const rangeSliders = this.el.shadowRoot.querySelectorAll('.js-range');
        rangeSliders.forEach(range => {
            const initialRange = range.querySelector('.js-range-initial');
            const finalRange = range.querySelector('.js-range-final');
            this.initialValue = initialRange.value;
            this.finalValue = finalRange.value;
            initialRange.addEventListener('input', () => this.handleInputChange(initialRange, finalRange));
            finalRange.addEventListener('input', () => this.handleInputChange(initialRange, finalRange));
            this.updateRangeTrack(range, initialRange, finalRange);
        });
    }
    handleInputChange(initialRange, finalRange) {
        if (parseInt(initialRange.value) > parseInt(finalRange.value)) {
            initialRange.value = finalRange.value;
        }
        else if (parseInt(finalRange.value) < parseInt(initialRange.value)) {
            finalRange.value = initialRange.value;
        }
        this.updateRangeTrack(initialRange.parentElement, initialRange, finalRange);
    }
    updateRangeTrack(rangeElement, initialRange, finalRange) {
        const rangeTrack = rangeElement.querySelector('.js-range-track');
        this.percentInitial = (parseInt(initialRange.value) / parseInt(this.max)) * 100;
        this.percentFinal = (parseInt(finalRange.value) / parseInt(this.max)) * 100;
        rangeTrack.style.background = `linear-gradient(to right, #8F8F8F ${this.percentInitial}%, #127277 ${this.percentInitial}%, #127277 ${this.percentFinal}%, #8F8F8F ${this.percentFinal}%)`;
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
    }
    getValueInput() {
        return this.initialValueInput && this.finalValueInput ? `${this.formatCurrency(this.initialValueInput)} - ${this.formatCurrency(this.finalValueInput)}` : '';
    }
    updatePropsFromState(isInitial) {
        isInitial ? (this.isErrorInitial = false) : (this.isErrorFinal = false);
        this.initialValue = Math.round(parseInt(this.max) * (this.percentInitial * 0.01)).toString();
        this.finalValue = Math.round(parseInt(this.max) * (this.percentFinal * 0.01)).toString();
        this.renderSlider();
    }
    checkForClickOutside(ev) {
        const path = ev.composedPath();
        if (this.isOpen && !path.includes(this.inputElement) && !path.includes(this.menuElement) && !path.includes(this.iconElement)) {
            this.isOpen = false;
        }
    }
    emitChangeRange() {
        this.initialValue = this.isErrorInitial ? this.initialValueInput : this.initialValue;
        this.finalValue = this.isErrorFinal ? this.finalValueInput : this.finalValue;
        this.changeRange.emit({
            initialValue: this.initialValue,
            finalValue: this.finalValue
        });
        this.initialValueInput = this.initialValue;
        this.finalValueInput = this.finalValue;
        this.isErrorFinal = this.isErrorInitial = false;
        this.renderSlider();
    }
    clearInput(isInitial) {
        if (isInitial) {
            this.initialValue = this.min;
            this.isErrorInitial = false;
        }
        else {
            this.finalValue = this.max;
            this.isErrorFinal = false;
        }
        this.renderSlider();
    }
    validateIsOutOfRange(e, isInitial) {
        isInitial ? (this.isErrorInitial = false) : (this.isErrorFinal = false);
        const value = e.target.value;
        let newValue = String(parseInt(value));
        if (isNaN(Number(newValue)) || newValue === '') {
            newValue = '';
            isInitial ? (this.isErrorInitial = true) : (this.isErrorFinal = true);
        }
        if (Number(newValue) > Number(this.max) || Number(newValue) < Number(this.min)) {
            isInitial ? (this.isErrorInitial = true) : (this.isErrorFinal = true);
        }
        if (isInitial && Number(newValue) > Number(this.finalValue)) {
            this.isErrorInitial = true;
        }
        if (!isInitial && Number(newValue) < Number(this.initialValue)) {
            this.isErrorFinal = true;
        }
        e.target.value = newValue;
        isInitial ? (this.initialValue = newValue) : (this.finalValue = newValue);
        this.renderSlider();
    }
    onlyNumbers(e) {
        const allowedKeys = ['Backspace', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if ((e.key >= '1' && e.key <= '9') || allowedKeys.includes(e.key) || (e.key == '0' && e.target.value.length > 0)) {
            return;
        }
        e.preventDefault();
    }
    renderSlider() {
        const rangeTrack = this.el.shadowRoot.querySelector('.js-range-track');
        const min = parseInt(this.min);
        const max = parseInt(this.max);
        const init = this.isErrorInitial ? min : parseInt(this.initialValue);
        const final = this.isErrorFinal ? max : parseInt(this.finalValue);
        this.percentInitial = ((init - min) / (max - min)) * 100;
        this.percentFinal = ((final - min) / (max - min)) * 100;
        rangeTrack.style.background = `linear-gradient(to right, #8F8F8F ${this.percentInitial}%, #127277 ${this.percentInitial}%, #127277 ${this.percentFinal}%, #8F8F8F ${this.percentFinal}%)`;
        forceUpdate(this);
    }
    async reset() {
        this.initialValueInput = undefined;
        this.finalValueInput = undefined;
        this.initialValue = this.min;
        this.finalValue = this.max;
        this.changeRange.emit({
            initialValue: this.initialValueInput,
            finalValue: this.finalValueInput
        });
        this.renderSlider();
    }
    async setRange(initialValue, finalValue) {
        this.initialValueInput = initialValue;
        this.finalValueInput = finalValue;
        this.initialValue = initialValue;
        this.finalValue = finalValue;
        this.changeRange.emit({
            initialValue: this.initialValueInput,
            finalValue: this.finalValueInput
        });
        this.renderSlider();
    }
    render() {
        return (h("div", { key: 'f31cf7cd1ab420cce04b217a6bd4bcc2ee5a67e5', class: `flex css-select flex-col gap-1 w-full css-collapse js-collapse relative ${this.isOpen ? 'is-open' : ''}` }, h("div", { key: '28d6d56a2b28970cb192e0a526ec91556e47c0b4', class: "css-collapse-header js-collapse-header relative" }, h("std-input", { key: '95f879d620594cda6955edfaf8b415c44ae651c9', onKeyDown: e => e.preventDefault(), ref: el => (this.inputElement = el), value: this.getValueInput(), placeholder: "Ingresa un rango", label: "Importe", onClick: () => this.toggleCollapse() }), h("div", { key: '56f8ae9361285d4e47153940c7e2197b045bac19', class: "absolute right-3 bottom-3 w-6 h-6 bg-limit-range cursor-pointer", ref: el => (this.iconElement = el), onClick: () => this.toggleCollapse() })), h("div", { key: '5acbfb467850f04a383ae4aeac543d5841d3916a', ref: el => (this.menuElement = el), class: "css-collapse-body hidden js-collapse-body absolute top-[80px] left-0 shadow-modal bg-white rounded-lg p-5 z-10 w-full" }, h("div", { key: '7c3e0e2060b743583d4ad9ce2c07b0c47ff4f77f', class: "js-range flex flex-col gap-3 w-full" }, h("div", { key: '858b2e7e84cb6ce27aa62ee166116ca565c7a890', class: "flex flex-col gap-3" }, h("div", { key: '882d0f247b45ab1309bcd36fb42ca22d28232486', class: "grid grid-cols-2 gap-4" }, h("div", { key: '7a4dcbb3a8bacdadd93ae0d72a9bfb385af65d17' }, h("std-input", { key: 'dc7bcb16ba7d4186baf689ee7763a3b9f3bd2345', type: "number", min: this.min, max: this.finalValue, value: this.initialValue, icon: this.isErrorInitial ? 'error' : 'default', helperText: this.isErrorInitial ? 'Rango inválido' : undefined, status: this.isErrorInitial ? 'error' : 'default', onIconClick: () => this.clearInput(true), onKeyDown: e => this.onlyNumbers(e), onChangeEvent: e => this.validateIsOutOfRange(e, true), label: "Desde", classes: "no-numeric-arrows" })), h("div", { key: '893fb79e782f95c82b09fb697216eaa0a60efe6a' }, h("std-input", { key: '8286157bba79c24cbd425af74bcff6ee75168fd3', type: "number", min: this.initialValue, max: this.max, value: this.finalValue, icon: this.isErrorFinal ? 'error' : 'default', helperText: this.isErrorFinal ? 'Rango inválido' : undefined, status: this.isErrorFinal ? 'error' : 'default', onIconClick: () => this.clearInput(false), onKeyDown: e => this.onlyNumbers(e), onChangeEvent: e => this.validateIsOutOfRange(e, false), label: "Hasta", classes: "no-numeric-arrows" })))), h("div", { key: 'ae7cea689f3dcd7e00767123c02d22a8beb4048a', class: "relative flex flex-col gap-4 w-full " }, h("div", { key: '562eb9ea22ffcbbf5ade885a01c9f3b8fa65f308', class: "w-full flex items-center justify-between px-4 pb-1" }, [...Array(5)].map((_, index) => (h("span", { key: index, class: "h-2 w-[1px] bg-border-default block rounded-sm" })))), h("div", { key: 'becfd654431919086f166b401957197b271ec666', class: "relative" }, h("div", { key: '45f0a863e3d75b8c2bb587bc5470471ba2afc367', class: "js-range-track absolute inset-x-0 top-1/2 left-1/2 -tranlate-y-1/2 -translate-x-2/4 h-1 rounded-lg w-full" }), h("input", { key: 'b4634db57a63f48e19c896ba6dd44a7b81e94369', class: "js-range-initial css-range-input appearance-none outline-none absolute inset-0 bg-transparent pointer-events-none -top-[10px]", type: "range", min: this.min, max: this.max, value: this.isErrorInitial ? this.min : this.initialValue, onInput: () => this.updatePropsFromState(true) }), h("input", { key: 'c4e8f5413f406df86b8d50b21bd8f08343310b1b', class: "js-range-final css-range-input appearance-none outline-none absolute inset-0 bg-transparent pointer-events-none -top-[10px]", type: "range", min: this.min, max: this.max, value: this.isErrorFinal ? this.max : this.finalValue, onInput: () => this.updatePropsFromState(false) })), h("div", { key: 'dfc63087ced9a501939b319f734fb255cad4fdaa', class: "flex justify-between items-center w-full" }, h("span", { key: 'f422a1cb51bc14ea5f10cabd73f64b457de78002', class: "text-soft text-sm" }, "min"), h("span", { key: '41e0bebbfa3c4b55acedddb0e445a7e3329b7747', class: "text-soft text-sm" }, "max")))))));
    }
    static get is() { return "std-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-range.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-range.css"]
        };
    }
    static get properties() {
        return {
            "min": {
                "type": "string",
                "attribute": "min",
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
                "type": "string",
                "attribute": "max",
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
            "initialValue": {
                "type": "string",
                "attribute": "initial-value",
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
            "finalValue": {
                "type": "string",
                "attribute": "final-value",
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
            "unitBefore": {
                "type": "string",
                "attribute": "unit-before",
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
            "unitAfter": {
                "type": "string",
                "attribute": "unit-after",
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
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "changeRange",
                "name": "changeRange",
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
            },
            "setRange": {
                "complexType": {
                    "signature": "(initialValue: string, finalValue: string) => Promise<void>",
                    "parameters": [{
                            "name": "initialValue",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "finalValue",
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "emitChangeRange"
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
//# sourceMappingURL=std-range.js.map
