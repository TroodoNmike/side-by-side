import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-framework',
    templateUrl: './framework.component.html'
})
export class FrameworkComponent {

    @Input() url: string;
    @Input() description: string;

    constructor(public sanitizer: DomSanitizer) {
    }

}
