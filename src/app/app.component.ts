import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Event, NavigationStart, Router } from '@angular/router';
import { continuePath } from '../shared/helper/conitnue-path';
import { ComponentRouteMappingInterface, SelectedComponentRouteMapping } from './page/page-content.inteface';
import { basicComponentTabs } from './page/basic.component.data';
import { basicInputComponentTabs } from './page/basic-input.component.data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading = true;
    sideBySide = environment.sideBySide;
    data2 = require('!raw-loader!./../../framework/vuejs-app/src/App.vue').default;
    data2b = require('!raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue').default;
    data3 = require('!raw-loader!./../../framework/react-app/src/App.js').default;
    data3b = require('!raw-loader!./../../framework/react-app/src/components/HelloWorld.js').default;

    componentRouteMapping: ComponentRouteMappingInterface = {
        '/': {
            title: 'Basic Component',
            angular: {
                use: '<app-basic></app-basic>',
                componentData: basicComponentTabs
            },
            vueJs: {
                use: '<HelloWorld />',
                componentData: basicComponentTabs
            }
        },
        '/msg': {
            title: 'Component with variable',
            angular: {
                use: '<app-basic-input ' +
                    'msg="I am message">\n' +
                    '</app-basic-input>',
                componentData: basicInputComponentTabs
            },
            vueJs: {
                use: '<HelloWorld msg="I am message" />',
                componentData: basicInputComponentTabs
            }

        },
    };

    selectedComponentRouteMapping: SelectedComponentRouteMapping = new SelectedComponentRouteMapping();

    constructor(private router: Router) {

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.sideBySide[0] = continuePath(environment.sideBySide[0], event.url);
                this.sideBySide[1] = continuePath(environment.sideBySide[1], event.url);
                this.sideBySide[2] = continuePath(environment.sideBySide[2], event.url);
                this.selectedComponentRouteMapping.title = this.componentRouteMapping[event.url].title;
                this.selectedComponentRouteMapping.vueJs.use = this.componentRouteMapping[event.url].vueJs.use;
                this.selectedComponentRouteMapping.angular.use = this.componentRouteMapping[event.url].angular.use;
                this.selectedComponentRouteMapping.angular.componentData = this.componentRouteMapping[event.url].angular.componentData;
                this.selectedComponentRouteMapping.angular.activePrismSourceTitle = 'angular-' + this.componentRouteMapping[event.url].angular.componentData[0].tabsData[0].title;
                this.loading = false;
            }
        });
    }
}
