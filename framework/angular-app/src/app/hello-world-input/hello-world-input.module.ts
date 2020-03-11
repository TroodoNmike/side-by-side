import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldInputComponent } from './hello-world-input.component';

@NgModule({
    declarations: [
        HelloWorldInputComponent
    ],
    exports: [
        HelloWorldInputComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HelloWorldInputModule {
}
