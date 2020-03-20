import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Event, NavigationStart, Router } from '@angular/router';
import { continuePath } from '../shared/helper/conitnue-path';
import { ComponentRouteMappingInterface, SelectedComponentRouteMapping } from './page/page-content.inteface';
import { basicComponentTabs } from './page/basic.component.data';
import { basicInputComponentTabs } from './page/basic-input.component.data';
import { basicComponentVueJsTabs } from './page/basic.component.vuejs.data';
import { basicComponentReactJsTabs } from './page/basic.component.react.data';
import { basicInputComponentReactJsTabs } from './page/basic-input.component.react.data';
import { basicInputComponentVueJsTabs } from './page/basic-input.component.vuejs.data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading = true;
    sideBySide = environment.sideBySide;

    componentRouteMapping: ComponentRouteMappingInterface = {
        '/': {
            title: 'Basic Component',
            angular: {
                use: '<app-basic></app-basic>',
                componentData: basicComponentTabs
            },
            vueJs: {
                use: '<Basic />',
                componentData: basicComponentVueJsTabs
            },
            react: {
                use: '<HelloWorld />',
                componentData: basicComponentReactJsTabs
            }
        },
        '/msg': {
            title: 'Component with input',
            angular: {
                use: '<app-basic-input msg="I am message"></app-basic-input>',
                componentData: basicInputComponentTabs
            },
            vueJs: {
                use: '<BasicInput msg="I am message" />',
                componentData: basicInputComponentVueJsTabs
            },
            react: {
                use: '<HelloWorld msg="I am message" />',
                componentData: basicInputComponentReactJsTabs
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

                this.selectedComponentRouteMapping.angular.use = this.componentRouteMapping[event.url].angular.use;
                this.selectedComponentRouteMapping.angular.componentData = this.componentRouteMapping[event.url].angular.componentData;
                this.selectedComponentRouteMapping.angular.activePrismSourceTitle =
                    'angular-' + this.componentRouteMapping[event.url].angular.componentData[0].tabsData[0].title;

                this.selectedComponentRouteMapping.vueJs.use = this.componentRouteMapping[event.url].vueJs.use;
                this.selectedComponentRouteMapping.vueJs.componentData = this.componentRouteMapping[event.url].vueJs.componentData;
                this.selectedComponentRouteMapping.vueJs.activePrismSourceTitle =
                    'vuejs-' + this.componentRouteMapping[event.url].vueJs.componentData[0].tabsData[0].title;

                this.selectedComponentRouteMapping.react.use = this.componentRouteMapping[event.url].react.use;
                this.selectedComponentRouteMapping.react.componentData = this.componentRouteMapping[event.url].react.componentData;
                this.selectedComponentRouteMapping.react.activePrismSourceTitle =
                    'react-' + this.componentRouteMapping[event.url].react.componentData[0].tabsData[0].title;

                this.loading = false;
            }
        });
    }

    clickedSubMenu(item, id: string, tabs) {
        this.selectedComponentRouteMapping.angular.activePrismSourceTitle = id + item.title;

        const all = tabs.querySelectorAll('.dropdown .dropdown-item');
        const navlink = tabs.querySelector('.dropdown .nav-link');

        navlink.classList.remove('active');
        all.forEach(itemLoop => {
            itemLoop.classList.remove('active');
        });
    }
}
