import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicInputComponentTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'Anything?',
        tabsData: [
            {
                title: 'app.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/parent/parent-basic-input.component.html').default,
                lang: 'html',
            },
        ],
    },
    {
        title: 'Component files',
        tabsData: [
            {
                title: 'basic-input.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic-input/basic-input.component.html').default,
                lang: 'html',
            },
            {
                title: 'basic-input.component.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic-input/basic-input.component').default,
                lang: 'typescript'
            },
            {
                title: 'basic-input.module.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic-input/basic-input.module').default,
                lang: 'typescript'
            },
            {
                title: 'basic-input.component.spec.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic-input/basic-input.component.spec').default,
                lang: 'typescript'
            },
        ]
    },
];
