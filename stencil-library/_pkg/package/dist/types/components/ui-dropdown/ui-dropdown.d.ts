export interface DataHeader {
    company: string;
    fullName: string;
}
export declare class UiDropDownComponent {
    classes: string;
    data: DataHeader;
    isOpen: boolean;
    toggleCollapse(): void;
    render(): any;
}
