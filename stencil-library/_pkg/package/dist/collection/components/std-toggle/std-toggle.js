import { h } from "@stencil/core";
export class StdToggleComponent {
    constructor() {
        this.type = 'default';
    }
    onChangeToggle(event) {
        const input = event.target;
        this.changeToggleEvent.emit(input.checked);
    }
    render() {
        if (this.type === 'symbol') {
            const initialClasses = `after:absolute after:top-0 after:left-0 after:flex after:justify-center after:items-center after:w-6 after:h-6 after:bg-white after:content-['X'] after:text-alternative after:font-bold after:border after:border-alternative after:rounded-full after:transition-all after:duration-300`;
            const checkedClasses = `peer-checked:after:content-['✓'] peer-checked:after:translate-x-full`;
            const disabledClasses = `bg-border-default after:text-border-default after:border-border-default`;
            const isDisabledStyle = !this.checked;
            const toggleClasses = ['relative w-12 h-6 bg-alternative rounded-full', initialClasses, checkedClasses, isDisabledStyle ? disabledClasses : '']
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ');
            return (h("label", { class: "inline-flex items-center cursor-pointer" }, h("input", { type: "checkbox", class: "w-0 invisible peer", checked: this.checked, disabled: this.disabled, onChange: e => this.onChangeToggle(e) }), h("div", { class: toggleClasses })));
        }
        else {
            const initialClasses = `after:absolute after:top-0 after:left-0 after:flex after:justify-center after:items-center after:w-6 after:h-6 after:bg-white after:content-['${this.labelOne}'] after:text-alternative after:font-bold after:border after:border-alternative after:rounded-full after:transition-all after:duration-300`;
            const checkedClasses = `peer-checked:after:content-['${this.labelTwo}'] peer-checked:after:translate-x-full`;
            const disabledClasses = `peer-disabled:bg-border-default peer-disabled:after:text-border-default peer-disabled:after:border-border-default`;
            const toggleClasses = ['relative w-12 h-6 bg-alternative rounded-full', initialClasses, checkedClasses, disabledClasses].join(' ').trim().replace(/\s+/g, ' ');
            return (h("label", { class: "inline-flex items-center cursor-pointer" }, h("input", { type: "checkbox", class: "w-0 invisible peer", checked: this.checked, disabled: this.disabled, onChange: e => this.onChangeToggle(e) }), h("div", { class: toggleClasses })));
        }
    }
    static get is() { return "std-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-toggle.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-toggle.css"]
        };
    }
    static get properties() {
        return {
            "labelOne": {
                "type": "string",
                "attribute": "label-one",
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
            "labelTwo": {
                "type": "string",
                "attribute": "label-two",
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'symbol'",
                    "resolved": "\"default\" | \"symbol\"",
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
    static get events() {
        return [{
                "method": "changeToggleEvent",
                "name": "changeToggleEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=std-toggle.js.map
