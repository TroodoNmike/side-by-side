import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackBlitzComponent } from './stack-blitz.component';



@NgModule({
    declarations: [StackBlitzComponent],
    exports: [
        StackBlitzComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StackBlitzModule { }
