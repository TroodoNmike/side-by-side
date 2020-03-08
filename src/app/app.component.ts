import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compare';
  data0 = require('!raw-loader!./../../framework/angular-app/src/app/app.component.html').default;
  data = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component').default;
  datab = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component.html').default;
  datac = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.module').default;
  data2 = require('!raw-loader!./../../framework/vuejs-app/src/App.vue').default;
  data2b = require('!raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue').default;
  data3 = require('!raw-loader!./../../framework/react-app/src/App.js').default;
  data3b = require('!raw-loader!./../../framework/react-app/src/components/HelloWorld.js').default;
}
