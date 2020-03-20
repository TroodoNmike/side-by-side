import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicInputComponentVueJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueId',
        tabsData: [
            {
                title: 'App.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/parent/BasicInputParent.vue').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'uniqueId2',
        tabsData: [
            {
                title: 'BasicInput.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/components/BasicInput.vue').default,
                lang: 'html',
            },
        ]
    },
];
