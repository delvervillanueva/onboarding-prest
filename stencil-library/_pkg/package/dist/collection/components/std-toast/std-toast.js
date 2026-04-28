import { h } from "@stencil/core";
export class StdToastComponent {
    constructor() {
        this.type = 'toast';
        this.hiddenClose = false;
    }
    onCloseToast() {
        this.close.emit();
    }
    render() {
        const statusClasses = {
            'success': 'border-success bg-success-light',
            'warning': 'border-warning bg-warning-light',
            'error': 'border-error bg-error-light',
            'info': 'border-info bg-info-light',
            'warning-light': 'shadow-button bg-white'
        }[this.status];
        const typeClasses = {
            toast: 'border',
            alert: 'p-6'
        }[this.type];
        const toastClasses = ['flex gap-2 p-4 rounded-lg', statusClasses, typeClasses, this.classes].join(' ').trim().replace(/\s+/g, ' ');
        const iconClasses = {
            'success': 'leading-none text-success bg-toast-success h-6 w-6',
            'warning': 'leading-none bg-toast-warning h-6 w-6',
            'error': 'leading-none text-error bg-toast-error h-6 w-6',
            'info': 'leading-none text-info bg-toast-info h-6 w-6',
            'warning-light': 'text-2xl leading-none text-info icon-alert-2'
        }[this.status];
        return (h("div", { key: 'f1647e0d7d193c82b623248131e4030ac4b07ec8', class: toastClasses }, h("div", { key: 'e8493cde9ec8ecf4cbb5884a587c92cdd78f1472', class: "shrink-0 flex" }, h("i", { key: '329447a51f7e2232798b70fb9b7685f961965e6f', class: iconClasses })), h("div", { key: '1aa9a2451be8568eae6d2f06fcb43a9276e7e40d', class: "flex-1 text-sm" }, h("slot", { key: '5938b438dc85459fa559c90d5689724ced57a05d' })), !this.hiddenClose && (h("div", { key: 'e4d94ebfec068126ad1e6c455349a7d0ef0b68b9', class: "shrink-0" }, h("button", { key: '025b3615151ef2b9403dd5dde8defb4e64d4b930', onClick: () => this.onCloseToast(), class: "flex items-center" }, h("i", { key: '953ceb52308082aa50ee4ac5c3a8250dc5b5073a', class: "icon-close text-2xl leading-none" }))))));
    }
    static get is() { return "std-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-toast.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-toast.css"]
        };
    }
    static get properties() {
        return {
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
                "defaultValue": "'toast'"
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
            "hiddenClose": {
                "type": "boolean",
                "attribute": "hidden-close",
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
    static get events() {
        return [{
                "method": "close",
                "name": "close",
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
//# sourceMappingURL=std-toast.js.map
