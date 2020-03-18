import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentReactJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueReactId',
        tabsData: [
            {
                title: 'App.js',
                source: require('!raw-loader!./../../../framework/react-app/src/App.js').default,
                lang: 'javascript',
            },
        ]
    },
    {
        title: 'uniqueReactId2',
        tabsData: [
            {
                title: 'Basic.js',
                source: require('!raw-loader!./../../../framework/react-app/src/components/Basic.js').default,
                lang: 'javascript',
            },
        ]
    },
];
