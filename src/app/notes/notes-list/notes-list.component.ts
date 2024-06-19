import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/demo-page/data.service';
import { AddEditNotesComponent } from './add-edit-notes/add-edit-notes.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notesData: any;
  notesContent: any;
  data: any =
    '<p><strong>Subjective</strong></p><p>23 year old male w/ a chief complaint of: “my lower left back jaw has been sore for the fast few days” Pt relates history of swelling for past 3 days, asymptomatic previously.&nbsp;</p><p><strong>Objective</strong></p><p>No asymmetry, no swelling, patient points to exactly to #17 (FDI #38) for pain extraorally.&nbsp;</p><p><strong>Assessment</strong></p><ol><li>Asthmatic - exercise induced</li><li># 16 supraerupted and occluding on opposing gingiva</li><li># 17 Pericoronitis</li><li>Smoker</li></ol><p><strong>Plan</strong></p><p>Consent signed.</p><p>34mg Lidocaine + 0.017 mg epi Operculectomy # 17, Rx’d antibiotics, CHX 0.12% BID x 10 days,&nbsp;</p><p>Reappointed for exo # 17 under local anesthetic.</p>';
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.loadNotes().subscribe((res) => {
      console.log(res.notesData);

      this.notesData = res.notesData;
      this.notesContent = res.notesData[0];
    });
  }
  notesDescription(a: any) {
    console.log(a);
    this.notesContent = a;
  }
  openAddEditNotes(noteType: any) {
    this.dialog.open(AddEditNotesComponent, {
      data: {
        animal: 'panda',
        mode: 'edit',
        noteType: noteType,
      },
    });
  }
}
