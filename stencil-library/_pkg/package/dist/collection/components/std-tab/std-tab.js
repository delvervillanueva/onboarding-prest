import { h } from "@stencil/core";
export class StdTab {
    constructor() {
        this.type = '';
        this.bgStyle = '';
        this.activeStyle = '';
        this.internalItems = [];
    }
    componentWillLoad() {
        this.parseOptions();
    }
    parseOptions() {
        let finalItems = [];
        if (!this.items)
            return;
        if (typeof this.items === 'string') {
            finalItems = JSON.parse(this.items);
        }
        else {
            finalItems = this.items;
        }
        this.internalItems = finalItems;
    }
    render() {
        const typeClassesTab = {
            primary: 'css-tab',
            secondary: 'css-tab--simple'
        }[this.type];
        const tabClasses = [typeClassesTab].join(' ').trim().replace(/\s+/g, ' ');
        // Header //
        const typeClasses = {
            primary: `inline-flex items-center gap-4 p-1 rounded-xl ${this.bgStyle || 'bg-alternative-light'}`,
            secondary: 'flex items-center gap-4 border-b border-alternative-medium'
        }[this.type];
        const tabHeaderClasses = [typeClasses].join(' ').trim().replace(/\s+/g, ' ');
        const buttonTypeClasses = {
            primary: ' px-8',
            secondary: 'px-2'
        }[this.type];
        const buttonClasses = ['css-tab-button  h-auto py-2 lg:py-3 text-base text-dark', buttonTypeClasses].join(' ').trim().replace(/\s+/g, ' ');
        const onChangeActive = (key) => {
            if (this.tabKey === key)
                return;
            this.tabKey = key;
            this.itemSelected.emit({ selectedKey: key });
        };
        return (h("div", { class: tabClasses }, h("ul", { class: tabHeaderClasses }, this.internalItems.map(item => (h("li", null, h("button", { onClick: () => onChangeActive(String(item.key)), class: `${buttonClasses} ${String(this.tabKey) === String(item.key)
                ? `is-active ${this.activeStyle || ''}`
                : ''}`, disabled: item.disabled }, item.label))))), h("div", { class: "pt-4" }, h("slot", null))));
    }
    static get is() { return "std-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-tab.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-tab.css"]
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
                "defaultValue": "''"
            },
            "bgStyle": {
                "type": "string",
                "attribute": "bg-style",
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
            "activeStyle": {
                "type": "string",
                "attribute": "active-style",
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
            "items": {
                "type": "any",
                "attribute": "items",
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
            "tabKey": {
                "type": "string",
                "attribute": "tab-key",
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
            }
        };
    }
    static get states() {
        return {
            "internalItems": {}
        };
    }
    static get events() {
        return [{
                "method": "itemSelected",
                "name": "itemSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ selectedKey: string }",
                    "resolved": "{ selectedKey: string; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "parseOptions"
            }];
    }
}
//# sourceMappingURL=std-tab.js.map
