import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdModalNativeComponent {
    private dialogElement;
    size: string;
    noHeader: boolean;
    noFooter: boolean;
    classes: string;
    modalClasses: string;
    classContent: string;
    show: boolean;
    closeableEsc: boolean;
    iconClick: EventEmitter;
    openDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    handleShowChange(newValue: boolean): void;
    handleScroll(ev: KeyboardEvent): void;
    componentDidLoad(): void;
    render(): any;
}
