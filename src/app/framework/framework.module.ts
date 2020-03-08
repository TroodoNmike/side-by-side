import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework.component';
import { CodeModule } from '../../shared/code/code.module';

@NgModule({
    declarations: [FrameworkComponent],
    exports: [
        FrameworkComponent
    ],
    imports: [
        CommonModule,
        CodeModule
    ]
})
export class FrameworkModule { }
