import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdUploadLoaderComponent {
    classes: string;
    nameFile: string;
    textStatus: string;
    status: string;
    progress: string;
    disabled: boolean;
    cancelFlow: EventEmitter;
    onClickCancel(event: Event): void;
    render(): any;
}
