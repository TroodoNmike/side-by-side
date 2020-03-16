import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-basic-input',
    templateUrl: './basic-input.component.html',
})
export class BasicInputComponent {
    @Input() msg;
}
