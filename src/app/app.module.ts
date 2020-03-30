import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameworkModule } from './framework/framework.module';
import { RouterModule } from '@angular/router';
import { TabsModule } from './tabs/tabs.module';
import { HttpClientModule } from '@angular/common/http';
import { StackBlitzModule } from './stack-blitz/stack-blitz.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FrameworkModule,
        TabsModule,
        StackBlitzModule,
        HttpClientModule,
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
