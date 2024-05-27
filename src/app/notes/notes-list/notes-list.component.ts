import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/demo-page/data.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notesData: any;
  notesContent: any;
  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.loadNotes().subscribe((res) => {
      console.log(res.notesData);
      
    this.notesData=res.notesData;
    this.notesContent=res.notesData[0];
    });
  }
  notesDescription(a:any){
    console.log(a);
    this.notesContent=a;

  }
}
