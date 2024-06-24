import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private selectedDateSource = new BehaviorSubject<string | null>(null);
  selectedDate$ = this.selectedDateSource.asObservable();

  private selectedTabSubject = new Subject<string>();
  selectedTab$ = this.selectedTabSubject.asObservable();

  constructor(private http: HttpClient) { }

  changeDate(date: string | null): void {
    this.selectedDateSource.next(date);
  }

  changeTab(tab: string): void {
    this.selectedTabSubject.next(tab);
  }

  getEvents(): Observable<{ careGaps: Event[], upcomingEvents: Event[] }> {
    return this.http.get<{ careGaps: Event[], upcomingEvents: Event[] }>('assets/calendar-events.json');
  }
}