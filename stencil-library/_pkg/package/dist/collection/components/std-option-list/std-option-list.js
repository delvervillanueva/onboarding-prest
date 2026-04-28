// option-list.tsx
import { h } from "@stencil/core";
export class OptionList {
    constructor() {
        this.items = [];
    }
    handleItemClick(item) {
        this.itemClicked.emit(item);
    }
    render() {
        return (h("ul", { key: 'c5c17d089d324fd347c5afc35f616304f6333619', class: "w-full flex flex-col gap-1 py-1 max-h-[216px] overflow-y-auto" }, this.items.map(item => (h("li", { onClick: () => this.handleItemClick(item), class: [
                'flex justify-between items-center gap-2 rounded hover:bg-alternative-light p-3 transition-all duration-300 cursor-pointer',
                item.active ? 'bg-alternative-light font-bold' : ''
            ]
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ') }, item.label && !item.labelTwo && h("span", { class: "text-base text-dark" }, item.label), item.labelTwo && (h("div", { class: "flex flex-col" }, h("span", { class: "text-lg text-dark font-headline font-bold" }, item.label), h("span", { class: "text-sm text-dark" }, item.labelTwo))), item.active && h("i", { class: "shrink-0 text-2xl leading-none text-alternative icon-checkmark" }))))));
    }
    static get is() { return "std-option-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-option-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-option-list.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "IOptionListItem[]",
                    "resolved": "IOptionListItem[]",
                    "references": {
                        "IOptionListItem": {
                            "location": "local",
                            "path": "/Users/RPANTOJA/Documents/Development/santander/per-newobw-darcommonsui/src/components/std-option-list/std-option-list.tsx",
                            "id": "src/components/std-option-list/std-option-list.tsx::IOptionListItem"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "itemClicked",
                "name": "itemClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IOptionListItem",
                    "resolved": "IOptionListItem",
                    "references": {
                        "IOptionListItem": {
                            "location": "local",
                            "path": "/Users/RPANTOJA/Documents/Development/santander/per-newobw-darcommonsui/src/components/std-option-list/std-option-list.tsx",
                            "id": "src/components/std-option-list/std-option-list.tsx::IOptionListItem"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=std-option-list.js.map
