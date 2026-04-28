import { EventEmitter } from '../../stencil-public-runtime';
interface TabItem {
    label: string;
    key: number;
    active: boolean;
    disabled?: boolean;
}
export declare class StdTab {
    type: string;
    bgStyle: string;
    activeStyle: string;
    items: any;
    tabKey: string;
    internalItems: TabItem[];
    itemSelected: EventEmitter<{
        selectedKey: string;
    }>;
    componentWillLoad(): void;
    parseOptions(): void;
    render(): any;
}
export {};
