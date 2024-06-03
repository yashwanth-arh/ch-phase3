import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.scss']
})
export class NewPrescriptionComponent implements OnInit {
  medicineForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      medicines: this.fb.array([])
    });

    this.addMedicine(); // Initialize with one row
  }

  get medicines(): FormArray {
    return this.medicineForm.get('medicines') as FormArray;
  }

  addMedicine() {
    const medicineFG = this.fb.group({
      medicineName: ['', Validators.required],
      frequency: ['', Validators.required],
      dose: this.fb.array(['morning', 'afternoon', 'night'].map(day => new FormControl(false))),
      specialInstruction: ['', Validators.required],
      duration: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      startDate: ['', Validators.required]
    });

    this.medicines.push(medicineFG);
  }

  deleteMedicine(index: number) {
    this.medicines.removeAt(index);
  }

  onSubmit() {
    console.log(this.medicineForm.value);
  }

}
