import { h } from "@stencil/core";
export class StdPasswordValidationComponent {
    validatePassword(newValue) {
        this.hasLowercase = /(?=.*[a-z])/.test(newValue);
        this.hasUppercase = /(?=.*[A-Z])/.test(newValue);
        this.hasNumber = /(?=.*\d)/.test(newValue);
        this.isValidLength = /.{8,}/.test(newValue);
        this.completed = +this.hasLowercase + +this.hasUppercase + +this.hasNumber + +this.isValidLength;
        this.status.emit(this.completed);
    }
    render() {
        const _ = this.completed;
        const passwordSetted = (this.password || '').length == 8;
        const crossedText = 'text-soft line-through';
        const _bg = ['bg-alternative-medium', 'bg-secondary-yellow', 'bg-green-medium', 'bg-success'];
        const bullet = [
            'icon-close text-2xl leading-none text-error',
            'block w-2 h-2 rounded-full border border-border-default',
            'icon-checkmark-2px text-2xl leading-none text-success'
        ];
        return (h("div", { key: '6fb5186b4b930fe8734ce6f59627626f9be812bd', class: "flex flex-col gap-4" }, h("h4", { key: 'de24f3ba497f509bb133c89910cfa879ac987fa4', class: "text-sm font-sans font-bold" }, "Tu contrase\u00F1a debe tener:"), h("ul", { key: 'd975194c33ac5186152e31556b4a501f63f0519d', class: "flex gap-2" }, h("li", { key: '9845e1ea8b3d9e7c18abce95882397589b2fbf00', class: `w-full h-0.5 ${_ == 4 ? _bg[3] : _ >= 1 ? _bg[1] : _bg[0]}` }), h("li", { key: '4116788e9be6e0267f58209f4c03037ebed7c3db', class: `w-full h-0.5 ${_ == 4 ? _bg[3] : _ >= 2 ? _bg[1] : _bg[0]}` }), h("li", { key: 'd9ebd7bb2fb0e0bf3a4aab16250afbf45d1e9ac8', class: `w-full h-0.5 ${_ == 4 ? _bg[3] : _ >= 3 ? _bg[2] : _bg[0]}` }), h("li", { key: '751b46036bcb26aa853236583276358cee453d0c', class: `w-full h-0.5 ${_ == 4 ? _bg[3] : _ >= 4 ? _bg[3] : _bg[0]}` })), h("ul", { key: '773412fd2092e0e702e5fec9a0783bccc619c7f9', class: "text-sm" }, h("li", { key: '59b29b5d30191529ee8d26a041335b8d026d5754', class: "flex items-center" }, h("span", { key: '20ee61c87125821fa9c0c7fa65f6dfce9c6c81ff', class: "flex justify-center items-center w-6 h-6 rounded-full bg-white" }, h("i", { key: '7d8a111e8a9d2417672e3bb129c53dfd156f699a', class: passwordSetted && !this.hasLowercase ? bullet[0] : this.hasLowercase ? bullet[2] : bullet[1] })), h("span", { key: '2ce080ad3c3aa4ac6bc49a65b4aad2628be24a5b', class: this.hasLowercase && crossedText }, "Al menos una min\u00FAscula")), h("li", { key: 'cf0432cc0c2588a7f1126b699e85a98189a5cc7a', class: "flex items-center" }, h("span", { key: 'faa0f08a51f91b40f5f82849ef0cb483ae2e2f85', class: "flex justify-center items-center w-6 h-6 rounded-full bg-white" }, h("i", { key: 'b96fb7c1c4142d1cea2efe1eac37a52c050ba9f7', class: passwordSetted && !this.hasUppercase ? bullet[0] : this.hasUppercase ? bullet[2] : bullet[1] })), h("span", { key: 'cbb70d0a91f13ad6b2b6cad2daa39e053fb83cfc', class: this.hasUppercase && crossedText }, "Al menos una may\u00FAscula")), h("li", { key: '3d599db44119f33e29e4349fcf6219b5967659ae', class: "flex items-center" }, h("span", { key: 'fb708dd6343d9f2b249826cd7e3460e989ae62eb', class: "flex justify-center items-center w-6 h-6 rounded-full bg-white" }, h("i", { key: '9942f12681cdd2291a173de239fa6fd64ca99395', class: passwordSetted && !this.hasNumber ? bullet[0] : this.hasNumber ? bullet[2] : bullet[1] })), h("span", { key: '87e86a3085b72ff65dc72c68b6aa86a3d1e6c87d', class: this.hasNumber && crossedText }, "Al menos un n\u00FAmero")), h("li", { key: 'df67141f046bd5b7740f572953447258260158cc', class: "flex items-center" }, h("span", { key: '805964f5c23b02da2ccc530d0cfadc5cdcfd76c4', class: "flex justify-center items-center w-6 h-6 rounded-full bg-white" }, h("i", { key: 'c6479bdeb3c9193e88661adb68cba49403a3cbd7', class: passwordSetted && !this.isValidLength ? bullet[0] : this.isValidLength ? bullet[2] : bullet[1] })), h("span", { key: '8ee57c952de1668db35db1dfb0ed6eed967c3e3f', class: this.isValidLength && crossedText }, "8 caracteres")))));
    }
    static get is() { return "std-password-validation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-password-validation.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-password-validation.css"]
        };
    }
    static get properties() {
        return {
            "password": {
                "type": "string",
                "attribute": "password",
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
            "hasLowercase": {},
            "hasUppercase": {},
            "hasNumber": {},
            "isValidLength": {},
            "completed": {}
        };
    }
    static get events() {
        return [{
                "method": "status",
                "name": "status",
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
    static get watchers() {
        return [{
                "propName": "password",
                "methodName": "validatePassword"
            }];
    }
}
//# sourceMappingURL=std-password-validation.js.map
