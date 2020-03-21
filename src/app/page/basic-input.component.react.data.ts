import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicInputComponentReactJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueReactId',
        tabsData: [
            {
                title: 'ParentApp.js',
                source: require('!raw-loader!./../../../framework/react-app/src/parent/ParentBasicInput.js').default,
                lang: 'javascript',
            },
        ]
    },
    {
        title: 'uniqueReactId2',
        tabsData: [
            {
                title: 'AppBasicInput.js',
                source: require('!raw-loader!./../../../framework/react-app/src/components/AppBasicInput.js').default,
                lang: 'javascript',
            },
        ]
    },
];
