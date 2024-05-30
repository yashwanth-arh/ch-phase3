import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-routing.module";
import { NotesComponent } from "./notes.component";
import { NotesListComponent } from "./notes-list/notes-list.component";
import { CarePlanComponent } from "./care-plan/care-plan.component";
import { DietPlanComponent } from "./diet-plan/diet-plan.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { AddEditNotesComponent } from "./notes-list/add-edit-notes/add-edit-notes.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { PatientSubHeaderComponent } from "../patient-sub-header/patient-sub-header.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ShareCareTeamComponent } from './notes-list/add-edit-notes/share-care-team/share-care-team.component';
import { AddEditDietPlanComponent } from './diet-plan/add-edit-diet-plan/add-edit-diet-plan.component';
import { AddEditCarePlanComponent } from './care-plan/add-edit-care-plan/add-edit-care-plan.component';

@NgModule({
  declarations: [
    NotesComponent,
    NotesListComponent,
    CarePlanComponent,
    DietPlanComponent,
    AddEditNotesComponent,
    PatientSubHeaderComponent,
    ShareCareTeamComponent,
    AddEditDietPlanComponent,
    AddEditCarePlanComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
  ],
})
export class NotesModule {}
