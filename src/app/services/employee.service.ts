import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private registerUrl = "http://localhost:8080/human-resource/employee-management/emp/api/v1/register";
  private employeeListUrl ="http://localhost:8080/human-resource/employee-management/emp/api/v1/employees";
 
  constructor(private httpClient: HttpClient) { }

  registerEmployee(employee: Employee){   
    
    console.log(employee)
    return this.httpClient.post(this.registerUrl, employee, 
      {headers: new HttpHeaders({'Content-Type': 'application/json'}),
         responseType: 'text' as 'json'}).
         subscribe(data=>{
         console.log(data)
})

  }

  getEmployeesList(): Observable<Employee[]>{ 
    return this.httpClient.get<Employee[]>(`${this.employeeListUrl}`);
  }
}

