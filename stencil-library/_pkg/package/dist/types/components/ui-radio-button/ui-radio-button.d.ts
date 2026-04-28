import { EventEmitter } from '../../stencil-public-runtime';
export declare class UiRadioButtonComponent {
    label: string;
    name: string;
    value: string;
    checked: boolean;
    readonly: boolean;
    disabled: boolean;
    white: boolean;
    status: string;
    classes: string;
    classesRadio: string;
    changeEvent: EventEmitter;
    private onChange;
    render(): any;
}
