import { EventEmitter } from '../../stencil-public-runtime';
interface IitemBread {
    label: string;
    actionKey?: string;
}
export declare class StdBreadcrumbComponent {
    items: any;
    internalItems: IitemBread[];
    itemSelected: EventEmitter<{
        actionKey: string;
    }>;
    handleClick(item: IitemBread): void;
    componentWillLoad(): void;
    parseOptions(): void;
    render(): any;
}
export {};
