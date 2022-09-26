import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../iemployee.employee';
import {EmployeeServiceService} from '../services/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeServiceService]
})
export class EmployeeListComponent implements OnInit {
  employees!: IEmployee[];
  selectedEmployeeCountRadioButton: string = 'All';
  constructor(private _employeeService : EmployeeServiceService) { 
 
  }

  ngOnInit(): void {
    
    this._employeeService.getEmployees().subscribe(result=>{
      console.log(result);
      this.employees=result;
    })
    
  }


  getallEmployeeCount () :number{

    return this.employees.length;
  }
  getFemaleEmployeeCount() :number{
    return  this.employees.filter(e=>e.gender==="Female").length;
  }
  getMaleEmployeeCount() :number{
    return  this.employees.filter(e=>e.gender==="Male").length;
  }
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

}
