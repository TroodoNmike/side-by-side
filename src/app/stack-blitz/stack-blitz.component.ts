import { Component, Input } from '@angular/core';
import sdk from '@stackblitz/sdk';

import { SelectedComponentSingleRouteMapping } from '../page/page-content.inteface';

@Component({
    selector: 'app-stack-blitz',
    templateUrl: './stack-blitz.component.html',
    styleUrls: ['./stack-blitz.component.scss']
})
export class StackBlitzComponent {

    @Input() title: string;
    @Input() selectedComponentRouteMapping: SelectedComponentSingleRouteMapping = new SelectedComponentSingleRouteMapping();

    constructor() {
    }

    submit(): void {
        alert('wip');

        const appComponent = `
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html'
})
export class AppComponent {

}
        `;
        const appModule = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicModule } from './app/basic.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BasicModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

        `;

        const code = `import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AppModule } from './src/app.module';
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

`;
        const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

`;

        const files = {
            'main.ts': code,
            'src/app.component.ts': appComponent,
            'src/app.module.ts': appModule,
            'index.html': html
        };

        this.selectedComponentRouteMapping.componentData.forEach(data => {
            data.tabsData.forEach(item => {
                files['src/app/' + item.title] = item.source;
            });
        });

        const project = this.createProject(files);
        sdk.openProject(project, {openFile: 'src/app/app.component.html'});
    }

    private createProject(files) {

        return {
            files,
            title: this.title,
            description: 'Side by side',
            template: 'angular-cli',
            dependencies: {}
        };
    }
}
