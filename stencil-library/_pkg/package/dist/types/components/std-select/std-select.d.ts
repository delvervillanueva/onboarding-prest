import { EventEmitter } from '../../stencil-public-runtime';
export declare class CustomSelect {
    helperText: string;
    status: string;
    icon: string;
    label: string;
    placeholder: string;
    selectTitle: string;
    labelClasses: string;
    readonly: boolean;
    classes: string;
    multiple: boolean;
    isOpen: boolean;
    selectedOption: string;
    disabled: boolean;
    selectionChanged: EventEmitter<string>;
    iconClick: EventEmitter;
    selectElement: HTMLButtonElement;
    menuElement: HTMLDivElement;
    toggleDropdown(): void;
    handleSelection(option: string): Promise<void>;
    get labelClass(): string;
    get buttonClasses(): string;
    get iconClasses(): string;
    checkForClickOutside(ev: PointerEvent): void;
    render(): any;
}
