import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AddEditNotesComponent } from "./notes-list/add-edit-notes/add-edit-notes.component";
import { MatDialog } from "@angular/material/dialog";
import { AddEditDietPlanComponent } from "./diet-plan/add-edit-diet-plan/add-edit-diet-plan.component";
import { AddEditCarePlanComponent } from "./care-plan/add-edit-care-plan/add-edit-care-plan.component";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NotesComponent implements OnInit {
  tabIndex: any = 0;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(tabIndex: any) {
    if (tabIndex === 0) {
      this.dialog.open(AddEditNotesComponent, {
        data: {
          animal: "panda",
        },
      });
    } else if (tabIndex === 1) {
      this.dialog.open(AddEditCarePlanComponent, {
        data: {
          animal: "panda",
        },
      });
    } else if (tabIndex === 2) {
      this.dialog.open(AddEditDietPlanComponent, {
        data: {
          animal: "panda",
        },
      });
    }
  }
  getTabNames(e: any) {
    this.tabIndex = e;
  }
}
