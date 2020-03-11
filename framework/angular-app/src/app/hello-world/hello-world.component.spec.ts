import { async, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('I am hello world component');
  });
});
