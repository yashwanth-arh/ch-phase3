import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCarePlanComponent } from './add-edit-care-plan.component';

describe('AddEditCarePlanComponent', () => {
  let component: AddEditCarePlanComponent;
  let fixture: ComponentFixture<AddEditCarePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCarePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCarePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
