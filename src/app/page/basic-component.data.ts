import { ComponentTabsDataInterface } from './page-content.inteface';

export const basicComponentTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'Basic use',
        tabsData: [
            {
                title: 'app.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/parent-hello-world.component.html').default,
                lang: 'html',
            },
        ],
        subTabsData: {
            title: 'Component',
            data: [
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
            ]
        },
    },
];
