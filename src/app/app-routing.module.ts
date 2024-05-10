import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';

const routes: Routes = [
  {
    path:'',
    component:DemoPageComponent
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
    
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'new',
    component:NewPrescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
