import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-care-plan',
  templateUrl: './add-edit-care-plan.component.html',
  styleUrls: ['./add-edit-care-plan.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddEditCarePlanComponent implements OnInit {
  isEditable = [true, true, true, true];
  isGeneral: boolean = true;
  minDate: any = new Date();
  notes = [
    'General',
    'Blood pressure care plan',
    'Blood pressure home care plan',
    'Cholesterol care plan',
    'Cholesterol home care plan',
  ];
  plansFieldNames = [
    { name: 'Assessment', formControlName: 'assessment' },
    {
      name: 'Healthcare Needs and Goals',
      formControlName: 'healthcareNeedsAndGoals',
    },
    {
      name: 'Interventions & Treatments',
      formControlName: 'interventionsTreatments',
    },
  ];
  planForms: any;
  generalForm: any;
  headerForm: any;
  team: boolean = false;
  isDisable: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.headerForm = this.fb.group({
      noteType: ['General'],
      title: [],
      validity: [new Date()],
    });
    this.planForms = this.fb.group({
      Subjective: [''],
      Objective: [''],
      Assessment: [''],
      Plan: [''],
    });
    this.generalForm = this.fb.group({
      generalNote: [],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }
  notesType(e: any) {
    if (e.value === 'General') {
      this.isGeneral = true;
    } else {
      this.updateFormControls();
      this.isGeneral = false;
      //   this.plansFieldNames = [
      //     {name:"Assessment",
      //       formControlName:"assessment"
      //     },
      //     {name:"Healthcare Needs and Goals",
      //     formControlName:"healthcareNeedsAndGoals"
      //   }, {name:"Interventions & Treatments",
      //   formControlName:"interventionsTreatments"
      // }];
      this.planForms = this.fb.group({
        assessment: [
          '23 year old male w/ a chief complaint of: “my lower left back jaw has been sore for the fast few days” Pt relates history of swelling for past 3 days, asymptomatic previously.',
        ],
        healthcareNeedsAndGoals: [
          'No asymmetry, no swelling, patient points to exactly to #17 (FDI #38) for pain extraorally.',
        ],
        interventionsTreatments: [
          '1.  Asthmatic - exercise induced 16 supraerupted and occluding on opposing gingiva 17 Pericoronitis Smoker',
        ],
      });
    }
  }
  updateFormControls() {
    // Remove all existing controls
    Object.keys(this.planForms.controls).forEach((key) => {
      this.planForms.removeControl(key);
    });
  }
  openEdit(e: any) {
    this.isEditable[e] = !this.isEditable[e];
    console.log(e);
  }

  getName(e: any) {
    return e;
  }

  savePlans(val: any) {
    console.log(val);
  }
}
