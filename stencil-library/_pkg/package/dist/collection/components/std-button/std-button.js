import { h } from "@stencil/core";
export class StdButtonComponent {
    constructor() {
        this.iconPosition = 'right';
        this.type = 'primary';
        this.size = 'l';
    }
    onClick(event) {
        event.preventDefault();
        this.clickEvent.emit(event);
    }
    render() {
        const defaultClasses = 'inline-flex justify-center items-center font-bold rounded-full transition-all duration-300 ease-in-out';
        const typeClasses = {
            primary: 'w-full bg-primary text-white hover:bg-primary-dark',
            secondary: 'w-full bg-white text-primary shadow-button hover:bg-button-secondary-hover hover:text-primary-dark',
            tertiary: 'w-full bg-dark/0 text-alternative hover:bg-dark/[0.04] hover:text-alternative-dark '
        }[this.type];
        const sizeClasses = {
            s: 'gap-1 min-w-28 text-sm px-4 py-1.5',
            l: 'gap-1 min-w-36 px-5 py-3'
        }[this.size];
        const disabledClasses = {
            primary: 'disabled:bg-dark/[0.06] disabled:text-dark/[0.23] disabled:shadow-none',
            secondary: 'disabled:bg-dark/[0.06] disabled:text-dark/[0.23] disabled:shadow-none',
            tertiary: 'disabled:bg-dark/0 disabled:text-dark/[0.23] disabled:shadow-none'
        }[this.type];
        const buttonClasses = [
            defaultClasses,
            this.href && this.disabled ? 'bg-dark/[0.06] text-dark/[0.23] shadow-none pointer-events-none' : typeClasses,
            sizeClasses,
            this.disabled && !this.href ? disabledClasses : '',
            this.classes
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const iconClass = [`text-xl leading-none icon-${this.icon}`, this.iconClasses].join(' ').trim().replace(/\s+/g, ' ');
        return this.href ? (h("a", { class: buttonClasses, href: this.href, "aria-label": this.label }, this.icon && this.iconPosition === 'left' && h("i", { class: iconClass }), this.label && h("span", null, this.label), this.icon && this.iconPosition === 'right' && h("i", { class: iconClass }))) : (h("button", { class: buttonClasses, disabled: this.disabled, "aria-label": this.label, onFocus: e => this.focusEvent.emit(e), onBlur: e => this.blurEvent.emit(e), onClick: e => this.onClick(e) }, this.icon && this.iconPosition === 'left' && h("i", { class: iconClass }), this.label && h("span", null, this.label), this.icon && this.iconPosition === 'right' && h("i", { class: iconClass }), this.loading && (h("svg", { class: "animate-svg", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, h("circle", { class: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", "stroke-width": "4" }), h("path", { class: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }))), this.img && h("std-image", { src: this.srcImage, "image-classes": this.imageClasses })));
    }
    static get is() { return "std-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-button.css"]
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
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
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
                "defaultValue": "'right'"
            },
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
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                "defaultValue": "'l'"
            },
            "href": {
                "type": "string",
                "attribute": "href",
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
            "img": {
                "type": "boolean",
                "attribute": "img",
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
            "srcImage": {
                "type": "string",
                "attribute": "src-image",
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
            "iconClasses": {
                "type": "string",
                "attribute": "icon-classes",
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
            "imageClasses": {
                "type": "string",
                "attribute": "image-classes",
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
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
            }
        };
    }
    static get events() {
        return [{
                "method": "clickEvent",
                "name": "clickEvent",
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
//# sourceMappingURL=std-button.js.map
