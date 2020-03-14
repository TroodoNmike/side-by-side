export class SelectedComponentRouteMapping {
    title: string;
    use: string;
    componentData: Array<ComponentTabsDataInterface> = [];
    activePrismSourceTitle: string;
}

export interface ComponentRouteMappingInterface {
    [key: string]: {
        title: string;
        use: string;
        componentData: Array<ComponentTabsDataInterface>
    };
}

export interface ComponentTabsDataInterface {
    title: string;
    tabsData: Array<PrismSource>;
    subTabsData: {
        title: string,
        data: Array<PrismSource>
    };
}

export interface PrismSource {
    title: string;
    source: string;
    lang: 'html' | 'typescript' | 'css';
}
