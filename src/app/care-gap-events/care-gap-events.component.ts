import { Component, OnInit } from '@angular/core';
import { DataService } from '../demo-page/data.service';

@Component({
  selector: 'app-care-gap-events',
  templateUrl: './care-gap-events.component.html',
  styleUrls: ['./care-gap-events.component.scss']
})
export class CareGapEventsComponent implements OnInit {
  calendarEvents: any;
  constructor(private dataService: DataService,) { }

  ngOnInit(): void {
    this.getevents()
  }
  getevents() {
    this.dataService.getCalendarEvents().subscribe((data) => {
      console.log(data);
      
      this.calendarEvents = data;
    });
  }
}
