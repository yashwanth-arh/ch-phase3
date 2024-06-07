import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGapEventsComponent } from './care-gap-events.component';

describe('CareGapEventsComponent', () => {
  let component: CareGapEventsComponent;
  let fixture: ComponentFixture<CareGapEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareGapEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareGapEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
