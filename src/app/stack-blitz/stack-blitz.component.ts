import { Component, Input } from '@angular/core';
import sdk from '@stackblitz/sdk';

import { SelectedComponentSingleRouteMapping } from '../page/page-content.inteface';

@Component({
    selector: 'app-stack-blitz',
    templateUrl: './stack-blitz.component.html',
    styleUrls: ['./stack-blitz.component.scss']
})
export class StackBlitzComponent {

    @Input() selectedComponentRouteMapping: SelectedComponentSingleRouteMapping = new SelectedComponentSingleRouteMapping();

    constructor() {
    }

    submit(): void {
        alert('wip');
        const code = `import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

`;
        const html = `<h1>I was created on <span id='time'></span></h1>`;

        const files = {
            'main.ts': code,
            'index.html': html
        };

        this.selectedComponentRouteMapping.componentData.forEach(data => {
            data.tabsData.forEach(item => {
                files['src/' + item.title] = item.source;
            });
        });

        const project = this.createProject(files);
        sdk.openProject(project);
    }

    private createProject(files) {

        return {
            files,
            title: 'Dynamically Generated Project',
            description: 'Created with <3 by the StackBlitz SDK!',
            template: 'angular-cli',
            dependencies: {
            }
        };
    }
}
