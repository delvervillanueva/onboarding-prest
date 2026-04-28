import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdRadioGroup {
    classesContainer: string;
    value: string;
    items: {
        value: string;
        label: string;
    }[];
    name: string;
    readonly: boolean;
    disabled: boolean;
    white: boolean;
    status: 'default' | 'error';
    classes: string;
    classesRadio: string;
    changeEvent: EventEmitter<string>;
    watchSelectedValue(newValue: string): void;
    handleChange(event: Event): void;
    render(): any;
}
