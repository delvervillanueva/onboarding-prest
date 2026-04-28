import { h } from "@stencil/core";
// Component ui-card-price: Deprecated
export class UiCardPriceComponent {
    render() {
        const cardClasses = ['lg:flex rounded-lg border border-alternative-medium w-full', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'b6ad8edec4612cb4c5002f15f42355d8d6e9910f', class: cardClasses }, h("div", { key: 'f7c0bb0c8fa8760755c21804648c442d159180d6', class: "w-full flex flex-col gap-2 px-4 py-4 lg:py-[22px]" }, h("div", { key: '038daa9227a83f2d9b53a4488ab2c9aad171f535', class: "flex items-center justify-between flex-wrap" }, h("div", { key: 'ccd6d4f0fb7b54bd80a4ac8cd7c127d617ac96a0', class: "flex gap-1" }, h("p", { key: '26923925900b23aa6e8afda1928d3f5dcb265311', class: "text-dark text-sm" }, this.label), this.tooltip && (h("div", { key: 'd507815b662457cbdf0bf676bf84b132b8cdb3a3', class: "group relative flex " }, h("i", { key: '7e72b6ae44ea0698f3b27fa59de6683491ce0605', class: "icon-information-in-a-circle-2px text-primary text-xl leading-none" })))), h("p", { key: '2f183671fa8e3c6eb2faa3774ab7bfc4d6c2ce4f', class: "text-neutral-medium text-base leading-6 font-bold" }, this.result)), h("div", { key: 'eb5b15cf5ffb11b845ae74dabc87972ec3e0a464', class: "border-t border-dashed border-alternative-medium pt-2 flex justify-between items-center flex-wrap" }, h("div", { key: '2848c61bc37a5ca97d536827403b3147ac8fb3d1', class: "flex flex-wrap flex-col lg:flex-row xl:flex-col gap-0.5" }, h("p", { key: '38546948e9d467c35fa2b8c106828d99448e9bbc', class: "text-dark text-xs" }, "Tipo de cambio: "), h("p", { key: 'a8bfe68078c51dc907cf25235a2b4f105ce43a0a', class: "text-dark text-xs font-bold" }, " Office Banking")), h("p", { key: '63ebb177b1b6428ddc8a2e35be246cfc54d2a46b', class: "text-dark font-bold text-lg leading-6 text-right" }, this.total))), this.toggle && (h("div", { key: '3403f203e35aa12f113a94c77af4ce1487ea913d', class: "flex p-4 items-center justify-end lg:justify-center border-t lg:border-l lg:border-t-0 border-alternative-medium h-[43px] lg:h-auto" }, h("std-toggle", { key: 'fc04c59396f446c4d6dbf375241f9528e1b3ce9d', "label-one": "S/", "label-two": "$" })))));
    }
    static get is() { return "ui-card-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-card-price.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-card-price.css"]
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
            "result": {
                "type": "string",
                "attribute": "result",
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
            "total": {
                "type": "string",
                "attribute": "total",
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
            "tooltip": {
                "type": "boolean",
                "attribute": "tooltip",
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
            "textTooltip": {
                "type": "string",
                "attribute": "text-tooltip",
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
            "toggle": {
                "type": "boolean",
                "attribute": "toggle",
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
}
//# sourceMappingURL=ui-card-price.js.map
