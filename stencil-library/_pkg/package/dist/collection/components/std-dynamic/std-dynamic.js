import { h } from "@stencil/core";
export class MyDynamicAttributes {
    constructor() {
        this.dynamicAttributes = {};
    }
    componentWillLoad() {
        const attributes = this.el.getAttributeNames();
        attributes.forEach(attr => {
            if (!this.isDeclaredProp(attr)) {
                this.dynamicAttributes[attr] = this.el.getAttribute(attr);
            }
        });
    }
    isDeclaredProp(attr) {
        const declaredProps = ['prop1', 'prop2'];
        return declaredProps.includes(attr);
    }
    render() {
        return (h("div", { key: 'd593423bf7c2fc732afecd42e4b97f534504551f' }, h("p", { key: 'e934774001bd2301169cf48c07ba13a880d685c4' }, "Atributos din\u00E1micos:"), h("ul", { key: '07ee3e3ee18fa2b623a1054258ddc1d583f2d6dd' }, Object.keys(this.dynamicAttributes).map(key => (h("li", null, key, ": ", this.dynamicAttributes[key]))))));
    }
    static get is() { return "std-dynamic"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-dynamic.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-dynamic.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=std-dynamic.js.map
