import { h } from "@stencil/core";
export class StdDownloadDropdown {
    constructor() {
        this.optionsList = [];
        this.label = '';
        this.size = '';
        this.isLoadingButton = false;
        this.isOpen = false;
        this.setValueRadioButton = '';
        this.canDisableDownloadButton = true;
        this.isModalOpen = false;
    }
    onClickOpenModal() {
        if (this.isOpen) {
            this.isOpen = !this.isOpen;
            return;
        }
        this.isModalOpen = !this.isModalOpen;
        if (!this.isModalOpen) {
            this.setValueRadioButton = '';
            this.canDisableDownloadButton = true;
        }
    }
    onClickShowOptions() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.setValueRadioButton = '';
            this.canDisableDownloadButton = true;
        }
    }
    onclickDownloadFile() {
        this.downloadSelected.emit(this.setValueRadioButton);
    }
    onClickRadioButton(event, disabled) {
        if (disabled)
            return;
        this.setValueRadioButton = event;
        this.canDisableDownloadButton = false;
    }
    render() {
        return (h("div", { key: '89ee096c43be49c66be36faceecc9c339533c2dc', class: "flex flex-col gap-1" }, h("div", { key: '786cb855f8792d5403c3e52d81ea29831a3537a4', class: {
                'relative css-select css-collapse js-collapse w-full bg-white rounded-[32px] shadow-[0_4px_10px_#A3A3A366]': true,
                'border-2 border-[#127277]': this.isOpen,
                'border border-white': !this.isOpen
            } }, h("button", { key: '8d06dc2c67ab9a2f179086fa97713f3c3aaeebec', onClick: () => this.onClickShowOptions(), type: "button", class: "css-collapse-header js-collapse-header inline-flex w-full items-center justify-between px-[11px] py-[4px] text-base text-alternative rounded-lg font-bold gap-1 hidden lg:inline-flex" }, h("i", { key: '61aa1195b13f4e4f8727afbf4085a3ee48de4adc', class: "text-alternative font-bold text-lg icon-download" }), h("span", { key: '62ec29fc91e856d28b06ff01ebd2e50c5663ab30', class: "text-ellipsis whitespace-nowrap overflow-hidden text-sm" }, this.label), h("i", { key: '3008f27585b6a323c9a9e244f006435942f8d13f', class: "icon-chevron-down text-alternative text-2xl leading-none" })), h("button", { key: 'ca058635c479ae296d67902a7ef620fb6a4a1e93', onClick: () => this.onClickOpenModal(), type: "button", class: "inline-flex w-full items-center justify-between px-[11px] py-[4px] text-base text-alternative rounded-lg font-bold inline-flex lg:hidden gap-1", "data-modal": "modal-options-download" }, h("i", { key: '704c8e8210b20e0a134759cca056db3e7c93c850', class: "text-alternative font-bold text-lg icon-download text-sm" }), h("span", { key: '109e7f52455f66f95546a6133d51002361aaa126', class: "text-ellipsis whitespace-nowrap overflow-hidden" }, this.label), h("i", { key: '5a769e2d9ecb9a0e01a4b7102aab11f0936d381a', class: "icon-chevron-down text-alternative text-2xl leading-none" })), h("div", { key: '50e7dfe02316bca0c6b9e53bf8a702e3e5c90dee' }, this.isOpen && (h("div", { key: '37f715bc115d40315f05861ecfbb90cce8d95ce2', style: { top: '45px' }, class: "css-collapse-body js-collapse-body flex-col right-[-1px] bg-white absolute z-10 shadow-modal rounded-lg overflow-y-auto max-h-[300px]" }, h("ul", { key: '61b55bf63dfc28b0262287781852c9245a113ac1', class: "flex flex-col justify-end gap-4 lg:gap-2 lg:p-2 h-full" }, this.optionsList.map(option => (h("li", { class: {
                'border rounded flex justify-between p-4 border-2 transition-all': true,
                'border-[#127277] bg-alternative-light ': this.setValueRadioButton === option.value,
                'border-border-disabled': this.setValueRadioButton !== option.value,
                'bg-disabledselect border rounded-lg border-border-disabled': option.disabled === true,
                'w-[232px]': this.size === 'm'
            } }, h("label", { class: "flex gap-2 justify-between w-full itemRadioCheck" }, h("span", { class: {
                'text-left': true,
                'w-[252px]': this.size === 'l',
                'w-[110px]': this.size === 's',
                'text-dark/[0.23]': option.disabled === true
            } }, option.label), h("input", { class: {
                'w-6 h-6 rounded-full outline-0 checked:bg-[length:13px] checked:border-[2px] text-alternative border-border-default checked:text-white checked:bg-radio-checked checked:border-alternative checked:hover:border-alternative false': true,
                'text-dark/[0.06] bg-dark/[0.06]': option.disabled === true
            }, type: "radio", name: "typeFile", disabled: option.disabled, onClick: () => this.onClickRadioButton(option.value, option.disabled) }))))), h("std-button", { key: '97313f6e69d032ca3baf1ce40e61487f76140555', size: "s", class: "my-2 !w-full", "icon-position": "left", label: "Descargar", disabled: this.canDisableDownloadButton, loading: this.isLoadingButton, onClick: () => this.onclickDownloadFile(), type: "primary" }))))), h("std-modal", { key: 'dec633161af011d5df33bb90d75b514654ae98e6', size: "m", show: this.isModalOpen, onIconClick: () => this.onClickOpenModal() }, h("div", { key: 'bfbdffebfad77dda77177eb9345cd6cb6a4d5615', class: "flex flex-col gap-4 w-full text-center" }, h("div", { key: '29914788dcdcd832a12756d6ee9574519f6f3781', class: "flex flex-col gap-6" }, h("h2", { key: '1dadb636c0d371e826f20570aaed7bf171bb2dbb', class: "font-bold text-2xl" }, "Descargar"), h("ul", { key: 'f88458f8a9a60b6aa96aabc8db9bc1ced90bbbee', class: "flex flex-col  justify-end gap-4 lg:gap-2 lg:p-2 h-full" }, this.optionsList.map(option => (h("li", { class: {
                'border rounded flex justify-between p-4 border-2 transition-all': true,
                'border-[#127277] bg-alternative-light ': this.setValueRadioButton === option.value,
                'border-border-disabled': this.setValueRadioButton !== option.value,
                'bg-disabledselect border rounded-lg border-border-disabled': option.disabled === true
            } }, h("label", { class: "flex gap-2 justify-between w-full" }, h("span", { class: {
                'w-[110px] text-left': true,
                'text-dark/[0.23]': option.disabled === true
            } }, option.label), h("input", { class: {
                'w-6 h-6 rounded-full outline-0 checked:bg-[length:13px] checked:border-[2px] text-alternative border-border-default checked:text-white checked:bg-radio-checked checked:border-alternative checked:hover:border-alternative false': true,
                'text-dark/[0.06] bg-dark/[0.06]': option.disabled === true
            }, type: "radio", name: "typeFile", disabled: option.disabled, onClick: () => this.onClickRadioButton(option.value, option.disabled) })))))))), h("div", { key: '7028a1043f3cbd4133bd562d01db1ce1303bff0a', slot: "footer", class: "w-full" }, h("std-button", { key: '78bf1b1c0acfbd37ec73d61a089fe7541473b1b0', size: "s", class: "my-2 !w-full", "icon-position": "left", label: "Descargar", disabled: this.canDisableDownloadButton, loading: this.isLoadingButton, onClick: () => this.onclickDownloadFile(), type: "primary" }))))));
    }
    static get is() { return "std-download-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-download-dropdown.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-download-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "optionsList": {
                "type": "unknown",
                "attribute": "options-list",
                "mutable": false,
                "complexType": {
                    "original": "{ label: string; value: string; disabled: boolean }[]",
                    "resolved": "{ label: string; value: string; disabled: boolean; }[]",
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
                "defaultValue": "[]"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
            "isLoadingButton": {
                "type": "boolean",
                "attribute": "is-loading-button",
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
            "isOpen": {},
            "setValueRadioButton": {},
            "canDisableDownloadButton": {},
            "isModalOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "downloadSelected",
                "name": "downloadSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=std-download-dropdown.js.map
