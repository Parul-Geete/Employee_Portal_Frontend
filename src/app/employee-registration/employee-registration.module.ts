import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EmployeeRegistrationComponent} from '../employee-registration/employee-registration.component';
 
@NgModule({
  declarations: [EmployeeRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EmployeeRegistrationComponent]
})
export class EmployeeRegistrationModule { 

}
