import { Component, Input, OnInit } from '@angular/core';
import { SelectedComponentSingleRouteMapping } from '../page/page-content.inteface';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    @Input() selectedComponentRouteMapping: SelectedComponentSingleRouteMapping = new SelectedComponentSingleRouteMapping();
    @Input() idPrefix: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    clickedSubMenu(item, id: string, tabs) {
        this.selectedComponentRouteMapping.activePrismSourceTitle = id + item.title;

        const all = tabs.querySelectorAll('.dropdown .dropdown-item');
        const navlink = tabs.querySelector('.dropdown .nav-link');

        if (navlink && all) {
            navlink.classList.remove('active');
            all.forEach(itemLoop => {
                itemLoop.classList.remove('active');
            });
        }
    }
}
