import { h } from "@stencil/core";
export class StdSmallRoundedProgressComponent {
    componentWillLoad() {
        this.renderStroke();
    }
    renderStroke() {
        const radius = 9;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - +this.progress / 100);
        this.strokeDasharray = circumference.toString();
        this.strokeDashoffset = offset.toString();
    }
    onWatchProgress(newValue) {
        this.progress = newValue;
        this.renderStroke();
    }
    render() {
        return (h("svg", { key: '17596d9935e3008e6c9bf6bbac0317234941feb9', class: "js-small-rounded-progress w-6 h-6", viewBox: "0 0 24 24", fill: "none", "data-progress": "20" }, h("rect", { key: '8c91e3b1cc7a0d21fe39a7ac9a36d1366f35a8f5', x: "3", y: "3", width: "18", height: "18", rx: "9", stroke: "white", "stroke-width": "2" }), h("rect", { key: '0333f576894101a438e612c74d6865404201bdfb', x: "2.9375", y: "2.9375", width: "18", height: "18", rx: "9", stroke: "#CEDEE7", "stroke-width": "0.5" }), h("circle", { key: '7eb94950606f8d84b7d69cd5480a1f5e3f95893e', cx: "11.9375", cy: "12.0625", r: "9", transform: "rotate(-90 11.9375 12.0625)", stroke: "#EC0000", "stroke-dasharray": this.strokeDasharray, "stroke-dashoffset": this.strokeDashoffset, "stroke-width": "2", "stroke-linecap": "round" })));
    }
    static get is() { return "std-small-rounded-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-small-rounded-progress.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-small-rounded-progress.css"]
        };
    }
    static get properties() {
        return {
            "progress": {
                "type": "string",
                "attribute": "progress",
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
            "strokeDasharray": {},
            "strokeDashoffset": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "progress",
                "methodName": "onWatchProgress"
            }];
    }
}
//# sourceMappingURL=std-small-rounded-progress.js.map
