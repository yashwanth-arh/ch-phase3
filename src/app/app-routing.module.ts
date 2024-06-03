import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { DemoPageComponent } from "./demo-page/demo-page.component";
import { NewPrescriptionComponent } from "./new-prescription/new-prescription.component";

const routes: Routes = [
  {
    path: "",
    component: DemoPageComponent,
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "demo",
    component: DemoComponent,
  },
  {
    path: "new",
    component: NewPrescriptionComponent,
  },
  {
    path: "plans",
    loadChildren: () =>
      import("./notes/notes.module").then((m) => m.NotesModule),
  },
  {
    path: "calendar",
    loadChildren: () =>
      import("./calendar/calendar.module").then((m) => m.CalendarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
