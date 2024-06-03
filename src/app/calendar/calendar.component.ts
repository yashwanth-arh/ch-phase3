import {
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "cui-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  currentYear!: number;
  currentMonth!: number;
  currentDate!: number;
  nextMonthVal!: number;
  nextMonthYear!: number;
  prevMonthVal!: number;
  prevMonthYear!: number;
  selectedDay: number | null = null;
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  calendarDays: number[][] = [];
  missedActivities: any = {
    "2024-04-29": ["Vaccination missed"],
    "2024-04-23": ["Medication missed"],
    "2024-04-17": ["Test missed"],
    "2024-05-05": ["Appointment missed"],
    "2024-05-15": ["Follow-up missed"],
    "2024-06-01": ["Routine check-up missed", "Hello"],

    "2024-06-10": ["Consultation missed"],
  };
  displayedMissedActivities: { date: Date; name: string }[] = [];
  isSelectedDay: boolean = false;
  showPrevButton: boolean = true;
  showNextButton: boolean = true;

  ngOnInit() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.currentDate = today.getDate();
    this.nextMonthVal = (this.currentMonth + 1) % 12;
    this.nextMonthYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    this.prevMonthVal = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.prevMonthYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.updateButtonVisibility();
    this.generateCalendar();
    this.loadMissedActivities();
  }

  generateCalendar() {
    this.calendarDays = [];
    const firstDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: any = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      this.calendarDays.push(week);
    }
  }

  isToday(day: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      this.currentMonth === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  hasMissedActivity(day: number): boolean {
    if (!day) return false;
    const date = new Date(this.currentYear, this.currentMonth, day);
    return !!this.missedActivities[this.formatDate(date)];
  }

  selectDay(day: number) {
    this.isSelectedDay = true;
    this.selectedDay = day;
    this.loadMissedActivities();
  }

  isSelected(day: number): boolean {
    return this.selectedDay === day ? true : false;
  }

  prevMonth() {
    // if (this.currentMonth === 0) {
    //   this.currentMonth = 11;
    //   this.currentYear--;
    // } else {
    //   this.currentMonth--;
    // }
    // this.nextMonthVal = (this.currentMonth + 1) % 12;
    // this.nextMonthYear =
    //   this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    // this.generateCalendar();
    // this.loadMissedActivities();
    const today = new Date();
    if (
      this.currentMonth === today.getMonth() - 1 ||
      (today.getMonth() === 0 && this.currentMonth === 11)
    ) {
      console.log("preMonth");

      return;
    }

    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.prevMonthVal = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.prevMonthYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.updateButtonVisibility();
    this.generateCalendar();
    this.loadMissedActivities();
  }

  nextMonth() {
    // if (this.currentMonth === 11) {
    //   this.currentMonth = 0;
    //   this.currentYear++;
    // } else {
    //   this.currentMonth++;
    // }
    // this.nextMonthVal = (this.currentMonth + 1) % 12;
    // this.nextMonthYear =
    //   this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    // this.generateCalendar();
    // this.loadMissedActivities();

    // Disable next month button when displaying next month
    const today = new Date();
    if (this.currentMonth === today.getMonth()) {
      console.log("preMonth");
      return;
    }

    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.prevMonthVal = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.prevMonthYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.updateButtonVisibility();
    this.generateCalendar();
    this.loadMissedActivities();
  }

  updateButtonVisibility() {
    const today = new Date();
    this.showPrevButton = !(
      this.currentMonth === today.getMonth() - 1 ||
      (today.getMonth() === 0 && this.currentMonth === 11)
    );
    this.showNextButton = !(this.currentMonth === today.getMonth());
  }

  loadMissedActivities() {
    this.displayedMissedActivities = [];
    if (this.selectedDay !== null) {
      const selectedDateKey = `${this.currentYear}-${String(
        this.currentMonth + 1
      ).padStart(2, "0")}-${String(this.selectedDay).padStart(2, "0")}`;
      const activities = this.missedActivities[selectedDateKey];
      if (activities) {
        (activities as string[]).forEach((activity) => {
          this.displayedMissedActivities.push({
            date: new Date(selectedDateKey),
            name: activity,
          });
        });
      }
    } else {
      const currentMonthKey = `${this.currentYear}-${String(
        this.currentMonth + 1
      ).padStart(2, "0")}`;
      const nextMonthKey = `${this.nextMonthYear}-${String(
        this.nextMonthVal + 1
      ).padStart(2, "0")}`;

      for (const [date, activities] of Object.entries(this.missedActivities)) {
        if (date.startsWith(currentMonthKey) || date.startsWith(nextMonthKey)) {
          (activities as string[]).forEach((activity) => {
            this.displayedMissedActivities.push({
              date: new Date(date),
              name: activity,
            });
          });
        }
      }
    }
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  }
}
