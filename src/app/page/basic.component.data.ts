import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'app.component.html',
        tabsData: [
            {
                title: 'app.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/parent/parent-basic.component.html').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'Component files',
        tabsData: [
            {
                title: 'basic.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/basic.component.html').default,
                lang: 'html',
            },
            {
                title: 'basic.component.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/basic.component').default,
                lang: 'typescript'
            },
            {
                title: 'basic.module.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/basic.module').default,
                lang: 'typescript'
            },
            {
                title: 'basic.component.spec.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/basic.component.spec').default,
                lang: 'typescript'
            },
        ]
    },
];
