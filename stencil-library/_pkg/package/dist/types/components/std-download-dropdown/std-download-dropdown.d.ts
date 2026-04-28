import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdDownloadDropdown {
    optionsList: {
        label: string;
        value: string;
        disabled: boolean;
    }[];
    label: string;
    size: string;
    isLoadingButton: boolean;
    isOpen: boolean;
    setValueRadioButton: string;
    canDisableDownloadButton: boolean;
    isModalOpen: boolean;
    downloadSelected: EventEmitter<string>;
    onClickOpenModal(): void;
    onClickShowOptions(): void;
    onclickDownloadFile(): void;
    onClickRadioButton(event: any, disabled: boolean): void;
    render(): any;
}
