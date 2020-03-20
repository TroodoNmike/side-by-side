import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicInputComponentReactJsTabs: Array<ComponentTabsDataInterface> = [
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
                title: 'BasicInput.js',
                source: require('!raw-loader!./../../../framework/react-app/src/components/BasicInput.js').default,
                lang: 'javascript',
            },
        ]
    },
];
