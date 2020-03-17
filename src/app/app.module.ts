import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeModule } from '../shared/code/code.module';
import { FrameworkModule } from './framework/framework.module';
import { RouterModule } from '@angular/router';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FrameworkModule,
        TabsModule,
        RouterModule.forRoot([
            {
                path: '', component: AppComponent
            },
            {
                path: 'msg', component: AppComponent
            }
        ], {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
