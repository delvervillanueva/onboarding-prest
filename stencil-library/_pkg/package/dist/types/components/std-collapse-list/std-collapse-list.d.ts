export declare class StdCollapseListComponent {
    label: string;
    icon: string;
    tooltipPosition: string;
    tooltip: string;
    chevron: boolean;
    isActive: boolean;
    isOpen: boolean;
    showLabel: boolean;
    toogleLabel(status?: boolean): Promise<void>;
    toggleCollapse(): void;
    render(): any;
}
