import { h } from "@stencil/core";
export class StdBreadcrumbComponent {
    constructor() {
        this.internalItems = [];
    }
    handleClick(item) {
        if (!(item === null || item === void 0 ? void 0 : item.actionKey))
            return;
        this.itemSelected.emit({ actionKey: item.actionKey });
    }
    componentWillLoad() {
        this.parseOptions();
    }
    parseOptions() {
        let finalItems = this.items;
        if (!this.items)
            return;
        if (typeof this.items === 'string') {
            finalItems = JSON.parse(this.items);
        }
        if (finalItems.some(e => typeof e === 'string')) {
            finalItems = finalItems.map(value => {
                return {
                    label: value
                };
            });
        }
        this.internalItems = finalItems;
    }
    render() {
        const baseClasses = `text-sm text-alternative first:!text-alternative font-bold after:content-['] after:border-solid after:border-r-[3px] after:border-b-[3px] after:-rotate-45 after:p-[3px] after:inline-block last:after:hidden last:text-dark`;
        return (h("div", { key: '2bd4de3fef0d0dc75f1728353fdc06e062e7d3ff' }, h("ol", { key: 'bc5e773a381a00e7d700df76221a8032a3c674fb', class: "flex items-center flex-wrap gap-2" }, this.internalItems.map(item => (h("li", { onClick: () => this.handleClick(item), class: `${baseClasses} ${item.actionKey ? 'cursor-pointer' : 'cursor-default'}` }, `${item.label.trim()} `))))));
    }
    static get is() { return "std-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-breadcrumbs.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-breadcrumbs.css"]
        };
    }
    static get properties() {
        return {
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
                    "original": "{ actionKey: string }",
                    "resolved": "{ actionKey: string; }",
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
//# sourceMappingURL=std-breadcrumbs.js.map
