import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOderComponent } from './your-oder.component';

describe('YourOderComponent', () => {
  let component: YourOderComponent;
  let fixture: ComponentFixture<YourOderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
