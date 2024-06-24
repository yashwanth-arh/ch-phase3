import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-list/event-service/event.service';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})
export class CalendarsComponent implements OnInit {
  days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  dates: number[] = [];
  careGapsDates: number[] = [];
  upcomingEventsDates: number[] = [];

  currentMonth: number;
  currentYear: number;
  previousMonth: number;
  previousMonthYear: number;
  today: Date = new Date();
  monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  private lastSelectedDate: string | null = null;
  selectedDate: number | null = null;

  constructor(private eventService: EventService) {
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.previousMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.previousMonthYear = this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
  }

  ngOnInit(): void {
    this.generateDates(this.currentMonth, this.currentYear);
    this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
  }

  generateDates(month: number, year: number): void {
    this.dates = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
      this.dates.push(0); // Push zeros for padding
    }

    for (let i = 1; i <= daysInMonth; i++) {
      this.dates.push(i);
    }
  }

  fetchAndHighlightDates(month: number, year: number): void {
    this.eventService.getEvents().subscribe((data) => {
      this.careGapsDates = [];
      this.upcomingEventsDates = [];

      const careGaps = data.careGaps;
      const upcomingEvents = data.upcomingEvents;

      careGaps.forEach(event => {
        const [day, eventMonth, eventYear] = event.date.split('/').map(Number);
        if (eventMonth - 1 === month && eventYear === year) {
          this.careGapsDates.push(day);
        }
      });

      upcomingEvents.forEach(event => {
        const [day, eventMonth, eventYear] = event.date.split('/').map(Number);
        if (eventMonth - 1 === month && eventYear === year) {
          this.upcomingEventsDates.push(day);
        }
      });
    });
  }

  isCareGap(date: number): boolean {
    return this.careGapsDates.includes(date);
  }

  isUpcomingEvent(date: number): boolean {
    return this.upcomingEventsDates.includes(date);
  }

  showPreviousMonth(): void {
    this.currentMonth = this.previousMonth;
    this.currentYear = this.previousMonthYear;
    this.generateDates(this.currentMonth, this.currentYear);
    this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
  }

  showCurrentMonth(): void {
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.generateDates(this.currentMonth, this.currentYear);
    this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
  }

  isCurrentMonthDisplayed(): boolean {
    return this.currentMonth === this.today.getMonth() && this.currentYear === this.today.getFullYear();
  }

  isPreviousMonthDisplayed(): boolean {
    return this.currentMonth === this.previousMonth && this.currentYear === this.previousMonthYear;
  }

  selectDate(date: number): void {
    if (date === 0) return; // Ignore padding zeros

    const selectedDate = `${this.padDate(date)}/${this.padDate(this.currentMonth + 1)}/${this.currentYear}`;

    if (this.lastSelectedDate === selectedDate) {
      this.eventService.changeDate(null);
      this.lastSelectedDate = null;
      this.selectedDate = null;
    } else {
      this.eventService.changeDate(selectedDate);
      this.lastSelectedDate = selectedDate;
      this.selectedDate = date;
    }

    if (this.careGapsDates.includes(date)) {
      this.eventService.changeTab('careGaps');
    } else if (this.upcomingEventsDates.includes(date)) {
      this.eventService.changeTab('upcomingEvents');
    }
  }

  private padDate(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}



// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../event-list/event-service/event.service';

// @Component({
//   selector: 'app-calendars',
//   templateUrl: './calendars.component.html',
//   styleUrls: ['./calendars.component.scss']
// })
// export class CalendarsComponent implements OnInit {
//   days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   dates: number[] = [];
//   careGapsDates: number[] = [];
//   upcomingEventsDates: number[] = [];

//   currentMonth: number;
//   currentYear: number;
//   previousMonth: number;
//   previousMonthYear: number;
//   nextMonth: number;
//   nextMonthYear: number;
//   today: Date = new Date();
//   monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//   private lastSelectedDate: string | null = null;

//   constructor(private eventService: EventService) {
//     this.currentMonth = this.today.getMonth();
//     this.currentYear = this.today.getFullYear();
//     this.previousMonth = 0;
//     this.previousMonthYear = 0;
//     this.nextMonth = 0;
//     this.nextMonthYear = 0;
//     this.updateAdjacentMonths();
//   }

//   ngOnInit(): void {
//     this.generateDates(this.currentMonth, this.currentYear);
//     this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
//   }

//   generateDates(month: number, year: number): void {
//     this.dates = [];
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDay = new Date(year, month, 1).getDay();

//     for (let i = 0; i < firstDay; i++) {
//       this.dates.push(0); // Push zeros for padding
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       this.dates.push(i);
//     }
//   }

//   fetchAndHighlightDates(month: number, year: number): void {
//     this.eventService.getEvents().subscribe(data => {
//       this.careGapsDates = [];
//       this.upcomingEventsDates = [];

//       const careGaps = data.careGaps;
//       const upcomingEvents = data.upcomingEvents;

//       careGaps.forEach(event => {
//         const [day, eventMonth, eventYear] = event.date.split('/').map(Number);
//         if (eventMonth - 1 === month && eventYear === year) {
//           this.careGapsDates.push(day);
//         }
//       });

//       upcomingEvents.forEach(event => {
//         const [day, eventMonth, eventYear] = event.date.split('/').map(Number);
//         if (eventMonth - 1 === month && eventYear === year) {
//           this.upcomingEventsDates.push(day);
//         }
//       });
//     });
//   }

//   isCareGap(date: number): boolean {
//     return this.careGapsDates.includes(date);
//   }

//   isUpcomingEvent(date: number): boolean {
//     return this.upcomingEventsDates.includes(date);
//   }

//   showPreviousMonth(): void {
//     this.currentMonth = this.previousMonth;
//     this.currentYear = this.previousMonthYear;
//     this.updateAdjacentMonths();
//     this.generateDates(this.currentMonth, this.currentYear);
//     this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
//   }

//   showNextMonth(): void {
//     this.currentMonth = this.nextMonth;
//     this.currentYear = this.nextMonthYear;
//     this.updateAdjacentMonths();
//     this.generateDates(this.currentMonth, this.currentYear);
//     this.fetchAndHighlightDates(this.currentMonth, this.currentYear);
//   }

//   updateAdjacentMonths(): void {
//     this.previousMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
//     this.previousMonthYear = this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
//     this.nextMonth = this.currentMonth === 11 ? 0 : this.currentMonth + 1;
//     this.nextMonthYear = this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
//   }

//   selectDate(date: number): void {
//     if (date === 0) return; // Ignore padding zeros

//     const selectedDate = `${this.padDate(date)}/${this.padDate(this.currentMonth + 1)}/${this.currentYear}`;

//     if (this.lastSelectedDate === selectedDate) {
//       this.eventService.changeDate(null);
//       this.lastSelectedDate = null;
//     } else {
//       this.eventService.changeDate(selectedDate);
//       this.lastSelectedDate = selectedDate;
//     }

//     if (this.careGapsDates.includes(date)) {
//       this.eventService.changeTab('careGaps');
//     } else if (this.upcomingEventsDates.includes(date)) {
//       this.eventService.changeTab('upcomingEvents');
//     }
//   }

//   private padDate(value: number): string {
//     return value < 10 ? `0${value}` : `${value}`;
//   }
// }
