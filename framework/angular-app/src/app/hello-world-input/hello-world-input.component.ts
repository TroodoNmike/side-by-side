import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hello-world-input',
    templateUrl: './hello-world-input.component.html',
})
export class HelloWorldInputComponent {
    @Input() msg;
}
