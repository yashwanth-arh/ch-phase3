import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotesComponent } from "./notes.component";
import { NotesListComponent } from "./notes-list/notes-list.component";
import { DietPlanComponent } from "./diet-plan/diet-plan.component";
import { CarePlanComponent } from "./care-plan/care-plan.component";

const routes: Routes = [
  { path: "", component: NotesComponent },
  { path: "notes", component: NotesListComponent },
  { path: "diet-plan", component: DietPlanComponent },
  { path: "care-plan", component: CarePlanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
