import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdPinInputComponent {
    itemsNumber: number;
    status: string;
    disabled: boolean;
    customLabel: boolean;
    classes: string;
    classesInput: string;
    changeEvent: EventEmitter;
    el: HTMLElement;
    values: Array<string>;
    inputs: Array<any>;
    setFocus(): Promise<void>;
    reset(): Promise<void>;
    componentDidLoad(): void;
    onInputChanged(event: InputEvent, index: number): void;
    onKeyDownEvent(event: KeyboardEvent, index: number): void;
    onKeyPressEvent(event: KeyboardEvent): void;
    onPasteEvent(event: ClipboardEvent): void;
    render(): any;
}
