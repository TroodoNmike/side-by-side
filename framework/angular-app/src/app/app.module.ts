import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { BasicInputModule } from './basic-input/basic-input.module';
import { ParentBasicComponent } from './parent/parent-basic.component';
import { ParentBasicInputComponent } from './parent/parent-basic-input.component';
import { BasicModule } from './basic/basic.module';

@NgModule({
    declarations: [
        AppComponent,
        ParentBasicComponent,
        ParentBasicInputComponent,
    ],
    imports: [
        BrowserModule,
        BasicModule,
        BasicInputModule,
        RouterModule.forRoot([
            {
                path: '', component: BasicComponent
            },
            {
                path: 'msg', component: ParentBasicInputComponent
            },
        ], {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
