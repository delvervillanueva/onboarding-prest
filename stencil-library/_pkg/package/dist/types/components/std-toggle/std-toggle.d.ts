import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdToggleComponent {
    labelOne: string;
    labelTwo: string;
    checked: boolean;
    disabled: boolean;
    type: 'default' | 'symbol';
    changeToggleEvent: EventEmitter<boolean>;
    onChangeToggle(event: Event): void;
    render(): any;
}
