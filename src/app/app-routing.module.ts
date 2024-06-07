import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { MedicineTabComponent } from './medicine-tab/medicine-tab.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CareGapChartComponent } from './care-gap-chart/care-gap-chart.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { CareGapEventsComponent } from './care-gap-events/care-gap-events.component';


const routes: Routes = [
  {
    path: 'prescription',
    component: DemoPageComponent
  },
   // {
  //   path: '',
  //   redirectTo: 'medicinetab',
  //   pathMatch: 'full',

  // },
  {
    path: 'caregaps',
    component: CareGapChartComponent
  },
  {
    path: 'lifestyle',
    component: LifeStyleComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'new',
    component: NewPrescriptionComponent
  },
  // {
  //   path: 'medicinetab',
  //   component: MedicineTabComponent
  // },
  // {
  //   path: '',
  //   pathMatch: 'prefix', //default
  //   redirectTo: 'medicinetab'
  // },



  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
  // {
  //   path: "",
  //   component: DemoPageComponent,
  // },
  // {
  //   path: "",
  //   redirectTo: "",
  //   pathMatch: "full",
  // },
  {
    path: "demo",
    component: DemoComponent,
  },
  {
    path: "new",
    component: NewPrescriptionComponent,
  },
  {
    path: "caregaps-events",
    component: CareGapEventsComponent,
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



  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
