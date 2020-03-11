import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { continuePath } from '../shared/helper/conitnue-path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  sideBySide = environment.sideBySide;
  data0 = require('!raw-loader!./../../framework/angular-app/src/app/app.component.html').default;
  data = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component').default;
  datab = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component.html').default;
  datac = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.module').default;
  data2 = require('!raw-loader!./../../framework/vuejs-app/src/App.vue').default;
  data2b = require('!raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue').default;
  data3 = require('!raw-loader!./../../framework/react-app/src/App.js').default;
  data3b = require('!raw-loader!./../../framework/react-app/src/components/HelloWorld.js').default;


  constructor(private router: Router) {

      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationStart) {
              this.sideBySide[0] = continuePath(environment.sideBySide[0], event.url);
              this.sideBySide[1] = continuePath(environment.sideBySide[1], event.url);
              this.sideBySide[2] = continuePath(environment.sideBySide[2], event.url);
              this.loading = false;
          }
      });
  }
}
