import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrescriptionComponent } from './new-prescription.component';

describe('NewPrescriptionComponent', () => {
  let component: NewPrescriptionComponent;
  let fixture: ComponentFixture<NewPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
