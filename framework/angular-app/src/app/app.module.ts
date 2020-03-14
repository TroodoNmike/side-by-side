import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { RouterModule } from '@angular/router';
import { HelloWorldInputModule } from './hello-world-input/hello-world-input.module';
import { ParentHelloWorldComponent } from './basic/parent-hello-world.component';
import { ParentHelloWorldInputComponent } from './basic/parent-hello-world-input.component';

@NgModule({
    declarations: [
        AppComponent,
        ParentHelloWorldComponent,
        ParentHelloWorldInputComponent,
    ],
    imports: [
        BrowserModule,
        HelloWorldModule,
        HelloWorldInputModule,
        RouterModule.forRoot([
            {
                path: '', component: ParentHelloWorldComponent
            },
            {
                path: 'msg', component: ParentHelloWorldInputComponent
            },
        ], {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
