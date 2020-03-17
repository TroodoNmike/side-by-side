import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentVueJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueId',
        tabsData: [
            {
                title: 'App.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/App.vue').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'uniqueId2',
        tabsData: [
            {
                title: 'HelloWorld.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/components/HelloWorld.vue').default,
                lang: 'html',
            },
        ]
    },
];
