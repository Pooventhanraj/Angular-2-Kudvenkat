import { Injectable } from '@angular/core';
import{IEmployee} from '../iemployee.employee';
import {HttpClient} from '@angular/common/http';
import { map,catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

 
  constructor(private _http :HttpClient) {
    
   }

   getEmployees(){
    return this._http.get<any>("https://localhost:44385/api/Employees/")
    .pipe(map((res:any)=>{
      
      console.log(res);
      return res;
    }) )
    
 
  }

  // getEmployees():IEmployee[]{
  //   return [
  //     {
  //               code: 'emp101', name: 'Tom', gender: 'Male',
  //               annualSalary: 5500, dateOfBirth: '25/6/1988'
  //           },
  //           {
  //               code: 'emp102', name: 'Alex', gender: 'Male',
  //               annualSalary: 5700.95, dateOfBirth: '9/6/1982'
  //           },
  //           {
  //               code: 'emp103', name: 'Mike', gender: 'Male',
  //               annualSalary: 5900, dateOfBirth: '12/8/1979'
  //           },
  //           {
  //               code: 'emp104', name: 'Mary', gender: 'Female',
  //               annualSalary: 6500.826, dateOfBirth: '14/10/1980'
  //           },
  //           {
  //             code: 'emp105', name: 'Nancy', gender: 'Female',
  //             annualSalary: 6500.826, dateOfBirth: '14/10/1980'
  //         },
  //         {
  //           code: 'emp106', name: 'Chris', gender: 'Male',
  //           annualSalary: 6500.826, dateOfBirth: '14/10/1980'
  //       }
  // ];
  }

