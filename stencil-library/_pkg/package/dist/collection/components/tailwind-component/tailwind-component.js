import { h } from "@stencil/core";
export class TailwindComponent {
    render() {
        return [
            h("header", { key: '506aa84ef94d13de3fc347d2fdc18e9fdaca1075', class: "text-gray-600 body-font" }, h("div", { key: '4ce9de16ed2733c38e3c2819e5c93b6ee4aea9f7', class: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" }, h("a", { key: 'fb9fb68fb6d846b31d923bd24255dad38f77f7ad', class: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" }, h("svg", { key: '803cca93c93e2d49001550d170c787293e2e5be0', xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", class: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full", viewBox: "0 0 24 24" }, h("path", { key: '9b35f83e7716b253979dfa376e0a74f6c67d2b1f', d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" })), h("span", { key: '52710a45fe5936e7151ac14babf69a924d634b62', class: "ml-3 text-xl" }, "Tailwind Menu")), h("nav", { key: 'd4fe6bd944c22130f84e18f097946985a9067d01', class: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center" }, h("a", { key: '45bac956851dc071f35d37889adc55a92d54f42e', class: "mr-5 hover:text-gray-900" }, "Primer Link"), h("a", { key: '20a0a7f1c07af0025890503f19d90a49681183f2', class: "mr-5 hover:text-gray-900" }, "Segundo Link"), h("a", { key: 'fc4c551bbf4d0338aa066c26025d1018c722d0a4', class: "mr-5 hover:text-gray-900" }, "Tercer Link"), h("a", { key: '9685eff3b56295d7a518fc1597a0a18a93c08d97', class: "mr-5 hover:text-gray-900" }, "Cuarto Link")), h("button", { key: '40ac0562ec8ea5ab7d29a60c6a6b81fea3173214', class: "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" }, "Button", h("svg", { key: '7236e5e02cd07022d14317e7f9bfc3bbd14efa31', fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", class: "w-4 h-4 ml-1", viewBox: "0 0 24 24" }, h("path", { key: '4d45aa7b3450af25826ee609b5dea97f0c10c06a', d: "M5 12h14M12 5l7 7-7 7" }))))),
            h("div", { key: 'f3ec80ca05b5babb92e7295ffe8db96bd978ea3e', class: "bg-indigo-500 p-6 rounded-md flex justify-center" }, h("h1", { key: '7c1e0b25f90fcac19369e65f807d1ca664345a08', class: "text-white font-sans" }, "This is a Stencil component using Tailwind"))
        ];
    }
    static get is() { return "tailwind-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tailwind-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tailwind-component.css"]
        };
    }
}
//# sourceMappingURL=tailwind-component.js.map
