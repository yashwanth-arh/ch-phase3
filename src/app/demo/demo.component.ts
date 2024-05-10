import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../demo-page/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  department: any[] = [];
  employeesLest: any[] = []
  isListView: boolean = true;
  employeeObject: any = {
    "firstName": "",
    "lastName": "",
    "departementId": "",
    "gender": "",
    "email": "",
    "phoneNo": ""
  }


  constructor(private dataService: DataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.lodedepartment()
    this.lodeEmp()
  }



  lodedepartment() {
    this.dataService.lodeDepartments().subscribe((res: any) => {
      this.department = res.data
    })
  }
  lodeEmp() {
    this.dataService.lodeEmpelyees().subscribe((res: any) => {
      console.log(res);
      this.employeesLest = res.data
    })
  }
  onCreateEmp() {
    this.dataService.createEMp().subscribe((res) => {
      alert(res.massage)
      this.lodeEmp()
      this.isListView = true
    })
  }
  onEdit(item: any) {
    this.employeeObject = item;
    this.isListView = false
  }
  onDelete(item: any) {
    alert('Deleted Employee succfuly')
  }
}