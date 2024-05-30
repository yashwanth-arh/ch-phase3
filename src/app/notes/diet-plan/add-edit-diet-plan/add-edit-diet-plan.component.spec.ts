import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDietPlanComponent } from './add-edit-diet-plan.component';

describe('AddEditDietPlanComponent', () => {
  let component: AddEditDietPlanComponent;
  let fixture: ComponentFixture<AddEditDietPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDietPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
