import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'app.component.html',
        tabsData: [
            {
                title: 'app.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/parent-hello-world.component.html').default,
                lang: 'html',
            },
        ]
    },
    {
        title: 'Files',
        tabsData: [
            {
                title: 'hello-world.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world/hello-world.component.html').default,
                lang: 'html',
            },
            {
                title: 'hello-world.component.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world/hello-world.component').default,
                lang: 'typescript'
            },
            {
                title: 'hello-world.module.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world/hello-world.module').default,
                lang: 'typescript'
            },
            {
                title: 'hello-world.component.spec.ts',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world/hello-world.component.spec').default,
                lang: 'typescript'
            },
        ]
    },
];
