export declare class StdStepperItem {
    step: string;
    label: string;
    status: string;
    isClickable: boolean;
    classes: string;
    steps: NodeList;
    el: HTMLElement;
    componentWillLoad(): void;
    get isFirsStep(): boolean;
    get isLastStep(): boolean;
    render(): any;
}
