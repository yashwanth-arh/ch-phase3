import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ShareCareTeamComponent } from './share-care-team/share-care-team.component';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddEditNotesComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';
  isEditable = [true, true, true, true];
  isGeneral: boolean = true;
  notes = ['General', 'SOAP', 'APSO', 'CAPS'];
  plansFieldNames = ['Subjective', 'Objective', 'Assessment', 'Plan'];
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
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  notesType(e: any) {
    if (e.value === 'General') {
      this.isGeneral = true;
    } else if (e.value === 'SOAP') {
      this.updateFormControls();
      this.isGeneral = false;
      this.plansFieldNames = ['Subjective', 'Objective', 'Assessment', 'Plan'];
      this.planForms = this.fb.group({
        Subjective: [
          '23 year old male w/ a chief complaint of: “my lower left back jaw has been sore for the fast few days” Pt relates history of swelling for past 3 days, asymptomatic previously.',
        ],
        Objective: [
          'No asymmetry, no swelling, patient points to exactly to #17 (FDI #38) for pain extraorally.',
        ],
        Assessment: [
          '1.  Asthmatic - exercise induced 16 supraerupted and occluding on opposing gingiva 17 Pericoronitis Smoker',
        ],
        Plan: [
          'Consent signed.34mg Lidocaine + 0.017 mg epi Operculectomy # 17, Rx’d antibiotics, CHX 0.12% BID x 10 days, Reappointed for exo # 17 under local anesthetic.',
        ],
      });
    } else if (e.value === 'APSO') {
      this.updateFormControls();
      this.isGeneral = false;
      this.plansFieldNames = ['Assessment', 'Plan', 'Subjective', 'Objective'];
      // this.planForms.removeControl("Assessment");
      // this.planForms.removeControl("Plan");
      // this.planForms.removeControl("Subjective");
      // this.planForms.removeControl("Objective");
      // this.planForms = this.fb.group({
      //   A: ["tgrtgrtg"],
      //   B: ["trgrtgr"],
      //   C: ["1500 Calories"],
      //   D: ["5 gm Protein"],
      // });
      this.planForms.addControl(
        'Assessment',
        this.fb.control(
          '23 year old male w/ a chief complaint of: “my lower left back jaw has been sore for the fast few days” Pt relates history of swelling for past 3 days, asymptomatic previously.'
        )
      );
      this.planForms.addControl(
        'Plan',
        this.fb.control(
          'No asymmetry, no swelling, patient points to exactly to #17 (FDI #38) for pain extraorally.'
        )
      );
      this.planForms.addControl(
        'Subjective',
        this.fb.control(
          '1.  Asthmatic - exercise induced 16 supraerupted and occluding on opposing gingiva 17 Pericoronitis Smoker'
        )
      );
      this.planForms.addControl(
        'Objective',
        this.fb.control(
          'Consent signed.34mg Lidocaine + 0.017 mg epi Operculectomy # 17, Rx’d antibiotics, CHX 0.12% BID x 10 days, Reappointed for exo # 17 under local anesthetic.'
        )
      );
    } else if (e.value === 'CAPS') {
      this.updateFormControls();
      this.isGeneral = false;
      this.plansFieldNames = [
        'Concern',
        'Assessment',
        'Plan',
        'Supporting objective and subjective information',
      ];
      // this.planForms.removeControl("Assessment");
      // this.planForms.removeControl("Plan");
      // setTimeout(() => {
      //   this.planForms = this.fb.group({
      //     C: ["tgrtgrtg"],
      //     A: ["trgrtgr"],
      //     P: ["1500 Calories"],
      //     S: ["5 gm Protein"],
      //   });
      // }, 1000);
      this.planForms.addControl('Concern', this.fb.control('New Value B'));
      this.planForms.addControl(
        'Assessment',
        this.fb.control(
          '1.  Asthmatic - exercise induced \n2. supraerupted and occluding on \n3. opposing gingiva \n4. Pericoronitis Smoker'
        )
      );
      this.planForms.addControl('Plan', this.fb.control('New Value B'));
      this.planForms.addControl(
        'Supporting objective and subjective information',
        this.fb.control('New Value B')
      );
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
  openCareTeam(e: any) {
    if (e.checked) {
      this.team = e.checked;
      this.dialog
        .open(ShareCareTeamComponent, {
          data: {
            Id: '123',
          },
          width: '500px', // Set the desired width
          height: '400px',
        })
        .afterClosed()
        .subscribe((val) => {
          this.team = val;
          this.isDisable = val;
        });
    }
  }
  savePlans(val: any) {
    console.log(val);
  }
}
