import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-care-gap-chart',
  templateUrl: './care-gap-chart.component.html',
  styleUrls: ['./care-gap-chart.component.scss']
})
export class CareGapChartComponent implements OnInit {
  chartsData = [
    {
      topic: 'Missed Appointments',
      value: 80,
      name: '3 times'
    },
    {
      topic: 'Medication Missed',
      value: 65,
      name: '5 times'
    },
    {
      topic: 'Tests Missed',
      value: 50,
      name: '2 times'
    },
    {
      topic: 'Missed Screenings',
      value: 70,
      name: '4 times'
    },
    {
      topic: 'Others',
      value: 90,
      name: '6 times'
    }
  ];

  chartOptions: EChartsOption[] = [];

  constructor() { }
  
  ngOnInit() {
    this.chartOptions = this.chartsData.map(data => this.createChartOption(data));
  }

  createChartOption(data: any): EChartsOption {
    return {
      series: [
        {
          type: 'gauge',
          startAngle: 255, // Start from the bottom
          endAngle: -270, // End at the top
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: '#f44336' // Changed color to orange
            }
          },
          axisLine: {
            lineStyle: {
              width: 40
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [
            {
              value: data.value,
              name: data.name,
              title: {
                offsetCenter: ['0%', '20%']
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '0%']
              }
            }
          ],
          title: {
            fontSize: 20,
            color: '#a1a1a1'
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 30,
            color: '#056897', // Changed color to orange
            formatter: '{value}%'
          }
        }
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: '92%', // Position the text below the gauge
            style: {
              text: data.topic,
              fontSize: 20,
              fill: '#a1a1a1' // Text color
            }
          }
        ]
      }
    };
  }

}
