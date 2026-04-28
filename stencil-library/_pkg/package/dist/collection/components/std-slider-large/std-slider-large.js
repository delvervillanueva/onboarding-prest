import { h } from "@stencil/core";
export class StdSliderLargeComponent {
    constructor() {
        this.currentIndex = 0;
        this.startX = 0;
        this.currentX = 0;
        this.internalIndex = 1; // Empieza en la primera real
        this.isTransitioning = false;
        this.slides = [];
        this.horizontal = true;
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
        this.handleTransitionEnd = () => {
            this.isTransitioning = false;
            // Si estamos en la copia del primer slide (al final), saltamos al real
            if (this.internalIndex === this.extendedSlides.length - 1) {
                this.internalIndex = 1;
            }
            // Si estamos en la copia del último slide (al principio), saltamos al real
            if (this.internalIndex === 0) {
                this.internalIndex = this.extendedSlides.length - 2;
            }
        };
    }
    get extendedSlides() {
        if (!this.slides || this.slides.length === 0)
            return [];
        return [
            this.slides[this.slides.length - 1],
            ...this.slides,
            this.slides[0]
        ];
    }
    get paginationIndex() {
        if (this.internalIndex === 0)
            return this.slides.length - 1;
        if (this.internalIndex === this.extendedSlides.length - 1)
            return 0;
        return this.internalIndex - 1;
    }
    componentDidLoad() {
        this.startAutoSlide();
    }
    startAutoSlide() {
        this.clearAutoSlide(); // Por si acaso ya existe uno
        this.autoSlideInterval = window.setInterval(() => {
            this.showNextSlide();
        }, 10000); // 10 segundos
    }
    disconnectedCallback() {
        this.clearAutoSlide();
    }
    clearAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = undefined;
        }
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
        // this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        if (this.isTransitioning)
            return;
        this.isTransitioning = true;
        this.internalIndex += 1;
        this.startAutoSlide(); // Reinicia el time
    }
    showPreviousSlide() {
        // this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        if (this.isTransitioning)
            return;
        this.isTransitioning = true;
        this.internalIndex -= 1;
        this.startAutoSlide(); // Reinicia el timer
    }
    handleDragStart(event) {
        event.preventDefault();
    }
    render() {
        const showPagination = this.slides && this.slides.length > 1;
        if (this.horizontal) {
            return (h("div", { class: "slider-container", onMouseDown: event => this.handleMouseDown(event), onDragStart: event => this.handleDragStart(event) }, h("div", { class: "slider w-full", style: { transform: `translateX(-${this.internalIndex * 100}%)`, transition: this.isTransitioning ? 'transform 0.3s ease' : 'none' }, onTransitionEnd: this.handleTransitionEnd }, this.extendedSlides.map(slide => (h("div", { class: "slide" }, h("div", { class: "flex flex-col items-center justify-center gap-2" }, slide.imageUrl && (h("std-image", { classes: "max-w-[330px]", src: slide.imageUrl, srcDesktop: slide.imageUrl, alt: "banner" })), slide.title && (h("h3", { class: "text-dark text-[28px] lg:text-[42px] text-center" }, " ", slide.title, " ")), slide.text && (h("p", { class: "text-center text-lg" }, " ", slide.text, " "))))))), showPagination && (h("div", { class: "slider-controls" }, h("button", { class: "swiper-button-prev", onClick: () => this.showPreviousSlide(), "aria-label": "Anterior" }, h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M14.9957 19.0041C14.7302 19.0056 14.4751 18.9013 14.2867 18.7141L8.29537 12.7141C8.10633 12.5263 8 12.2707 8 12.0041C8 11.7375 8.10633 11.4819 8.29537 11.2941L14.2867 5.29409C14.6782 4.90197 15.3131 4.90197 15.7046 5.29409C16.0962 5.68621 16.0962 6.32197 15.7046 6.71409L10.4123 12.0041L15.7046 17.2941C15.8937 17.4819 16 17.7375 16 18.0041C16 18.2707 15.8937 18.5263 15.7046 18.7141C15.5162 18.9013 15.2611 19.0056 14.9957 19.0041Z", fill: "#127277" }))), h("div", { class: "pagination" }, this.slides.map((_, index) => (h("button", { class: { active: this.paginationIndex === index }, onClick: () => (this.internalIndex = index + 1) })))), h("button", { class: "swiper-button-next", onClick: () => this.showNextSlide(), "aria-label": "Siguiente" }, h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M9.00434 19.0041C8.73892 19.0056 8.48382 18.9013 8.29537 18.7141C8.10633 18.5263 8 18.2707 8 18.0041C8 17.7375 8.10633 17.4819 8.29537 17.2941L13.5877 12.0041L8.29537 6.71409C7.90382 6.32197 7.90382 5.68621 8.29537 5.29409C8.68692 4.90197 9.32176 4.90197 9.71331 5.29409L15.7046 11.2941C15.8937 11.4819 16 11.7375 16 12.0041C16 12.2707 15.8937 12.5263 15.7046 12.7141L9.71331 18.7141C9.52487 18.9013 9.26976 19.0056 9.00434 19.0041Z", fill: "#127277" })))))));
        }
        else {
            return (h("div", { class: "slider-container", onMouseDown: event => this.handleMouseDown(event), onDragStart: event => this.handleDragStart(event) }, h("div", { class: "slider w-full", style: { transform: `translateX(-${this.internalIndex * 100}%)`, transition: this.isTransitioning ? 'transform 0.3s ease' : 'none' }, onTransitionEnd: this.handleTransitionEnd }, this.extendedSlides.map(slide => (h("div", { class: "slide" }, h("div", { class: "md:flex items-start gap-2 md:bg-white py-6 md:px-7 md:gap-9 rounded" }, slide.imageUrl && (h("std-image", { classes: "block max-md:mx-auto  max-w-[200px] max-h-[200px] lg:max-w-[175px]", src: slide.imageUrl, srcDesktop: slide.imageUrl, alt: "banner" })), h("div", { class: "flex flex-col gap-4" }, slide.title && (h("h3", { class: "text-dark text-[28px] md:text-[42px] md:leading-[52px] text-left" }, " ", slide.title, " ")), slide.text && (h("p", { class: "text-left text-lg" }, " ", slide.text, " ")))))))), showPagination && (h("div", { class: "slider-controls" }, h("button", { class: "swiper-button-prev", onClick: () => this.showPreviousSlide(), "aria-label": "Anterior" }, h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M14.9957 19.0041C14.7302 19.0056 14.4751 18.9013 14.2867 18.7141L8.29537 12.7141C8.10633 12.5263 8 12.2707 8 12.0041C8 11.7375 8.10633 11.4819 8.29537 11.2941L14.2867 5.29409C14.6782 4.90197 15.3131 4.90197 15.7046 5.29409C16.0962 5.68621 16.0962 6.32197 15.7046 6.71409L10.4123 12.0041L15.7046 17.2941C15.8937 17.4819 16 17.7375 16 18.0041C16 18.2707 15.8937 18.5263 15.7046 18.7141C15.5162 18.9013 15.2611 19.0056 14.9957 19.0041Z", fill: "#127277" }))), h("div", { class: "pagination" }, this.slides.map((_, index) => (h("button", { class: { active: this.paginationIndex === index }, onClick: () => (this.internalIndex = index + 1) })))), h("button", { class: "swiper-button-next", onClick: () => this.showNextSlide(), "aria-label": "Siguiente" }, h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M9.00434 19.0041C8.73892 19.0056 8.48382 18.9013 8.29537 18.7141C8.10633 18.5263 8 18.2707 8 18.0041C8 17.7375 8.10633 17.4819 8.29537 17.2941L13.5877 12.0041L8.29537 6.71409C7.90382 6.32197 7.90382 5.68621 8.29537 5.29409C8.68692 4.90197 9.32176 4.90197 9.71331 5.29409L15.7046 11.2941C15.8937 11.4819 16 11.7375 16 12.0041C16 12.2707 15.8937 12.5263 15.7046 12.7141L9.71331 18.7141C9.52487 18.9013 9.26976 19.0056 9.00434 19.0041Z", fill: "#127277" })))))));
        }
    }
    static get is() { return "std-slider-large"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["std-slider-large.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["std-slider-large.css"]
        };
    }
    static get properties() {
        return {
            "slides": {
                "type": "unknown",
                "attribute": "slides",
                "mutable": false,
                "complexType": {
                    "original": "Array<SlideInterface>",
                    "resolved": "SlideInterface[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        },
                        "SlideInterface": {
                            "location": "local",
                            "path": "/Users/RPANTOJA/Documents/Development/santander/per-newobw-darcommonsui/src/components/std-slider-large/std-slider-large.tsx",
                            "id": "src/components/std-slider-large/std-slider-large.tsx::SlideInterface"
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
            },
            "horizontal": {
                "type": "boolean",
                "attribute": "horizontal",
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
            }
        };
    }
    static get states() {
        return {
            "currentIndex": {},
            "startX": {},
            "currentX": {},
            "internalIndex": {},
            "isTransitioning": {}
        };
    }
}
//# sourceMappingURL=std-slider-large.js.map
