import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CodeModule } from '../shared/code/code.module';
import { FrameworkModule } from './framework/framework.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CodeModule,
        FrameworkModule,
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
