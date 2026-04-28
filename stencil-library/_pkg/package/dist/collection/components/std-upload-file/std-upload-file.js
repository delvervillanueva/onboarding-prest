import { h } from "@stencil/core";
export class StdUploadFile {
    constructor() {
        this.isDragging = false;
        this.messageUpload = 'Los archivos no deben exceder 8 MB y sólo se admiten formatos txt.';
        this.selectedFiles = null;
        this.validationMode = 'extension';
        this.limit = null;
        this.accept = [];
        this.multiple = false;
        this.limitName = 50;
        this.showDetail = false;
        this.headerValidation = false;
        this.signsMap = {
            jpg: [0xff, 0xd8, 0xff],
            png: [0x89, 0x50, 0x4e, 0x47],
            pdf: [0x25, 0x50, 0x44, 0x46],
            docx: [0x50, 0x4b, 0x03, 0x04],
            bmp: [0x42, 0x4d],
            mp3: [0x49, 0x44, 0x33]
        };
    }
    sanitizer(filename) {
        let decoded = '';
        try {
            decoded = decodeURIComponent(filename);
        }
        catch (error) {
            decoded = filename;
        }
        decoded.normalize('NFC');
        decoded = decoded.replace(/[^\w.\-]/g, '');
        let parts = decoded.split('.');
        const filenameshort = parts[0].slice(0, this.limitName);
        decoded = parts.length > 1 ? filenameshort + '.' + parts[parts.length - 1] : filenameshort;
        return decoded;
    }
    async checkFileHeaders(file, fileExt) {
        const distincMap = structuredClone(this.signsMap);
        delete distincMap[fileExt];
        try {
            const arrayBuffer = await file.slice(0, 4).arrayBuffer();
            const bytes = new Uint8Array(arrayBuffer);
            for (const kl of Object.keys(distincMap)) {
                const validateBytes = distincMap[kl].every((e, i) => e === bytes[i]);
                if (validateBytes) {
                    return true; // file forbidden
                }
            }
            return false;
        }
        catch (error) {
            console.error(error);
            return true; // if has error reject process
        }
    }
    async validateFile(file) {
        var _a;
        const errors = [];
        this.newFile = file;
        if (!file) {
            errors.push('INVALID_FILE');
            return errors;
        }
        const fileExtension = ((_a = file.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        const nameFileWithoutExtension = file.name.split('.').slice(0, -1).join('.');
        // validate file headers if is a file genuine
        if (this.headerValidation) {
            const isCorrupted = await this.checkFileHeaders(file, fileExtension);
            if (isCorrupted) {
                errors.push('INVALID_FILE');
            }
        }
        if (this.fileNamePattern && !new RegExp(this.fileNamePattern).test(nameFileWithoutExtension)) {
            errors.push('INVALID_FILENAME');
        }
        if (this.accept.length > 0 && ['extension', 'both'].includes(this.validationMode) && (!fileExtension || !this.accept.includes(`.${fileExtension}`))) {
            errors.push('INVALID_EXTENSION');
        }
        if (this.accept.length > 0 && ['mimeType', 'both'].includes(this.validationMode) && !this.accept.includes(file.type)) {
            errors.push('INVALID_TYPE');
        }
        if (this.limit && file.size > this.limit) {
            errors.push('INVALID_SIZE');
        }
        // rename filename
        // mandatory for security
        if (errors.length === 0) {
            const fileName = this.sanitizer(file.name || '');
            const blob = file.slice(0, file.size, file.type);
            this.newFile = new File([blob], fileName, { type: file.type });
        }
        return errors;
    }
    async processFiles(files, source) {
        const fileArray = Array.from(files);
        const data = await Promise.all(fileArray.map(async (file) => {
            const errors = await this.validateFile(file);
            return { file: errors.length > 0 ? null : this.newFile, errors };
        }));
        this.fileSelected.emit({ data, source });
        this.selectedFiles = data
            .filter(entry => entry.errors.length === 0)
            .map(entry => (entry.file ? { name: entry.file.name, size: entry.file.size } : null))
            .filter(Boolean);
        this.inputFileElement.value = null;
    }
    handleFileInput(event) {
        const files = event.target.files;
        if (files && files.length > 0 && this.status !== 'disabled') {
            this.processFiles(files, 'input');
        }
    }
    handleDrop(event) {
        var _a;
        event.preventDefault();
        this.isDragging = false;
        const files = ((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) || [];
        if (files && files.length > 0 && this.status !== 'disabled') {
            this.processFiles(files, 'drop');
        }
    }
    handleDragOver(event) {
        if (this.status === 'disabled')
            return;
        event.preventDefault();
        this.isDragging = true;
    }
    handleDragLeave() {
        this.isDragging = false;
    }
    invokeInput() {
        if (this.status === 'disabled')
            return;
        this.inputFileElement.click();
    }
    render() {
        const statusClasses = {
            disabled: 'disabled'
        }[this.status];
        const uploadClasses = ['css-upload-file', statusClasses, this.classes].join(' ').trim().replace(/\s+/g, ' ');
        return (h("div", { key: 'b9eae23a17bd6079fe411b99cad4362b2273aecf', class: uploadClasses }, h("div", { key: '1dfb4abccba965da6ba7da90efee096da66e1bde', class: "hidden lg:flex flex-col gap-2" }, h("div", { key: 'b5ebdd27f392aca357b57f297f7f29485287ef6c', class: `border border-dashed rounded-lg p-6 flex flex-col gap-2 justify-center items-center ${this.isDragging ? 'border-alternative' : 'border-border-default'}`, onDrop: event => this.handleDrop(event), onDragOver: event => this.handleDragOver(event), onDragLeave: () => this.handleDragLeave() }, h("label", { key: '8b7052ef04aafb3e9c9f40deeb69827456e95156', class: `bg-primary text-white rounded-full flex justify-center items-center p-3  uploadFile-button ${this.status === 'disabled' ? 'cursor-default' : 'cursor-pointer'}` }, h("i", { key: '78f1bf0d2ea7ce6d8b6ad12ab7ab442c782d0c73', class: "icon-attach-document text-2xl leading-none uploadFile-button-icon" }), h("input", { key: '99c5289c3686041bb6629a2df3ac64df4d044c61', ref: el => (this.inputFileElement = el), type: "file", disabled: this.status === 'disabled', accept: this.accept.join(','), multiple: this.multiple, class: "hidden", onChange: event => this.handleFileInput(event) })), h("p", { key: 'd31be4f6c4ef0d6d6810bf713252d63a6a7cb338', class: "text-dark text-sm uploadFile-text" }, "Seleccionar o arrastrar el archivo para cargar"), this.showDetail && this.selectedFiles && this.selectedFiles.length > 0 && (h("div", { key: '7c48354061ae6b8bee8d5589301cbfd76a4677f0', class: "text-dark text-sm mt-2" }, this.selectedFiles.map(file => (h("div", { key: file.name }, h("p", null, "Archivo: ", file.name), h("p", null, "Tama\u00F1o: ", (file.size / 1024).toFixed(2), " KB"))))))), h("p", { key: '59143f84214d1d357f9409a749d9853421318798', class: "text-dark text-xs uploadFile-text" }, this.messageUpload)), h("div", { key: '3e3480ae1b3acd989073a0a61ba5d5484b4ca3b3', class: "flex lg:hidden flex-col gap-4" }, h("div", { key: '0ae166c2925c00452aaf5b72880c161131e5bcab', class: "flex flex-col gap-2" }, h("h4", { key: '7a49b9e773333674c13546f21d80171c6a387382', class: "text-lg font-bold" }, "Subir archivos"), h("p", { key: '06adbf65776d0a23cefc2c9937c9729901ac5c4d', class: `text-sm ${this.status === 'disabled' ? 'text-labeldisabled' : ''}` }, this.messageUpload)), h("div", { key: '715dce3b49a0f8d98f4ae11f0d63a046ddb0d995', class: "w-36" }, h("std-button", { key: 'aaab4a05d8962e18e027b7f74ee7594ef875fc8b', disabled: this.status === 'disabled', label: "Subir", onClick: () => this.invokeInput() })))));
    }
    static get is() { return "std-upload-file"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-upload-file.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-upload-file.css"]
        };
    }
    static get properties() {
        return {
            "messageUpload": {
                "type": "string",
                "attribute": "message-upload",
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
                "defaultValue": "'Los archivos no deben exceder 8 MB y s\u00F3lo se admiten formatos txt.'"
            },
            "selectedFiles": {
                "type": "unknown",
                "attribute": "selected-files",
                "mutable": true,
                "complexType": {
                    "original": "{ name: string; size: number }[] | null",
                    "resolved": "{ name: string; size: number; }[]",
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
                "defaultValue": "null"
            },
            "validationMode": {
                "type": "string",
                "attribute": "validation-mode",
                "mutable": false,
                "complexType": {
                    "original": "'mimeType' | 'extension' | 'both'",
                    "resolved": "\"both\" | \"extension\" | \"mimeType\"",
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
                "defaultValue": "'extension'"
            },
            "limit": {
                "type": "number",
                "attribute": "limit",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
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
                "defaultValue": "null"
            },
            "accept": {
                "type": "unknown",
                "attribute": "accept",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
            "multiple": {
                "type": "boolean",
                "attribute": "multiple",
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
            },
            "limitName": {
                "type": "number",
                "attribute": "limit-name",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "50"
            },
            "showDetail": {
                "type": "boolean",
                "attribute": "show-detail",
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
            },
            "fileNamePattern": {
                "type": "string",
                "attribute": "file-name-pattern",
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
            "headerValidation": {
                "type": "boolean",
                "attribute": "header-validation",
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
            "isDragging": {},
            "newFile": {},
            "signsMap": {}
        };
    }
    static get events() {
        return [{
                "method": "fileSelected",
                "name": "fileSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ data: { file: File; errors: string[] }[]; source: string }",
                    "resolved": "{ data: { file: File; errors: string[]; }[]; source: string; }",
                    "references": {
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=std-upload-file.js.map
