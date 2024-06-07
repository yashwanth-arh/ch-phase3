import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoPageComponent implements OnInit {
  prescriptions: Prescription[] = [];
  isListView: boolean = false;
  prescriptionForm!: FormGroup;
  labelPosition: any = 'medication';
  searchText: string = '';
  selected = '';
  value = 0; // Initial value
  formulation: any = [
    "Once a day",
    "Twice a day",
    "Three times a day",
    "Once a week",
    "Every two weeks",
    "Per fortnight"
  ]
  userMedication: any;
  tabchange: any;
  userReports: any;
  otherReports: any;
  myControl = new FormControl();
  options: string[] = [];
  // form: FormGroup;
  filteredOptions!: Observable<string[]>;
  madOpt: any;
  currentFormulation: string = '';
  addPrescriptionName: any;
  addLabTestName: any;
  addOthersName: any;
  constructor(private dataService: DataService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.getNames());
    this.getNames()
    this.changeTab('')
    this.addPrescription('value')
    this.prescriptionForm = this.fb.group({
      medicationName: [this.labelPosition],
      formulation: [''],
      checkboxOptions: this.fb.group({
        morning: false,
        afternoon: false,
        night: false
      }), // Assuming 3 checkboxes
      intakeTime: [''],
      quantity: [''],
      date: ['']
    });
  }
  onDelete() {
    alert('Deleted succfuly')
  }
  addPrescription(item: any) {
    console.log(item.Name);
    if (this.labelPosition === 'medication') {

      this.addPrescriptionName = item.Name
    }
    else if (this.labelPosition === 'labTest') {

      this.addLabTestName = item.Name
    }
    else if (this.labelPosition === 'others') {

      this.addOthersName = item.Name
    }
  }
  get medicines(): FormArray {
    return this.prescriptionForm.get('medicines') as FormArray;
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
  getNames() {
    if (this.labelPosition === 'medication') {
      this.options = []
      this.dataService.getUsers().subscribe((res) => {
        console.log(this.options);
        this.options = res.userPrescription
        this.madOpt = res.userPrescription
      })
    } if (this.labelPosition === 'labTest') {
      this.options = []
      this.dataService.getUsers().subscribe((res) => {
        this.options = res.userReports
        console.log(this.options);

      })
    } else if (this.labelPosition === 'others') {
      this.options = []
      this.dataService.getUsers().subscribe((res) => {
        this.options = res.otherReports
        console.log(this.options);
      })
    }
  }
  displayName(e: any) {
    return e.Name
  }
  displayFn(item: any): string {
    return item && item.Name ? item.Name : '';
  }
  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (this.labelPosition === 'medication') {
      this.dataService.getUsers().subscribe((res) => {
        this.userMedication = res.userPrescription;
      })
    } else if (this.labelPosition === 'labTest') {
      this.dataService.getUsers().subscribe((res) => {
        this.userReports = res.userReports
      })
    } else if (this.labelPosition === 'others') {
      this.dataService.getUsers().subscribe((res) => {
        this.otherReports = res.otherReports
      })
    }
  }
  changeTab(event: any) {
    this.labelPosition = event.value
    this.getNames()
  }

  onSearchClick(): void {
    this.getNames();
  }
  onFormulationChange(value: string) {
    const checkboxOptions = this.prescriptionForm.get('checkboxOptions');
    if (checkboxOptions) {
      // Check if checkboxOptions is not null
      if (value === 'Once a day') {
        checkboxOptions.patchValue({
          morning: true,
          afternoon: false,
          night: false,
        });
      } else {
        checkboxOptions.patchValue({
          morning: false,
          afternoon: false,
          night: false,
        });

        const morningCheckbox = this.prescriptionForm.get(
          'checkboxOptions.morning'
        );
        const afternoonCheckbox = this.prescriptionForm.get(
          'checkboxOptions.afternoon'
        );
        const nightCheckbox = this.prescriptionForm.get(
          'checkboxOptions.night'
        );
        if (morningCheckbox && afternoonCheckbox && nightCheckbox) {
          morningCheckbox.enable();
          afternoonCheckbox.enable();
          nightCheckbox.enable();
        }
      }
    }
  }
  checkbox(eve: any) {
    const checkboxOptions = this.prescriptionForm.get('checkboxOptions');
    const formulation = this.prescriptionForm.value.formulation;
    if (!checkboxOptions || !formulation) {
      return;
    }
    if (formulation === 'Once a day') {
      this.handleOnceADayCheckboxSelection(eve, checkboxOptions);
    } else if (formulation === 'Twice a day') {
      this.handleTwiceADayCheckboxSelection();
    }
  }

  private handleOnceADayCheckboxSelection(eve: any, checkboxOptions: any) {
    checkboxOptions.patchValue({
      morning: eve.source?.value === 'morning',
      afternoon: eve.source?.value === 'afternoon',
      night: eve.source?.value === 'night',
    });
  }

  private handleTwiceADayCheckboxSelection() {
    const morningCheckbox = this.prescriptionForm.get(
      'checkboxOptions.morning'
    );
    const afternoonCheckbox = this.prescriptionForm.get(
      'checkboxOptions.afternoon'
    );
    const nightCheckbox = this.prescriptionForm.get('checkboxOptions.night');
    if (morningCheckbox && afternoonCheckbox && nightCheckbox) {
      // Enable all checkboxes initially
      morningCheckbox.enable();
      afternoonCheckbox.enable();
      nightCheckbox.enable();
      // Check conditions and disable checkboxes accordingly
      if (morningCheckbox.value && afternoonCheckbox.value) {
        nightCheckbox.disable();
      } else if (morningCheckbox.value && nightCheckbox.value) {
        afternoonCheckbox.disable();
      } else if (afternoonCheckbox.value && nightCheckbox.value) {
        morningCheckbox.disable();
      }
    }
  }
}
export interface Prescription {
  medicationName: string;
  formulation: string;
  checkboxOptions: boolean[];
  intakeTime: string; // e.g., "Before food", "After food"
  quantity: number;
  date: Date;
}