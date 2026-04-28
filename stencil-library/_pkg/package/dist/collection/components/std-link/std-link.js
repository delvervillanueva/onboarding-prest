import { h } from "@stencil/core";
export class StdLinkComponent {
    constructor() {
        this.iconPosition = 'right';
        this.type = 'default';
        this.cursor = 'pointer';
    }
    onClick(event) {
        event.preventDefault();
        this.clickEvent.emit(event);
    }
    render() {
        const defaultClasses = 'w-full inline-flex justify-center items-center gap-1 text-sm font-bold transition duration-300 ease-in-out';
        const typeClasses = {
            default: 'text-alternative hover:text-alternative-dark',
            alternative: 'text-primary hover:text-primary-dark',
            inverted: 'text-white hover:text-white/75'
        }[this.type];
        const iconPositionClasses = {
            left: 'flex-row',
            right: 'flex-row-reverse'
        }[this.iconPosition];
        const disabledClasses = 'disabled:text-dark/[0.23]';
        const linkClasses = [
            defaultClasses,
            this.href && this.disabled ? 'text-dark/[0.23] pointer-events-none' : typeClasses,
            iconPositionClasses,
            this.disabled && !this.href ? disabledClasses : '',
            this.classes,
            this.cursor === 'default' ? 'cursor-default' : 'cursor-pointer'
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const iconClasses = ['text-2xl leading-none', `icon-${this.icon}`].join(' ').trim().replace(/\s+/g, ' ');
        return this.href ? (h("a", { href: this.href, class: linkClasses }, this.label && h("span", null, this.label), this.icon && h("i", { class: iconClasses }))) : (h("button", { class: linkClasses, disabled: this.disabled, onClick: e => this.onClick(e) }, this.label && h("span", null, this.label), this.icon && h("i", { class: iconClasses })));
    }
    static get is() { return "std-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-link.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-link.css"]
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
                "defaultValue": "'default'"
            },
            "cursor": {
                "type": "string",
                "attribute": "cursor",
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
                "defaultValue": "'pointer'"
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
            }];
    }
}
//# sourceMappingURL=std-link.js.map
