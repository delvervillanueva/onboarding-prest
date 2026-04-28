import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdTextAreaComponent {
    label: string;
    name: string;
    htmlId: string;
    icon: string;
    placeholder: string;
    helperText: string;
    status: string;
    disabled: boolean;
    readonly: boolean;
    classes: string;
    max: any;
    counter: boolean;
    rows: number;
    value: string;
    changeEvent: EventEmitter;
    nativeChangeEvent: EventEmitter;
    onInputChanged(event: InputEvent): void;
    onInputNativeChange(event: Event): void;
    render(): any;
}
