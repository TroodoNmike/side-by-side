import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { CodeModule } from '../../shared/code/code.module';

@NgModule({
    declarations: [
        TabsComponent
    ],
    exports: [
        TabsComponent
    ],
    imports: [
        CommonModule,
        CodeModule
    ]
})
export class TabsModule {
}
