import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotesComponent } from './add-edit-notes.component';

describe('AddEditNotesComponent', () => {
  let component: AddEditNotesComponent;
  let fixture: ComponentFixture<AddEditNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
