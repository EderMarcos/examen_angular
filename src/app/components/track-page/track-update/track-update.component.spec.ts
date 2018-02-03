import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackUpdateComponent } from './track-update.component';

describe('TrackUpdateComponent', () => {
  let component: TrackUpdateComponent;
  let fixture: ComponentFixture<TrackUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
