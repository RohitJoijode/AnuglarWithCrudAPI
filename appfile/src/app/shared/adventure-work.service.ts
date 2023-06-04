import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDimAccountList } from './adventure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdventureWorkService {
  constructor(public myhttp: HttpClient) { 
  }
    MemberUrl : string = "https://localhost:44398/api/AdventureWorks/GetDimAccount";
    GetDimAccountList : GetDimAccountList[]=[];
    //MemberData:Employee= new Employee();
  
    // saveEmployee() {
    //   return this.myhttp.post(this.MemberUrl,this.MemberData);
    // }
     
    // UpdateEmployee() {
    //   return this.myhttp.put(`${this.MemberUrl}/${this.MemberData.Id}`,this.MemberData);
    //  }

    GetDimAccount(): Observable<GetDimAccountList[]> {
        debugger;
        return this.myhttp.get<GetDimAccountList[]>(this.MemberUrl)
     }
}
