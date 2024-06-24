import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from './event-service/event.service';
import { Event } from './event-service/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventListComponent implements OnInit {
  careGaps: Event[] = [];
  upcomingEvents: Event[] = [];
  selectedDate: string | null = null;
  selectedIndex: number = 0;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    // this.setDefaultDate();
    this.eventService.selectedDate$.subscribe(date => {
      this.selectedDate = date;
      this.loadEvents();
    });

    this.eventService.selectedTab$.subscribe(tab => {
      this.selectedIndex = tab === 'careGaps' ? 0 : 1;
    });

    this.loadEvents();
  }

  // setDefaultDate(): void {
  //   const today = new Date();
  //   const defaultDate = `${this.padDate(today.getDate())}/${this.padDate(today.getMonth() + 1)}/${today.getFullYear()}`;
  //   this.eventService.changeDate(defaultDate);
  // }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(data => {
      this.careGaps = data.careGaps;
      this.upcomingEvents = data.upcomingEvents;

      if (this.selectedDate) {
        this.careGaps = data.careGaps.filter(event => event.date === this.selectedDate);
        this.upcomingEvents = data.upcomingEvents.filter(event => event.date === this.selectedDate);
      } else {

      }
    });
  }

  private padDate(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { EventService } from './event-service/event.service';
// import { Event } from './event-service/event.model';

// @Component({
//   selector: 'app-event-list',
//   templateUrl: './event-list.component.html',
//   styleUrls: ['./event-list.component.scss'],
//   encapsulation: ViewEncapsulation.None,
// })
// export class EventListComponent implements OnInit {
//   careGaps: Event[] = [];
//   upcomingEvents: Event[] = [];
//   selectedDate: string | null = null;
//   selectedTabIndex = 0;

//   constructor(private eventService: EventService) { }

//   ngOnInit(): void {
//     this.setDefaultDate();
//     this.eventService.selectedDate$.subscribe(date => {
//       this.selectedDate = date;
//       this.loadEvents();
//     });

//     this.eventService.tabChange$.subscribe(tab => {
//       this.selectedTabIndex = tab === 'careGaps' ? 0 : 1;
//     });
//   }

//   setDefaultDate(): void {
//     const today = new Date();
//     const defaultDate = `${this.padDate(today.getDate())}/${this.padDate(today.getMonth() + 1)}/${today.getFullYear()}`;
//     this.eventService.changeDate(defaultDate);
//   }

//   loadEvents(): void {
//     this.eventService.getEvents().subscribe(data => {
//       if (this.selectedDate) {
//         this.careGaps = data.careGaps.filter((event: Event) => event.date === this.selectedDate);
//         this.upcomingEvents = data.upcomingEvents.filter((event: Event) => event.date === this.selectedDate);
//       } else {
//         this.careGaps = data.careGaps;
//         this.upcomingEvents = data.upcomingEvents;
//       }
//     });
//   }

//   private padDate(value: number): string {
//     return value < 10 ? `0${value}` : `${value}`;
//   }
// }
