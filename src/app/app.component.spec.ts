import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FrameworkModule } from './framework/framework.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsModule } from './tabs/tabs.module';
import { StackBlitzModule } from './stack-blitz/stack-blitz.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                FrameworkModule,
                TabsModule,
                StackBlitzModule,
                RouterTestingModule
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have loading property`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.loading).toEqual(true);
    });

});
