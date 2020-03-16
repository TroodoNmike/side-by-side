import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInputComponent } from './basic-input.component';

@NgModule({
    declarations: [
        BasicInputComponent
    ],
    exports: [
        BasicInputComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BasicInputModule {
}
