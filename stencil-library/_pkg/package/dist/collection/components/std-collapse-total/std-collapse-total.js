import { h } from "@stencil/core";
export class StdCollapseTotalComponent {
    toggleCollapse() {
        this.isOpen = !this.isOpen;
        // const body = this.el.shadowRoot.querySelector('.css-collapse-body') as HTMLElement;
        // body.style.maxHeight = this.isOpen ? `${body.scrollHeight}px` : '0px';
    }
    render() {
        var _a;
        const isNegative = (_a = this.total) === null || _a === void 0 ? void 0 : _a.startsWith('-');
        return (h("div", { key: '8cdd48000625b22f77b1b0353685963e8b7fa201', class: `css-collapse rounded-lg border border-alternative-medium bg-white ${this.isOpen ? 'is-open' : ''}` }, h("div", { key: '3429f5bd8abf23da71a3308ed8d0fb7b88cfcea6', class: "css-collapse-header h-14 p-4 lg:pr-16 flex items-center justify-between", onClick: () => this.toggleCollapse() }, h("div", { key: '43d8515905ce1236d31e6bd7feb551ad7465b420', class: "flex items-center gap-2" }, h("i", { key: 'e1a4d8401fede1edfe663f3d396d91ec38730a9c', class: `icon-chevron-down transform transition-transform duration-300 ${this.isOpen ? 'rotate-180' : ''} text-2xl leading-none text-dark` }), h("p", { key: '5cd3908473f13e1fb12ce4ff342c249f154272da', class: "font-bold text-dark whitespace-nowrap" }, this.label)), h("div", { key: '5d91cf6d689651ebf25039824f02c5dbdbeedb4d', class: "flex items-end lg:items-center lg:gap-2 justify-end flex-col-reverse lg:flex-row" }, h("p", { key: 'a2b02302397573a50ff27ae03328a6c4be16ebbd', class: "text-dark text-sm lg:min-w-12" }, this.numberCounts), h("p", { key: '247467b2f7f0d69c6df708e347150ffcf7e13b5c', class: `font-bold text-sm lg:min-w-[130px] text-right ${isNegative ? 'text-error' : ''}` }, this.total))), h("div", { key: 'b17fe85d4af6961a47ce96923fa69d8fac6bce97', class: `css-collapse-body hidden` }, h("slot", { key: 'e6f41a1d01cf39dae1012a0d780390e9643032e9' }))));
    }
    static get is() { return "std-collapse-total"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-collapse-total.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-collapse-total.css"]
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
            "numberCounts": {
                "type": "string",
                "attribute": "number-counts",
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
//# sourceMappingURL=std-collapse-total.js.map
