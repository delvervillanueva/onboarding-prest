import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdCardButton {
    classes: string;
    cardTitle: string;
    src: string;
    icon: string;
    iconClasses: string;
    image: boolean;
    disabled: boolean;
    clickEvent: EventEmitter;
    onClick(event: Event): void;
    render(): any;
}
