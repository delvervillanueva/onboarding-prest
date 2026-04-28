import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdBannerComponent {
    label: string;
    back: boolean;
    href: string;
    clickBack: EventEmitter;
    onBackClick(event: Event): any;
    render(): any;
}
