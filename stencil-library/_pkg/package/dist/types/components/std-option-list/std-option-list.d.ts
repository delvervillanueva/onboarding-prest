import { EventEmitter } from '../../stencil-public-runtime';
export interface IOptionListItem {
    label: string;
    labelTwo?: string;
    active?: boolean;
}
export declare class OptionList {
    items: IOptionListItem[];
    itemClicked: EventEmitter<IOptionListItem>;
    handleItemClick(item: any): void;
    render(): any;
}
