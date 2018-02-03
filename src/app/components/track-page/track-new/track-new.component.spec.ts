import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNewComponent } from './track-new.component';

describe('TrackNewComponent', () => {
  let component: TrackNewComponent;
  let fixture: ComponentFixture<TrackNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
