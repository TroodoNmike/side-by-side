import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeModule } from '../shared/code/code.module';
import { FrameworkModule } from './framework/framework.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CodeModule,
        FrameworkModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
