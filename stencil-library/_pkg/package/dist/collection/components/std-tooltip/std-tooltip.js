import { h } from "@stencil/core";
export class StdTooltipComponent {
    constructor() {
        this.position = 'top-center';
    }
    render() {
        const positionClasses = {
            'top-auto': 'bottom-[calc(100%+1rem)] right-0',
            'top-center': 'bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2',
            'top-left': 'bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2 lg:-left-10 lg:translate-x-0',
            'top-right': 'bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2 lg:left-auto lg:-right-10 lg:translate-x-0',
            'left': 'bottom-[calc(100%+1rem)] left-0',
            'right': 'bottom-[calc(100%+1rem)] left-1/2 -translate-x-1/2 lg:left-[calc(100%+1rem)] lg:bottom-auto lg:-top-4 lg:translate-x-0',
            'bottom-center': 'top-[calc(100%+1rem)] left-1/2 -translate-x-1/2'
        }[this.position];
        const tooltipClasses = [' absolute w-72 bg-white rounded-lg p-6 shadow-modal group-hover:block z-10 css-tooltip', positionClasses, this.classes, this.classesTooltip]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const tooltipArrowPositionClasses = {
            'top-auto': '-bottom-2 right-[10px]',
            'top-center': '-bottom-2 left-1/2 -translate-x-1/2',
            'top-left': '-bottom-2 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0',
            'top-right': '-bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0',
            'left': '-bottom-2 left-1/3',
            'right': '-bottom-2 left-1/2 -translate-x-1/2 lg:bottom-auto lg:-left-2 lg:top-8 lg:translate-x-0 css-tooltip-arrow',
            'bottom-center': '-top-2 left-1/2 -translate-x-1/2'
        }[this.position];
        return (h("div", { key: '0fc138b425f66cd9f0f80fa3e4691486e0540e35', class: this.classesHeader }, h("slot", { key: '0fd0a79e49aff6c15158f6cce7a9e2ae44b09044', name: "html" }), h("div", { key: 'a5574adc6ccd702dc60b3c6c49a241c48433984d', class: this.classesContent }, h("div", { key: '77b4834af0d1b66cf88e299d4226b70a631e4123', class: tooltipClasses }, h("div", { key: '840d55b58590f3786aa0d1bb77734ea3696dfb88', class: ['absolute w-4 h-4 bg-white rotate-45', tooltipArrowPositionClasses].join(' ').trim().replace(/\s+/g, ' ') }), h("div", { key: 'd213fb8e47f1adc76586b0edb6ee73e58481a1c5', class: "relative" }, this.tooltipTitle && h("p", { key: '971a83a3215e1eb4503e77bf0e7996cc220884af', class: "font-bold text-lg mb-2 css-tooltips-title" }, this.tooltipTitle, " "), h("slot", { key: 'fb97c84553d7444c5d564fcc15bc58d159a763b8' }))))));
    }
    static get is() { return "std-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-tooltip.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "attribute": "position",
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
                "defaultValue": "'top-center'"
            },
            "classesTooltip": {
                "type": "string",
                "attribute": "classes-tooltip",
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
            "classesContent": {
                "type": "string",
                "attribute": "classes-content",
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
            "classesHeader": {
                "type": "string",
                "attribute": "classes-header",
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
            "tooltipTitle": {
                "type": "string",
                "attribute": "tooltip-title",
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
}
//# sourceMappingURL=std-tooltip.js.map
