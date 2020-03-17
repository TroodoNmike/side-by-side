import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentReactJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueReactId',
        tabsData: [
            {
                title: 'App.js',
                source: require('!raw-loader!./../../../framework/react-app/src/App.js').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'uniqueReactId',
        tabsData: [
            {
                title: 'HelloWorld.js',
                source: require('!raw-loader!./../../../framework/react-app/src/components/HelloWorld.js').default,
                lang: 'html',
            },
        ]
    },
];
