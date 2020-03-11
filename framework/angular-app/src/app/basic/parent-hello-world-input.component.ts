import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello-world-input-parent',
    templateUrl: './parent-hello-world-input.component.html',
})
export class ParentHelloWorldInputComponent {

    @Input() inputMessage;
}
