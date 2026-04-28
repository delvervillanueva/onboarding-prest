import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdUploadFile {
    fileSelected: EventEmitter<{
        data: {
            file: File;
            errors: string[];
        }[];
        source: string;
    }>;
    isDragging: boolean;
    messageUpload: string;
    selectedFiles: {
        name: string;
        size: number;
    }[] | null;
    validationMode: 'mimeType' | 'extension' | 'both';
    limit: number | null;
    accept: string[];
    multiple: boolean;
    limitName: number;
    showDetail: boolean;
    fileNamePattern: string;
    status: string;
    classes: string;
    headerValidation: boolean;
    newFile: File;
    signsMap: {
        [key: string]: number[];
    };
    inputFileElement: HTMLInputElement;
    private sanitizer;
    checkFileHeaders(file: File, fileExt: string): Promise<boolean>;
    validateFile(file: File): Promise<string[]>;
    private processFiles;
    private handleFileInput;
    private handleDrop;
    private handleDragOver;
    private handleDragLeave;
    private invokeInput;
    render(): any;
}
