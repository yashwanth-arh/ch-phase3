import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {   
     
    return this.http.get('/assets/demoData.json');
  }
  lodeDepartments(): Observable<any> {
    return this.http.get('assets/demo-exampleData.json');
  }
  lodeEmpelyees(): Observable<any>{
    return this.http.get('assets/getEmployee.json')
  }
  createEMp(): Observable<any>{
    return this.http.get('assets/postEmployee.json')
  }

}
