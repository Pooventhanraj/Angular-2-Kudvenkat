import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLocaleLowerCase() =="male")
    {
      return "MR . "+value;
    }
    else{
      return "MRS . "+value;
    }
  }

}
