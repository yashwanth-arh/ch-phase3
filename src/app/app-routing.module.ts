import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { MedicineTabComponent } from './medicine-tab/medicine-tab.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CareGapChartComponent } from './care-gap-chart/care-gap-chart.component';

const routes: Routes = [
  {
    path:'prescription',
    component:DemoPageComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'medicinetab',
  //   pathMatch: 'full',
    
  // },
  {
    path:'caregaps',
    component:CareGapChartComponent
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'new',
    component:NewPrescriptionComponent
  },
  {
    path:'medicinetab',
    component:MedicineTabComponent
  },
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'medicinetab'
  },



  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
