interface IVariableSass {
    key: string;
    value: string;
}
export declare function getElementPromise(el: HTMLElement, tagToSearch: string, skipShadow: boolean): Promise<Element>;
export declare function getListElementPromise<T>(el: HTMLElement, tagToSearch: string, skipShadow: boolean): Promise<Array<T>>;
export declare function setCssVariableValueDeprecated(element: HTMLElement, tagToSearch: string, cssVariable: IVariableSass | IVariableSass): Promise<void>;
export declare function setCssVariableValue(element: HTMLElement, tagToSearch: string, cssVariable: IVariableSass | Array<IVariableSass>): Promise<void>;
export declare function setClassToElement(element: HTMLElement, tagToSearch: string, classNames: string): Promise<void>;
export declare function daysBetween(date1: Date, date2: Date): number;
export {};
