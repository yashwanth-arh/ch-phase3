import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { CarePlanComponent } from './care-plan/care-plan.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';


@NgModule({
  declarations: [
    NotesComponent,
    NotesListComponent,
    CarePlanComponent,
    DietPlanComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
