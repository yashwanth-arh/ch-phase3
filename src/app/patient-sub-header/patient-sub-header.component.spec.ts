import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSubHeaderComponent } from './patient-sub-header.component';

describe('PatientSubHeaderComponent', () => {
  let component: PatientSubHeaderComponent;
  let fixture: ComponentFixture<PatientSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSubHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
