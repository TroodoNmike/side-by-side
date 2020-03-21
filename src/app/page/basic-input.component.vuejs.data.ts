import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicInputComponentVueJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueId',
        tabsData: [
            {
                title: 'BasicInputParent.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/parent/BasicInputParent.vue').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'uniqueId2',
        tabsData: [
            {
                title: 'AppBasicInput.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/components/AppBasicInput.vue').default,
                lang: 'html',
            },
        ]
    },
];
