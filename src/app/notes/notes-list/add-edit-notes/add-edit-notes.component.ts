import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-add-edit-notes",
  templateUrl: "./add-edit-notes.component.html",
  styleUrls: ["./add-edit-notes.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AddEditNotesComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
