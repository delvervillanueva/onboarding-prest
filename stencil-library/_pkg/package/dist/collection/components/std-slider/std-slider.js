import { h } from "@stencil/core";
export class StdSliderComponent {
    constructor() {
        this.currentIndex = 0;
        this.startX = 0;
        this.currentX = 0;
        this.slides = [];
        this.isDragging = false;
        this.handleMouseMove = (event) => {
            this.currentX = event.pageX;
            if (!this.isDragging)
                return;
        };
        // T0D0: Seguir agregando el estilo de movimiento
        this.handleMouseUp = () => {
            const movementX = this.currentX - this.startX;
            if (movementX < -50) {
                this.showNextSlide();
            }
            else if (movementX > 50) {
                this.showPreviousSlide();
            }
            if (!this.isDragging)
                return;
            this.isDragging = false;
            window.removeEventListener('mousemove', this.handleMouseMove);
            window.removeEventListener('mouseup', this.handleMouseUp);
        };
    }
    handleMouseDown(event) {
        event.stopPropagation();
        this.isDragging = true;
        this.startX = event.pageX;
        this.currentX = event.pageX;
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }
    showNextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
    showPreviousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
    handleDragStart(event) {
        event.preventDefault();
    }
    render() {
        const showPagination = this.slides && this.slides.length > 1;
        return (h("div", { key: '4533dd0939f275d19551d0edba3d671c19bb0986', class: "slider-container", onMouseDown: event => this.handleMouseDown(event), onDragStart: event => this.handleDragStart(event) }, h("div", { key: '688a8970613e1fc35e2621dd0162432482fd2cdc', class: "slider", style: {
                transform: `translateX(-${this.currentIndex * 100}%)`,
                transition: this.isDragging ? 'none' : 'transform 0.3s ease'
            } }, this.slides.map(slide => (h("div", { class: "slide bg-alternative-light" }, h("div", { class: "bg-alternative-light !h-[134px] flex items-center justify-center rounded-[10px]" }, h("div", { class: "before:content-[''] before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-dark/50 before:to-dark/0 before:w-3/4 before:h-full before:rounded-xl w-full rounded-xl relative h-[134px]" }, slide.text && (h("div", { class: "flex items-center justify-between w-full h-full absolute bottom-0 left-0 lg:left-8 top-0 lg:max-w-[421px] px-8 lg:px-0" }, h("h2", { class: "text-lg text-white font-sans flex items-center gap-2 relative pl-3 before:content-[''] before:absolute before:top-2 before:left-0 before:w-1 before:h-[14px] before:bg-primary" }, slide.text))), slide.imageUrl && (h("std-image", { classes: "block w-full h-full", imageClasses: "aspect-[3/1] lg:aspect-auto rounded-xl object-cover object-top", src: slide.imageUrl, srcDesktop: slide.imageUrl, alt: "banner" })))))))), showPagination && (h("div", { key: '3a253d39e12ba54b92852c7aa75df60b7a9accd1', class: "pagination" }, this.slides.map((_, index) => (h("button", { class: { active: this.currentIndex === index }, onClick: () => (this.currentIndex = index) })))))));
    }
    static get is() { return "std-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-slider.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-slider.css"]
        };
    }
    static get properties() {
        return {
            "slides": {
                "type": "unknown",
                "attribute": "slides",
                "mutable": false,
                "complexType": {
                    "original": "Array<slideInterface>",
                    "resolved": "slideInterface[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "slideInterface": {
                            "location": "local",
                            "path": "/Users/RPANTOJA/Documents/Development/santander/per-newobw-darcommonsui/src/components/std-slider/std-slider.tsx",
                            "id": "src/components/std-slider/std-slider.tsx::slideInterface"
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
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "currentIndex": {},
            "startX": {},
            "currentX": {}
        };
    }
}
//# sourceMappingURL=std-slider.js.map
