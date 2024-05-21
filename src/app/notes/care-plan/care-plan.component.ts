import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/demo-page/data.service';

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.component.html',
  styleUrls: ['./care-plan.component.scss']
})
export class CarePlanComponent implements OnInit {

  notesData: any;
  notesContent: any;
  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.loadNotes().subscribe((res) => {
      console.log(res.carePlanData);
      
    this.notesData=res.carePlanData;
    this.notesContent=res.carePlanData[0];
    });
  }
  notesDescription(a:any){
    console.log(a);
    this.notesContent=a;

  }

}
