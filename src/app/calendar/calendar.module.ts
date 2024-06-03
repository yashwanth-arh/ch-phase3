import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalendarRoutingModule } from "./calendar-routing.module";
import { CalendarComponent } from "./calendar.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CalendarRoutingModule, MatIconModule],
})
export class CalendarModule {}
