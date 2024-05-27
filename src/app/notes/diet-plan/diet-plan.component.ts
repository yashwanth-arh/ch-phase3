import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/demo-page/data.service';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {
  notesData: any;
  notesContent: any;
  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.loadNotes().subscribe((res) => {
      console.log(res.dietPlanData);
      
    this.notesData=res.dietPlanData;
    this.notesContent=res.dietPlanData[0];
    });
  }
  notesDescription(a:any){
    console.log(a);
    this.notesContent=a;

  }

}
