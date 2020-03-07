import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code-highlight.service';
import { NgbdCodeComponent } from './code.component';

@NgModule({
    declarations: [
        NgbdCodeComponent
    ],
    exports: [
        NgbdCodeComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        CodeHighlightService
    ]
})
export class NgbdCodeModule {}
