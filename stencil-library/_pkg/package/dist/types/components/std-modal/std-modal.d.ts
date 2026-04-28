import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdModalComponent {
    htmlId: string;
    size: string;
    noHeader: boolean;
    noFooter: boolean;
    classes: string;
    modalClasses: string;
    classContent: string;
    show: boolean;
    iconClick: EventEmitter;
    render(): any;
}
