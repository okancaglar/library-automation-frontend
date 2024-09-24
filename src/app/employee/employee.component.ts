import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { GeneralNavbarComponent } from '../general-navbar/general-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { inject } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FooterComponent, GeneralNavbarComponent, RouterModule, FormsModule, NgFor, NgIf],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  employees?: Employee[] | undefined = undefined;
  searchText: string = "";
  constructor(private employeeService: EmployeeService){
  }
  
  ngOnInit(): void {
    if (this.employees === undefined) this.employeeService.getEmployees().subscribe(
      data => {
        this.employeeService.employees.set(data);
        this.employees = this.employeeService.employees();
      }
    );
 
  }

  onSearch(searchTerm: string){

    let resultArray: Employee[] = [];

    this.employees?.forEach((employee: Employee) => {
      if((employee.firstName + employee.lastName).includes(searchTerm))
        resultArray.push(employee);
    });
    if (resultArray.length > 0 && searchTerm.trim() !== "")
      this.employees = resultArray;
    else this.employees = this.employeeService.employees();
  }

  onAddEmployee(){}


}
