import { h } from "@stencil/core";
export class StdCardButton {
    onClick(event) {
        if (this.disabled) {
            return;
        }
        this.clickEvent.emit(event);
    }
    render() {
        const disabledOpacity = `${this.disabled ? 'opacity-[.4]' : ''}`;
        const iconClassList = [`text-xl leading-none icon-${this.icon} ${disabledOpacity}`, this.iconClasses].join(' ').trim().replace(/\s+/g, ' ');
        // h-full
        const disabledClassList = this.disabled ? `bg-disabledselect` : `bg-white shadow-modal cursor-pointer`;
        const cardClasses = [`rounded-lg p-4 css-card-button ${disabledClassList}`, this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'c6552444cc0fe817dd31d5c5b79d814aa4501e14', class: cardClasses, onClick: e => this.onClick(e) }, h("button", { key: 'e74b2cf0e3bbbd3295c5a9d4851218ab9db839af', class: `flex flex-col gap-2 ${this.disabled ? 'cursor-default' : ''}` }, this.icon && h("i", { key: '9657137843eb4154fb06ec40cbc1214d43c49097', class: iconClassList }), this.image && h("std-image", { key: 'a8a3524c16f2bfe7c883c6b2144d9be29d3a4bfb', src: this.src, class: `w-6 h-6 ${disabledOpacity}` }), h("span", { key: '8dfae4c34993a0d13f6556421269412d1bd0063c', class: `css-text  ${this.disabled ? 'text-labeldisabled' : 'text-dark font-bold'} text-sm text-left` }, this.cardTitle))));
    }
    static get is() { return "std-card-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-card-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-card-button.css"]
        };
    }
    static get properties() {
        return {
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
            "cardTitle": {
                "type": "string",
                "attribute": "card-title",
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
            "src": {
                "type": "string",
                "attribute": "src",
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
            "image": {
                "type": "boolean",
                "attribute": "image",
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
//# sourceMappingURL=std-card-button.js.map
