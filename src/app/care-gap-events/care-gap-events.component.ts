import { Component, OnInit } from '@angular/core';
import { DataService } from '../demo-page/data.service';
import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-care-gap-events',
  templateUrl: './care-gap-events.component.html',
  styleUrls: ['./care-gap-events.component.scss']
})
export class CareGapEventsComponent implements OnInit {
  calendarEvents: any;
  events: any[] = [];
  selectedDate!: Date;
  currentMonth!: number;
  currentYear!: number;
  startAt!: Date;
  monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private dataService: DataService,
    private eventService: DataService,
    private dateAdapter: DateAdapter<Date>) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.currentMonth = this.selectedDate.getMonth();
    this.currentYear = this.selectedDate.getFullYear();
    this.startAt = new Date(this.currentYear, this.currentMonth, 1);
    this.loadEvents();
  }
  loadEvents(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data.events;
    });
  }

  dateChanged(event: any): void {
    console.log("Selected date:", event);
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateCalendar();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateCalendar();
  }

  updateCalendar(): void {
    this.startAt = new Date(this.currentYear, this.currentMonth, 1);
    this.dateAdapter.setLocale(this.startAt); // Force the calendar to update
  }
  // getevents() {
  //   this.dataService.getCalendarEvents().subscribe((data) => {


  //     this.calendarEvents = data;
  //   });
  // }
}
