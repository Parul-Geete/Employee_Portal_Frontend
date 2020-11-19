import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service'
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  isDisplay: Boolean;
  employee: any=[];
  employeeList: any=[];
  name: string;
  dept:string;
  gen:string;
  fName:string;
  lName:string;
  dob:Date;
  department = [
    {name: "Human Resources"},
    {name: "Marketing Department"},
    {name: "IT Services"},
    {name: "Finance Department"}
  ];
  constructor(private employeeService: EmployeeService, private _router: Router) { 

  }
  ngOnInit() {
    this.isDisplay= false;
  }

  getEmployeeList()
  {
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employeeList = data;
    });
    this.isDisplay= true;
  }

  submit(form: NgForm)
  {
    console.log(this.dept)
    console.log(this.fName)
    console.log(this.lName)
    console.log(this.gen)
    console.log(this.dob)
    if(this.fName != null && this.lName != null && this.dob != null && this.gen != null && this.department != null)
    {
      this.employee = {firstName: this.fName, lastName: this.lName, gender: this.gen, dob: this.dob, department: this.dept};
      let response = this.employeeService.registerEmployee(this.employee);
      console.log(response);
      form.reset();
    }
    else
    {
      alert("Please fillout all the fields");
    }
  }
}



