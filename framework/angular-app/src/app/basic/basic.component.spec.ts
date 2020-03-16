import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
    let component: BasicComponent;
    let fixture: ComponentFixture<BasicComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BasicComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        fixture = TestBed.createComponent(BasicComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('I am basic component');
    });
});
