import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Indicator {
  date: string;
  indicators: string[];
}

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.scss']
})
export class LifeStyleComponent implements OnInit {

  displayedColumns: string[] = ['date', 'indicators'];
  dataSource: Indicator[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<Indicator[]>('assets/lifestyleIndicators.json')
      .subscribe(data => this.dataSource = data);
  }
}
