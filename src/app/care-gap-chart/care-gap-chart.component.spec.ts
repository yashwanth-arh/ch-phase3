import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGapChartComponent } from './care-gap-chart.component';

describe('CareGapChartComponent', () => {
  let component: CareGapChartComponent;
  let fixture: ComponentFixture<CareGapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareGapChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareGapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
