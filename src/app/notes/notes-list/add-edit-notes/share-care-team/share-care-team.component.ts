import { Component, Inject, OnInit } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: "app-share-care-team",
  templateUrl: "./share-care-team.component.html",
  styleUrls: ["./share-care-team.component.scss"],
})
export class ShareCareTeamComponent implements OnInit {
  task: Task = {
    name: "Select All",
    completed: false,
    // color: "#01CD74",
    subtasks: [
      { name: "Dr. Suresh", completed: false },
      { name: "Raj", completed: false },
      { name: "Dr. Sham", completed: false },
    ],
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShareCareTeamComponent>
  ) {}

  ngOnInit(): void {}

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }
  closeDialog(val: any) {
    this.dialogRef.close(val);
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  teams(val: any) {
    this.dialogRef.close(val);
  }
}
