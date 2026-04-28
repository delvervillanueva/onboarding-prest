import { h } from "@stencil/core";
// Component ui-dropdown: Deprecated
export class UiDropDownComponent {
    constructor() {
        this.data = { company: '', fullName: '' };
    }
    toggleCollapse() {
        this.isOpen = !this.isOpen;
    }
    render() {
        const dropdownClasses = ['relative bg-primary py-2 px-4 lg:py-2 lg:px-6 rounded-2xl flex flex-col w-full css-dropdown', this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'a87c212b6330e85a635c1ff1272eab8b6884cbd4', class: dropdownClasses }, h("div", { key: '76b1a04ce92f827701de0113cad63a5b8326d3af', class: `css-collapse css-dropdown js-collapse  ${this.isOpen ? 'is-open' : ''}` }, h("div", { key: '16a5914ced3a10afd17fd0c4e6a0be4fc2f1b848', class: "css-collapse-header flex items-center justify-between js-collapse-header", onClick: () => this.toggleCollapse() }, h("div", { key: '68069abe452712eed88806dc33cd77bcf7d92b33', class: "css-collapse-text" }, h("p", { key: 'e8758454e577fa840b026efaefc7f59c7f66a7c2', class: "text-sm text-white leading-5 font-sans font-semibold hidden lg:block" }, this.data.company || 'Multiplica Perú'), h("p", { key: '0c7a4ba86bc108cf7f3320512d888c1472c343c1', class: "text-white font-bold text-base lg:text-[18px] leading-6" }, this.data.fullName || 'Talent Ready Perú SAC')), h("i", { key: '10c722323c8466370365bb1d6eb192384b38b5b9', class: "icon-chevron-down text-white cursor-pointer text-2xl font-bold" })), h("div", { key: 'ffaa7fbaa9c9d84f782efcbfffd477c667c2ee02', class: "css-collapse-body js-collapse-body hidden w-full pt-4 bg-primary py-2 px-4 lg:pt-5 lg:pb-4 lg:px-3 absolute top-12 left-0 z-10 rounded-br-2xl rounded-bl-2xl" }, h("div", { key: 'bd368315cb5d86ef24704459bf29a482d7dbf686', class: "flex flex-col gap-4 w-full" }, h("std-input", { key: '6ae06f0ce82645eddf40aad7be9723ab2be4d724', type: "search", placeholder: "Buscar empresa" }), h("div", { key: 'b229eae2f39d51bc7ca24ff36efc32b3e93c7ad6', class: "flex flex-col gap-4 overflow-y-auto max-h-[272px] mb-16 p-1" }, h("slot", { key: '5be9c5414171e0b0b01fd4eb7d616790aad3a0a3' }))), h("div", { key: '2ca35ae12a75decb5fffaf7f4f1e274f647c9a67', class: "absolute bottom-[-2px] left-0 w-full bg-alternative-light h-16 p-4 flex justify-center items-center rounded-br-2xl rounded-bl-2xl" }, h("std-button", { key: '352d74f1688abaf8e3ddfac0c293e51fc96669ec', label: "Consultar", size: "s", disabled: true, classes: "w-full" }))))));
    }
    static get is() { return "ui-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-dropdown.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-dropdown.css"]
        };
    }
    static get properties() {
        return {
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
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "DataHeader",
                    "resolved": "DataHeader",
                    "references": {
                        "DataHeader": {
                            "location": "local",
                            "path": "/Users/RPANTOJA/Documents/Development/santander/per-newobw-darcommonsui/src/components/ui-dropdown/ui-dropdown.tsx",
                            "id": "src/components/ui-dropdown/ui-dropdown.tsx::DataHeader"
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
                "defaultValue": "{ company: '', fullName: '' }"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
}
//# sourceMappingURL=ui-dropdown.js.map
