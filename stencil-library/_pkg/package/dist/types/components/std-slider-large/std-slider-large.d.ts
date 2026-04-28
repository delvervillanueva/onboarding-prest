export interface SlideInterface {
    title?: string;
    text?: string;
    imageUrl?: string;
}
export declare class StdSliderLargeComponent {
    currentIndex: number;
    startX: number;
    currentX: number;
    internalIndex: number;
    isTransitioning: boolean;
    slides: Array<SlideInterface>;
    horizontal: boolean;
    private isDragging;
    private autoSlideInterval?;
    get extendedSlides(): SlideInterface[];
    get paginationIndex(): number;
    componentDidLoad(): void;
    startAutoSlide(): void;
    disconnectedCallback(): void;
    clearAutoSlide(): void;
    handleMouseDown(event: MouseEvent): void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: () => void;
    showNextSlide(): void;
    showPreviousSlide(): void;
    handleDragStart(event: DragEvent): void;
    handleTransitionEnd: () => void;
    render(): any;
}
