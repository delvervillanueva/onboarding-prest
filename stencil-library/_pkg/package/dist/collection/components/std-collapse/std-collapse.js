import { h } from "@stencil/core";
export class StdCollapseComponent {
    constructor() {
        this.isOverflow = false;
        this.hasContent = false;
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        const body = this.el.shadowRoot.querySelector('.css-collapse-body');
        body.style.maxHeight = this.isOpen ? `${body.scrollHeight}px` : '0px';
    }
    render() {
        const collapseClasses = ['css-collapse js-collapse border-t border-b border-alternative-medium bg-white w-full', this.isOpen ? 'is-open' : '', this.classes]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        return (h("div", { key: '3b83363874abb763de77c1f3930a5ab16a0fd427', class: "pa-0 ma-0" }, this.hasContent && h("slot", { key: '0aa94f76f2f5b7236388b542df767ccdab1a3320' }), !this.hasContent && (h("div", { key: '7de597d49cde7a9cc9c6992ce1da2edf9d968efc', class: collapseClasses }, h("div", { key: '27ee41c64e91dcdeeaf8f628efb12546aa9ce456', class: "css-collapse-header js-collapse-header h-14 py-4 w-full" }, h("div", { key: '74e1d9520a506ad755acf0dacba19436af9fa45f', class: "flex items-center justify-between gap-2 w-full cursor-pointer", onClick: () => this.toggleCollapse() }, h("p", { key: 'b5306a489d08881137db5492a28de03cbe898568', class: "font-bold text-dark whitespace-nowrap" }, this.label), h("div", { key: '1f0703485cb0f3e187dfc377e5a12f1ecca735e8', class: "flex justify-end gap-4" }, this.link && h("std-link", { key: 'cbfb5ed27f5d4ade80f96ce66a2f1f5926d5c19f', label: this.labelLink, disabled: this.disabled }), h("i", { key: '07e01f7b0450ec760f6836cf5b7157238d04148b', class: `icon-chevron-down text-2xl leading-none text-dark  ${this.isOpen ? 'rotate-180' : ''} ` })))), h("div", { key: '23736cff7452d2245cb94e403dce28bc6f5bb428', class: `css-collapse-body js-collapse-body ${this.isOverflow ? ' overflow-visible ' : ' overflow-hidden'}` }, h("slot", { key: '69106019bac4615f7804adfefcf424f037c77795' }))))));
    }
    static get is() { return "std-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-collapse.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-collapse.css"]
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
            "link": {
                "type": "string",
                "attribute": "link",
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
            "labelLink": {
                "type": "string",
                "attribute": "label-link",
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
            "isOverflow": {
                "type": "boolean",
                "attribute": "is-overflow",
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
            "hasContent": {
                "type": "boolean",
                "attribute": "has-content",
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
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-collapse.js.map
