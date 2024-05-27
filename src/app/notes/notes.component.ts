import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AddEditNotesComponent } from "./notes-list/add-edit-notes/add-edit-notes.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NotesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AddEditNotesComponent, {
      data: {
        animal: "panda",
      },
    });
  }
}
