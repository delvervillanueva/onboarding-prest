import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdCheckboxComponent {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    readonly: boolean;
    disabled: boolean;
    status: string;
    classes: string;
    changeEvent: EventEmitter<{
        value: string;
        checked: boolean;
    }>;
    focusEvent: EventEmitter;
    blurEvent: EventEmitter;
    onChange(): void;
    render(): any;
}
