import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';

@NgModule({
    declarations: [
        BasicComponent
    ],
    exports: [
        BasicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BasicModule {
}
