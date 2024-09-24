import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralNavbarComponent } from '../general-navbar/general-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [GeneralNavbarComponent, FooterComponent, FormsModule, NgIf, RouterModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {

  employee: Employee = {
    id: 0,
    firstName: "",
    lastName: "",
    password: "",
    registrationDate: "",
    dailyWage: 0,
    role: ""
  }


  constructor(private employeeService: EmployeeService){}

  onSubmit(employee: Employee): void
  {
    this.employeeService.addEmployee(employee);
  }

}
