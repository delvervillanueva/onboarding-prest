import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdButtonComponent {
    label: string;
    icon: string;
    iconPosition: string;
    type: string;
    size: string;
    href: string;
    disabled: boolean;
    img: boolean;
    srcImage: string;
    classes: string;
    iconClasses: string;
    imageClasses: string;
    loading: boolean;
    clickEvent: EventEmitter;
    focusEvent: EventEmitter;
    blurEvent: EventEmitter;
    onClick(event: Event): void;
    render(): any;
}
