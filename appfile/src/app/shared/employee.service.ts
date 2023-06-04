import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, GetEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public myhttp: HttpClient) { 
  }
    MemberUrl : string = "https://localhost:44398/api/WeatherForecast/GetMember";
    listEmployee: Employee[]=[];
    GetEmployeeList : GetEmployee[]=[];
    MemberData:Employee= new Employee();
  
    saveEmployee() {
      return this.myhttp.post(this.MemberUrl,this.MemberData);
    }
     
    UpdateEmployee() {
      return this.myhttp.put(`${this.MemberUrl}/${this.MemberData.Id}`,this.MemberData);
     }

     getMember(): Observable<GetEmployee[]> {
        return this.myhttp.get<GetEmployee[]>(this.MemberUrl)
     }
}
