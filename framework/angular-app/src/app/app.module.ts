import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldInputModule } from './hello-world-input/hello-world-input.module';
import { ParentHelloWorldInputComponent } from './basic/parent-hello-world-input.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentHelloWorldInputComponent
    ],
    imports: [
        BrowserModule,
        HelloWorldModule,
        HelloWorldInputModule,
        RouterModule.forRoot([
            {
                path: '', component: HelloWorldComponent
            },
            {
                path: 'msg', component: ParentHelloWorldInputComponent,
            },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
