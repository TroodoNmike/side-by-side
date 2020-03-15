export class SelectedComponentRouteMapping {
    title: string;
    angular: {
        use: string;
        componentData: Array<ComponentTabsDataInterface>;
        activePrismSourceTitle: string;
    };
    vueJs: {
        use: string;
        componentData: Array<ComponentTabsDataInterface>;
        activePrismSourceTitle: string;
    };


    constructor() {
        this.angular = {
            use: '',
            componentData: [],
            activePrismSourceTitle: ''
        };
        this.vueJs = {
            use: '',
            componentData: [],
            activePrismSourceTitle: ''
        };
    }
}

export interface ComponentRouteMappingInterface {
    [key: string]: {
        title: string;
        angular: {
            use: string;
            componentData: Array<ComponentTabsDataInterface>
        },
        vueJs: {
            use: string;
            componentData: Array<ComponentTabsDataInterface>
        }
    };
}

export interface ComponentTabsDataInterface {
    title: string;
    tabsData: Array<PrismSource>;
}

export interface PrismSource {
    title: string;
    source: string;
    lang: 'html' | 'typescript' | 'css';
}
