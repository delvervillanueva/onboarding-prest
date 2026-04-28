export interface slideInterface {
    text?: string;
    imageUrl?: string;
}
export declare class StdSliderComponent {
    currentIndex: number;
    startX: number;
    currentX: number;
    slides: Array<slideInterface>;
    private isDragging;
    handleMouseDown(event: MouseEvent): void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: () => void;
    showNextSlide(): void;
    showPreviousSlide(): void;
    handleDragStart(event: DragEvent): void;
    render(): any;
}
