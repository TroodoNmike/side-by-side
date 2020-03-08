import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeHighlightService } from './code-highlight.service';
import { CodeComponent } from './code.component';

@NgModule({
    declarations: [
        CodeComponent
    ],
    exports: [
        CodeComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        CodeHighlightService
    ]
})
export class CodeModule {}
