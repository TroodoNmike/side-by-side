import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentVueJsTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'uniqueId',
        tabsData: [
            {
                title: 'BasicParent.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/parent/BasicParent.vue').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'uniqueId2',
        tabsData: [
            {
                title: 'AppBasic.vue',
                source: require('!raw-loader!./../../../framework/vuejs-app/src/components/AppBasic.vue').default,
                lang: 'html',
            },
        ]
    },
];
