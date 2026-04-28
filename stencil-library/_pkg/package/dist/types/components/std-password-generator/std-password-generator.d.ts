import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdTab {
    titleBox: string;
    label: string;
    description: string;
    status: string;
    typeButton: string;
    labelButton: string;
    disabled: boolean;
    clickButtonEvent: EventEmitter;
    render(): any;
}
