import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxZoomComponent } from './box-zoom.component';

describe('BoxZoomComponent', () => {
  let component: BoxZoomComponent;
  let fixture: ComponentFixture<BoxZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
