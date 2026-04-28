import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdToastComponent {
    status: string;
    type: string;
    classes: string;
    hiddenClose: boolean;
    close: EventEmitter;
    onCloseToast(): void;
    render(): any;
}
