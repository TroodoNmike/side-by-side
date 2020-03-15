import { ComponentTabsDataInterface } from './page-content.inteface';

export const componentWithInputTabs: Array<ComponentTabsDataInterface> = [
    {
        title: 'Anything?',
        tabsData: [
            {
                title: 'app.component.html',
                source: require('!raw-loader!./../../../framework/angular-app/src/app/basic/parent-hello-world-input.component.html').default,
                lang: 'html',
            },
        ],
        // subTabsData: {
        //     title: 'Component',
        //     data: [
        //         {
        //             title: 'hello-world.component.html',
        //             source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world-input/hello-world-input.component.html').default,
        //             lang: 'html',
        //         },
        //         {
        //             title: 'hello-world.component.ts',
        //             source: require('!raw-loader!./../../../framework/angular-app/src/app/hello-world-input/hello-world-input.component').default,
        //             lang: 'typescript'
        //         },
        //     ]
        // },
    },
];
