import { Injectable, signal } from '@angular/core';
import { Employee } from './models/employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: any = signal<Employee[]>([]);
  baseUrl = "http://localhost:8080/lib-auto/api/employee"

  constructor(private router: Router, private http: HttpClient) { }


  getEmployees(): Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this.baseUrl + "/employees");
  }

  getEmployee(id: number): Employee | null
  {
    let result = null;
    this.employees().forEach((employee: Employee) => {
      if (employee.id === id)
        result = employee;
    });
    return result;
  }

  addEmployee(employee: Employee):void
  {
    this.http.post(this.baseUrl + "/create", employee).subscribe(
    {
        next: response => {
          console.log(response.toString());
          this.employees().push(employee);
          this.router.navigate(["/employees"]);
        },
        error: error => 
        {
          console.log(error);
          this.router.navigate(["/employees"]);
        }
    })

  }
}
