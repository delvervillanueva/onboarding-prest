export declare class UiOptionsComponent {
    optionsElement: HTMLDivElement;
    closable: boolean;
    closableItem: boolean;
    isOpen: boolean;
    onCloseItem(): void;
    close(): Promise<void>;
    checkForClickOutside(ev: PointerEvent): void;
    toggleCollapse(): void;
    render(): any;
}
