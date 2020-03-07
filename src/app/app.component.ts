import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compare';
  data = require('!raw-loader!./../../framework/angular-app/src/app/hello-world/hello-world.component').default;
  data2 = require('!raw-loader!./../../framework/vuejs-app/src/components/HelloWorld.vue').default;
  data3 = require('!raw-loader!./../../framework/react-app/src/components/HelloWorld.js').default;
}
