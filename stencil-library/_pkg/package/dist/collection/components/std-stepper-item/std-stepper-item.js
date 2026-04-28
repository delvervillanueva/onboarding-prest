import { h } from "@stencil/core";
export class StdStepperItem {
    constructor() {
        this.status = 'incomplete';
        this.isClickable = true;
        this.classes = 'lg:!justify-start lg:text-center';
    }
    componentWillLoad() {
        this.steps = this.el.parentElement.querySelectorAll('[step]');
    }
    get isFirsStep() {
        return Number(this.step) === 1;
    }
    get isLastStep() {
        const stepsArray = Array.from(this.steps);
        return Number(this.step) === stepsArray.length;
    }
    render() {
        const statusClasses = {
            incomplete: 'bg-white border-alternative-medium',
            complete: 'bg-alternative text-white border-transparent',
            'complete-error': 'bg-white text-error border-error',
            active: 'bg-primary text-white border-transparent',
            disabled: 'bg-dark/[0.06] text-dark/[0.23] border-border-disabled',
        }[this.status];
        const stepClasses = [
            'shrink-0 flex justify-center items-center w-8 h-8 font-bold rounded-full border-2 ',
            statusClasses,
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const stepItemClasses = [
            'relative flex lg:flex-col lg:items-center lg:justify-center gap-3 lg:gap-2 w-full group',
            this.classes,
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const labelClasses = [
            'pt-1 lg:pt-0',
            this.status === 'active' ? 'font-bold' : 'font-normal',
        ]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
        const beforelineStatusClasses = {
            incomplete: 'bg-alternative-medium',
            complete: 'bg-alternative',
            'complete-error': 'bg-error',
            active: 'bg-alternative',
            disabled: 'bg-alternative-medium',
        }[this.status];
        const afterlineStatusClasses = {
            incomplete: 'bg-alternative-medium',
            complete: 'bg-alternative',
            'complete-error': 'bg-error',
            active: 'bg-alternative-medium',
            disabled: `bg-alternative-medium `,
        }[this.status];
        return (h("li", { key: '1752f4c7c8f8db3b229b1bf80987438dd3c97356', class: stepItemClasses }, h("div", { key: '244462233ace8df1f63c915c43198dd9c1b891a5', class: "flex flex-col lg:flex-row items-center gap-1 lg:w-full" }, h("span", { key: '939da469ca78cf0ae26e750eea7a70155d16879a', class: [
                'w-full h-0.5 hidden lg:block ',
                this.isFirsStep ? '  lg:opacity-0 ' : '',
                beforelineStatusClasses,
            ]
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ') }), h("button", { key: 'fdb6c14e59295f7c7cb05d3b50ac599aa9db573d', class: stepClasses, innerHTML: this.status === 'complete' || this.status === 'complete-error'
                ? '<i class="icon-checkmark-2px text-xl leading-none"></i>'
                : `${this.step}` }), h("span", { key: '5fff307b126ccfad30634d1a9fe14b30ced9a3bd', class: [
                'block w-0.5 lg:w-full h-4 lg:h-0.5   ',
                this.isLastStep ? ' hidden lg:block lg:opacity-0 ' : '',
                afterlineStatusClasses,
            ]
                .join(' ')
                .trim()
                .replace(/\s+/g, ' ') })), this.label && h("span", { key: 'f4d04fdd8efb522e6980c86a40e4f382afe3601c', class: labelClasses }, this.label)));
    }
    static get is() { return "std-stepper-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-stepper-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-stepper-item.css"]
        };
    }
    static get properties() {
        return {
            "step": {
                "type": "string",
                "attribute": "step",
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
            "status": {
                "type": "string",
                "attribute": "status",
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
                "defaultValue": "'incomplete'"
            },
            "isClickable": {
                "type": "boolean",
                "attribute": "is-clickable",
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
                "defaultValue": "true"
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
                "reflect": false,
                "defaultValue": "'lg:!justify-start lg:text-center'"
            }
        };
    }
    static get states() {
        return {
            "steps": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-stepper-item.js.map
