import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentReactJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueReactId',
        tabsData: [
            {
                title: 'AppParent.js',
                source: require('!raw-loader!./../../../framework/react-app/src/parent/ParentBasic.js').default,
                lang: 'javascript',
            },
        ]
    },
    {
        title: 'uniqueReactId2',
        tabsData: [
            {
                title: 'AppBasic.js',
                source: require('!raw-loader!./../../../framework/react-app/src/components/AppBasic.js').default,
                lang: 'javascript',
            },
        ]
    },
];
