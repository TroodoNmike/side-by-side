import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework.component';

@NgModule({
    declarations: [FrameworkComponent],
    exports: [
        FrameworkComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FrameworkModule { }
