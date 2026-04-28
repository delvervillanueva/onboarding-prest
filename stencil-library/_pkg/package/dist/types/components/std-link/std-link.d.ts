import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdLinkComponent {
    label: string;
    icon: string;
    iconPosition: string;
    href: string;
    type: string;
    cursor: string;
    disabled: boolean;
    classes: string;
    clickEvent: EventEmitter;
    onClick(event: Event): void;
    render(): any;
}
