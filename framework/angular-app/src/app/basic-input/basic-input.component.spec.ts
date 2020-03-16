import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputComponent } from './basic-input.component';

describe('BasicInputComponent', () => {
    let component: BasicInputComponent;
    let fixture: ComponentFixture<BasicInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BasicInputComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        fixture = TestBed.createComponent(BasicInputComponent);
        component = fixture.componentInstance;
        component.msg = 'I am message';
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('I am message');
    });
});
